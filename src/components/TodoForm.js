import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/todo.context";
import makeStyles from "../styles/TodoFormStyles";
import { ADD_TODO } from "../constants/actions";

function useInputState(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => setValue(e.target.value);
  const clearValue = () => setValue("");

  return [value, handleChange, clearValue];
}

function TodoForm() {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, clearValue] = useInputState();
  const classes = makeStyles();

  return (
    <form 
    onSubmit={(e)=> {
        e.preventDefault();
        dispatch({type: ADD_TODO, payload: value});
        clearValue();
    } }>
      <input
        type="text"
        placeholder="Hoy tengo que..."
        value={value}
        onChange={handleChange}
        className={classes.input}
      />
    </form>
  );
}
export default TodoForm;

