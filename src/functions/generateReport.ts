import { JsonObjectExpression } from "typescript";

import { Log } from "../pages/timer/timer";

interface Event{
    start: number,
    end: number,
    comment: string
}

export default function generateReport(events:Log[], time:number): string{
    let structuredData = getStructure(events);

    let report = getString(structuredData, time);
    
    return report;
}

function getStructure(events:Log[]):{[key: string]:Array<Event>}{
    let restructured:{[key: string]:Array<Event>} = {};
    events.forEach(event =>{
        let key:string = event.idx;
        let data:Event = {start: event.start, end: event.end!, comment: event.comment!};
        if(event.idx in restructured){
            restructured[key].push(data);
        }else{
            restructured[key] = [data];
        }
    })
    return restructured;
}

function getString(data:{[key: string]:Array<Event>}, time:number):string{
    // console.log(data);
    let header = 
    `Detailed Report:\n\n\tParticipants: ${Object.keys(data).length}\n\tDuration: ${time}\n\n`;

    let body = '';

    for(let id in data){
        let totalSpeakingTime = getTotalSpeakingTime(data[id]);

        body += `Person ${id} logs:\n\tDuration: ${totalSpeakingTime}\n\tSlots: ${data[id].length}\n\n`

        data[id].forEach((log, i)=>{
            body += `\tLog ${i+1}:\n\t\tStart: ${log.start}\n\t\tEnd:${log.end}\n\t\tDuration: ${Math.round((log.end-log.start) * 10) / 10}\n\t\tComment: ${log.comment === null ? 'no comment' : log.comment}\n\n`
        })
    }

    return header+body;
}

function getTotalSpeakingTime(logs:Array<Event>):number{
    let totalTime = 0;
    logs.forEach(log => {
        let difference = log.end-log.start;
        totalTime += difference;
    });

    return Math.round(totalTime * 10) / 10;
}