import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

import './logCard.css'

import { Log } from '../pages/timer/timer';

const LogCard: React.FC<Log> = ({ idx, start, end }) => {

  function enter(e: KeyboardEvent<HTMLInputElement>) {
    e.code === 'Enter' && editComment();
  }
  function editComment() {
    setshowInput(!showInput);
  }
  function inputComment(e: ChangeEvent<HTMLInputElement>) {
    setcomment(e.target.value)
  }

  const [comment, setcomment] = useState<string>('')
  const [showInput, setshowInput] = useState<boolean>(false)

  return (
    <div className='card-main col'>
      <div className="row space-between">
        <div className='card-text center'><b>Person:</b> {idx}</div>
        <div className='card-text center'><b>Start: </b>{start}</div>
        <div className='card-text center'><b>End: </b>{end}</div>
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