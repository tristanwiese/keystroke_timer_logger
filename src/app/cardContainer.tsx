import React from 'react'

import { Log } from '../pages/timer/timer';

import LogCard from '../public components/logCard';

interface CardContainerType {
    events: Array<Log>
}

const CardContainer: React.FC<CardContainerType> = ({ events }) => {

    console.log(events.length);

    return (
        <div className='card-container-main'>
            {
                events.map((event, idx) => <LogCard key={idx} idx={event.idx} start={event.start} end={event.end} />)
            }
        </div>
    );
}

export default CardContainer