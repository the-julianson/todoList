import React, { createContext, useReducer, useEffect } from "react";

import todosReducer from "../reducers/todo.reducers";

const defaultTodos = [{ id: 1, task: "", complete: false }];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosContextProvider(props) {
  //todos is the state returned by useReducer
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos, () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : defaultTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const [,dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
