import React from "react";
import './app.css'

import { useState } from 'react';

import TimerView from "../pages/timer/timer";
import CardContainer from "./cardContainer";
import { Log } from "../pages/timer/timer";
import generateReport from "../functions/generateReport";

interface AppType {
  title: string
}

const App: React.FC<AppType> = ({ title }) => {


  const [events, setevents] = useState<Array<Log>>([])
  const [showReport, setshowReport] = useState<boolean>(false);
  const [report, setreport] = useState<string>('');

  function updateEvents(events: Log[]) {
    console.log('App Events: ' + events);
    setevents(events);
  }
  function updateState(state: boolean) {
    setshowReport(state);
  }
  function getReport() {
    setreport(generateReport(events));
  }

  return (
    <div className="center app-main">
      <div className="app-component">
        <TimerView updateEvents={updateEvents} updateState={updateState} />
      </div>
      <div className="app-component">
        <CardContainer events={events} />
      </div>
      <div className="row center">
        {
          (!showReport && events.length > 0) && <div className="report-button prevent-select" onClick={getReport}>Generate Report</div>
        }
        {
          (report.length > 0) && <a href={"data:text/plain;charset=utf-8," + encodeURIComponent(report)} download={"report.txt"}><span className="material-symbols-outlined download-icon">download</span></a>
        }
      </div>
    </div>
  )
}

export default App