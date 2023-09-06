import { JsonObjectExpression } from "typescript";

import { Log } from "../pages/timer/timer";

interface Event{
    start: number,
    end: number,
    comment: string
}

export default function generateReport(events:Log[]): string{
    let report:{[key: string]:Array<Event>} = {};
    events.forEach(event =>{
        let key:string = event.idx;
        let data:Event = {start: event.start, end: event.end!, comment: event.comment!};
        if(event.idx in report){
            report[key].push(data);
        }else{
            report[key] = [data];
        }
    })
    let data:string = JSON.stringify(report);
    return data;
}