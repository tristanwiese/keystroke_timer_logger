import React from "react";
import './app.css'

import {useState} from 'react';

import TimerView from "../pages/timer/timer";
import CardContainer from "./cardContainer";
import { Log } from "../pages/timer/timer";

interface AppType{
    title:string
}

const App:React.FC<AppType> = ({title})=>{


  const [events, setevents] = useState<Array<Log>>([])

  function updateEvents(events: Log[]){
    console.log('App Events: ' + events);
    setevents(events);
  }

  return (
    <div className="center app-main">
        <div className="app-component">
          <TimerView updateEvents={updateEvents}/>
        </div>
        <div className="app-component">
          <CardContainer events={events}/>
        </div>
    </div>
  )
}

export default App