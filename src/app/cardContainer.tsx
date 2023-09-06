import React, { ChangeEvent, useState } from 'react'

import { Log } from '../pages/timer/timer';

import LogCard from '../public components/logCard';

interface CardContainerType {
    events: Array<Log>
    addCommentToEvent: (comment: string, index: number) => void
}

const CardContainer: React.FC<CardContainerType> = ({ events, addCommentToEvent }) => {

    return (
        <div className='card-container-main'>
            {
                events.map((event, idx) => <LogCard key={idx} index={idx} log={event} addCommentToEvent={addCommentToEvent} />)
            }
        </div>
    );
}

export default CardContainer