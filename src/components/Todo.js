import React, { useContext } from "react";
import { TodosContext } from "../contexts/todo.context";
import { TOGGLE_TODO, REMOVE_TODO } from "../constants/actions";
import useStyles from "../styles/TodoStyles";

function Todo({ todo }) {
  const { dispatch } = useContext(TodosContext);
  const classes = useStyles();
  const { id, task, complete } = todo;
  return (
    <li
      className={classes.Todo}
      onClick={() => {
        dispatch({ type: TOGGLE_TODO, payload: id });
      }}
    >
      <span
        style={{
          textDecoration: complete ? `line-through` : ``,
          color: complete ? `#9aa1a5` : `#36454F`
        }}
      >
        {task}
      </span>
      <div className="icon">
        <i className="fas fa-trash" 
         onClick={ (e) => {
          e.stopPropagation();
          dispatch({type: REMOVE_TODO, payload: id})
         }}/>
      </div>
    </li>
  );
}

export default Todo;
