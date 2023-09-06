import React, { ChangeEvent, KeyboardEvent, useState, Dispatch, SetStateAction } from 'react'

import './logCard.css'

import { Log } from '../pages/timer/timer';

interface LogCardType {
  log: Log,
  index: number
  addCommentToEvent: (comment: string, index: number) => void
}

const LogCard: React.FC<LogCardType> = ({ log, index, addCommentToEvent }) => {

  function enter(e: KeyboardEvent<HTMLInputElement>) {
    e.code === 'Enter' && editComment();
  }
  function editComment() {
    setshowInput(!showInput);
  }
  function inputComment(e: ChangeEvent<HTMLInputElement>) {
    setcomment(e.target.value)
    addCommentToEvent(e.target.value, index);
  }
  const [showInput, setshowInput] = useState<boolean>(false)
  const [comment, setcomment] = useState('');

  return (
    <div className='card-main col'>
      <div className="row space-between">
        <div className='card-text center'><b>Person:</b> {log.idx}</div>
        <div className='card-text center'><b>Start: </b>{log.start}</div>
        <div className='card-text center'><b>End: </b>{log.end}</div>
        <span className="material-symbols-outlined comment-icon" onClick={editComment}>
          add_comment
        </span>
      </div>
      {
        (comment.length !== 0 || showInput) && <div className='comment'>{
          showInput ? <input type="text" value={comment} placeholder='Comment' onChange={inputComment} onKeyDown={enter} /> : <div>Comment: {comment}</div>
        }</div>
      }
    </div>
  )
}

export default LogCard