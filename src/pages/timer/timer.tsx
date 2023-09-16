import React from 'react'
import { useState, useEffect } from "react";
import './timer.css'

export interface Log {
    idx: string,
    start: number,
    end: number | null
    comment: string | null
}

interface TimerViewType {
    updateEvents: (events: Array<Log>) => void;
    updateState: (state: boolean) => void;
    updateTimer: (timer: number) => void;
}


const TimerView: React.FC<TimerViewType> = ({ updateEvents, updateState, updateTimer }) => {
    const [count, setCount] = useState<number>(0.0);
    const [timerState, settimerState] = useState<boolean>(false);
    const [events, setevents] = useState<Array<Log>>([])

    function round(num: number): number {
        return Math.round(num * 10) / 10
    }

    const handleKeyEvent = (e: KeyboardEvent) => {
        if (!isNaN(parseInt(e.key))) {
            let log: Log = {
                idx: e.key,
                start: round(count),
                end: null,
                comment: null
            }
            if (events.length > 0) {
                events[events.length - 1].end = round(count);
                setevents((prevEvents) => [...prevEvents, log])
                updateEvents([...events, log]);

            } else {
                setevents([log]);
                updateEvents([log]);
            }
            console.log(events);
        }
    }

    useEffect(() => {
        updateState(timerState);
        let interval: any = null;
        if (timerState) {
            interval = setInterval(() => {
                setCount((count) => count + 0.1);
            }, 100)
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [timerState]);

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyEvent)

        return () => document.body.removeEventListener('keydown', handleKeyEvent)

    }, [handleKeyEvent])

    function stateStart() {
        settimerState(true);
    }
    function stateReset() {
        // if (events.length > 0) {
        //     events[events.length - 1].end = round(count);
        //     updateEvents(events)
        // }
        settimerState(false);
        setCount(0);
        setevents([])
        updateEvents([]);
    }
    function stateStop() {
        if (events.length > 0) {
            events[events.length - 1].end = round(count);
            updateEvents(events);
        }
        settimerState(false);
        updateTimer(Math.round(count * 10) / 10);
    }


    return (
        <div className='timer-main col center'>
            <div className='clock'>
                {count === 0 ? 'Timer' : Math.round(count * 10) / 10}
            </div>
            <div className='row timer-button-row'>
                <div className='button start-button center prevent-select' onClick={(e) => { stateStart() }}>Start</div>
                <div className='button stop-button center prevent-select' onClick={(e) => { stateStop() }}>Stop</div>
                <div className='button reset-button center prevent-select' onClick={(e) => { stateReset() }}>Reset</div>
            </div>
        </div>




    )
}

export default TimerView