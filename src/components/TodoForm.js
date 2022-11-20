import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const [userInput , setUserInput] = useState("");

    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value);
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
        <form onSubmit = {handleSubmit}>
            <h1>Lista de Tareas con React</h1>
            <input  placeholder='Añade una Actividad o Tarea' type = "text" value = {userInput} onChange = {handleOnChange}/>
            <button className='abtn'>Confirmar y Añadir</button>
        </form>
      
    </div>
  )
}

export default TodoForm;