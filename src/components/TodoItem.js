import React from 'react'

function TodoItem({todo, onCompleted, onDeleteItem}) {
    
    const getStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through' : 'none',
            margin: '20px',
            border: '1px solid #ffffff',
            backgraundColor: '#CCF7E3'
        }
    }

  return (
    <div style = {getStyle ()}>
      <input type= 'checkbox' checked = {todo.completed}/>
      Tarea= {() => onchange(todo.id)}
      {todo.task}
      <button className='add-btn' onClick = {() => onDeleteItem(todo.id)}>x</button>
    </div>
  )
}
export default TodoItem;
