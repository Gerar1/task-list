import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const [userInput , setUserInput] = useState();

    const handleOnChange = (e) =>{
        setUserInput(e.currenTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
            addTodo(userInput);
            setUserInput('');
        }
    }

  return (
    <div style = {{margin: 20}}>
        <h1>LISTA DE TAREAS CON REACT</h1>
        <form onSubmit = {handleSubmit}>
            <input  placeholder='añadir tarea' type = "text" value = {userInput} onChange = {handleOnChange}/>
            <buton>LISTA DE TAREAS</buton>
        </form>
      
    </div>
  )
}

export default TodoForm;