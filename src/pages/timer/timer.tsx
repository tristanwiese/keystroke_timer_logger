import React from 'react'
import { useState, useEffect } from "react";

import Timer from '../../functions/timer'

import './timer.css'
import { time } from 'console';

interface TimerViewType{
    func:(timer:number)=>void
}

const TimerView:React.FC<TimerViewType> = ({func}) => {

    console.log('load');

    const [count, setCount] = useState<number>(0.0);
    const [timerState, settimerState] = useState(false);
    
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
        func(count);
    }, [count])
    

    function stateStart(){
        settimerState(true);
    }
    function stateReset(){
        settimerState(false);
        setCount(0);
    }
    function stateStop(){
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