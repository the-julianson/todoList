import uuid from 'uuid/dist/v4';
import {actionTypes } from './todo.actions';

export const todosReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, { id: uuid(), task: action.payload, complete: false }];
    case actionTypes.REMOVE_TODO:
        return state.filter(todo => todo.id !== action.payload);
    case actionTypes.COMPLETE_TODO:
        state[action.payload].complete = !state[action.payload].complete;
        
        return state
    default:
      throw new Error("u must provide a task");
  }
};


//4th we can now add a reducer that will take the `state and an action an return an object`