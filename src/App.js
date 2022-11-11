import { useState } from 'react';
import data from './data.json'
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todos , setTodos] = useState(data);

  const onCompleted = (id) => {


    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem = (id) => {
     setTodos([...todos].filter(todo => todo.id !== id));
  }

  const addTodo = (newTodo, newDate ) => {
    let newItem = {id : +newDate(), task: newTodo(), completed: false};

    setTodos([...todos, newItem,]);
  }

  return (
    <div className="container">
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos = {todos} onCompleted = {onCompleted} onDeleteItem = {onDeleteItem}/>
    </div>
  );
}



export default App;
