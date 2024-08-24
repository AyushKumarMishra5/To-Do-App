import React, { useState } from 'react'
import './Todoinput.css'

function TodoInput(props) {
  const [todos, setTodos] = useState('');
  const enterPress = (e)=>{
    if(e.keyCode === 13){
      props.addList(todos);
      setTodos('');
    }
  }
  return (
    <div className='input'>
      <input type='text' className='to-do' placeholder='Enter a task' value={todos} onChange={e=>{
        setTodos(e.target.value)
      }}
      onKeyDown={enterPress}
       />
      <button className='add-btn' onClick={()=>{
        if (todos !== "")
        props.addList(todos);
        setTodos("");
      }}>+</button>
    </div>
  )
}

export default TodoInput