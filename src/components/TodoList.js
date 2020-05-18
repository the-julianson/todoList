import React, { useContext } from "react";
import { TodosContext } from "../store/todo.context";
import { actionTypes } from "../store/todo.actions";

const TodoList = ({ id, task, completed }) => {
  const [state, dispatch] = useContext(TodosContext);

  return (
    <div className="tasks">
      <ul>
        {state.map((todo, index) => {
            
          function handleClick() {
            console.log(index);
            dispatch({
              type: actionTypes.COMPLETE_TODO,
              payload: index
            });
          }
          console.log(todo.id);
          return (
            <li key={todo.id} onClick={handleClick}>
              {todo.task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
