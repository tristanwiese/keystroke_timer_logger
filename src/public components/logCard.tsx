import React from 'react'

import './logCard.css'

import {Log} from '../pages/timer/timer';

const LogCard:React.FC<Log> = ({idx, start, end}) => {
  return (
    <div className='card-main'>
        <div><b>Person:</b> {idx}</div>
        <div><b>Start: </b>{start}</div>
        <div><b>End: </b>{end}</div>
    </div>
  )
}

export default LogCard