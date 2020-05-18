import React from "react";

import TodoList from './TodoList';
import TodoForm from "./TodoForm";

const TodoApp =() => {
      
  return (
    
    <div className="App">
      <div className='navbar'>
           <h2>Comienza a agregar tus tareas</h2> 
      </div>
      <TodoForm/>
      <TodoList/>
    </div>
  );
}
export default TodoApp;
