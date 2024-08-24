import { useState } from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import Todolist from './component/Todolist';

function App() {
  const [list, setList] = useState([]);
  let addList = (todos =>{
    setList([...list, todos]);
  })
  const deleteList = (key)=>{
    let newlist = [...list];
    newlist.splice(key, 1);
    setList([...newlist])
  }
  return (
    <div>
      <div className='main'>
        <div className='center'>
          <TodoInput addList={addList} />
          <h1 className='logo'>Complete the Task <i className="fa-regular fa-square-check"></i></h1>
          <hr/>
          {list.map((listItem, i)=>{
            return(
              <Todolist key={i} index={i} item={listItem} deleteTodo= {deleteList} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
