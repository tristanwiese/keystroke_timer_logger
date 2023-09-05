import React from 'react'

import './logCard.css'

import {Log} from '../pages/timer/timer';

const LogCard:React.FC<Log> = ({idx, start, end}) => {
  return (
    <div className='card-main'>
        <div className='card-text'><b>Person:</b> {idx}</div>
        <div className='card-text'><b>Start: </b>{start}</div>
        <div className='card-text'><b>End: </b>{end}</div>
    </div>
  )
}

export default LogCard