import React from 'react'
import { useState, useEffect } from "react";
import './timer.css'

export interface Log{
    idx:String,
    start:number,
    end:number|null
}

interface TimerViewType{
    updateEvents: (events: Array<Log>)=>void;
}


const TimerView:React.FC<TimerViewType> = ({updateEvents}) => {
    const [count, setCount] = useState<number>(0.0);
    const [timerState, settimerState] = useState(false);
    const [events, setevents] = useState<Array<Log>>([])

    function round(num: number):number{
        return Math.round(num * 10) / 10
    }

    const handleKeyEvent = (e: KeyboardEvent) => {
        if (!isNaN(parseInt(e.key))){
            let log:Log = {
                idx: e.key,
                start: round(count),
                end: null
            }
            if(events.length > 0){
                events[events.length-1].end = round(count);
                setevents((prevEvents)=>[...prevEvents, log])
                updateEvents([...events, log]);

            }else{
                setevents([log]);
                updateEvents([log]);
            }
            console.log(events);        
        }
        // switch (e.key) {
        //     case '1':
        //         console.log(e.key + ":" + count);
        //         break;
        //     case '2':
        //         console.log(e.key);
        //         break;
        //     case '3':
        //         console.log(e.key);
        //         break;
        //     case '4':
        //         console.log(e.key);
        //         break;
        //     case '5':
        //         console.log(e.key);
        //         break;
        //     case '6':
        //         console.log(e.key);
        //         break;
        //     case '7':
        //         console.log(e.key);
        //         break;
        //     case '8':
        //         console.log(e.key);
        //         break;
        //     case '9':
        //         console.log(e.key);
        //         break;
        // }
    }
    
    useEffect(() => {
        let interval:any = null;
        if(timerState){
           interval =  setInterval(()=>{
                setCount((count)=> count + 0.1);
            }, 100)
        }else{
            clearInterval(interval);
        }

        return ()=>{
            clearInterval(interval);
        }
    }, [timerState]);

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyEvent)

        return () => document.body.removeEventListener('keydown', handleKeyEvent)

    }, [handleKeyEvent])

    function stateStart(){
        settimerState(true);
    }
    function stateReset(){
        if (events.length > 0){
            events[events.length-1].end = round(count);
            updateEvents(events)
        }
        settimerState(false);
        setCount(0);
    }
    function stateStop(){
        if (events.length > 0){
            events[events.length-1].end = round(count);
            updateEvents(events);
        }
        settimerState(false);
    }


  return (
    <div className='timer-main col center'>
        <div className='clock'>
            {count === 0 ? 'Timer' : Math.round(count * 10) / 10}
        </div>
        <div className='row timer-button-row'>
            <div className='button start-button center prevent-select' onClick={(e)=>{stateStart()}}>Start</div>
            <div className='button stop-button center prevent-select' onClick={(e)=>{stateStop()}}>Stop</div>
            <div className='button reset-button center prevent-select' onClick={(e)=>{stateReset()}}>Reset</div>
        </div>
    </div>
    



  )
}

export default TimerView