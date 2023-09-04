import React from 'react'

import {Log} from '../pages/timer/timer';

import LogCard from '../public components/logCard';

interface CardContainerType{
    events:Array<Log>
}

const CardContainer:React.FC<CardContainerType> = ({events}) => {
    
  return (
        <div className='card-container-main'>
            {
                events.map((event)=><LogCard key={'test'} idx={event.idx} start={event.start} end={event.end}/>)
            }
        </div>
  );
}

export default CardContainer