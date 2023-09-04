import React from "react";

import {useState} from 'react';

import TimerView from "../pages/timer/timer";

interface AppType{
    title:string
}

const App:React.FC<AppType> = ({title})=>{

  const [count, setcount] = useState<number>(0);
  const [debouncer, setdebouncer] = useState<boolean>(false)

  document.body.addEventListener('keydown', (e)=>{
        // console.log(e);
        switch (e.key) {
            case '1':
                console.log(e.key + ":" + count);
                break;
            case '2':
                console.log(e.key);
                break;
            case '3':
                console.log(e.key);
                break;
            case '4':
                console.log(e.key);
                break;
            case '5':
                console.log(e.key);
                break;
            case '6':
                console.log(e.key);
                break;
            case '7':
                console.log(e.key);
                break;
            case '8':
                console.log(e.key);
                break;
            case '9':
                console.log(e.key);
                break;
        }
    })

    function func(timer:number){
      if(!debouncer){
        setcount(timer);
        setdebouncer(true);
        setTimeout(()=>{
          setdebouncer(false);
        }, 1000)
      }
    }
  return (
    <div className="center title">
        <TimerView func={func}/>
    </div>
  )
}

export default App