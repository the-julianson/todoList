import React, {useContext, useState} from 'react';
import {TodosContext} from '../store/todo.context';
import {actionTypes} from '../store/todo.actions';

const TodoForm = () => {
    const [, dispatch ] = useContext(TodosContext)

    const [task, setTask] = useState('');

const handleSubmit = e => {
  e.preventDefault();
  debugger;
  dispatch({type: actionTypes.ADD_TODO, payload: task})
  setTask('');
};
    return (
<form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Aun me falta hacer...."
        value={task}
        onChange={(e)=> {
          debugger;
          setTask(e.target.value);}}
        required
        ></input>
        <input type="submit" value="Agregar mi tarea"></input>
      </form>
    )
}
export default TodoForm;