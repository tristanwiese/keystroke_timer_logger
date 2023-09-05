import { JsonObjectExpression } from "typescript";

import { Log } from "../pages/timer/timer";

interface Event{
    start: number,
    end: number,
}

let test:{[key: string]:Array<Event>} = {
    1: [{start: 0, end: 0},{start: 0, end: 0}],
    2: [{start: 0, end: 0},{start: 0, end: 0}]
}

export default function generateReport(events:Log[]): string{
    let report:{[key: string]:Array<Event>} = {};
    events.forEach(event =>{
        let key:string = event.idx;
        let data:Event = {start: event.start, end: event.end!};
        if(event.idx in report){
            report[key].push(data);
        }else{
            report[key] = [data];
        }
    })
    let data:string = JSON.stringify(report);
    return data;
}