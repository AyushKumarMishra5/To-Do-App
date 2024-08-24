import React from 'react'
import './Todolist.css'

function Todolist(props) {
  return (
    <li className='list'>
        <p>{props.item}</p>
        <span className='delete'>
        <i class="fa-regular fa-trash-can" onClick={e=>{
          props.deleteTodo(props.index);
        }}></i>
        </span>
    </li>
  )
}

export default Todolist