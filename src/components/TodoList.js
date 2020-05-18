import React, { useContext } from "react";

import Todo from './Todo';
import { TodosContext } from "../contexts/todo.context";

function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <ul style={{ paddingLeft: 10, width: "95%", color: '#2c3e50' }}>
      {todos.map(todo => (
       <Todo key={todo.id} todo={todo}/>
      ))}
    </ul>
  );
}
export default TodoList;
