import React from "react";
import { TodosContextProvider } from "../contexts/todo.context";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  return (
    <TodosContextProvider>
      <TodoForm/>
      <TodoList />
    </TodosContextProvider>
  );
}
export default TodoApp;



