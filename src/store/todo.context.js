import React, {createContext, useReducer} from 'react';
import uuid from 'uuid/dist/v4';
import { todosReducer } from "./todo.reducer";

//1st define an Initial State
const initialState = [
    {id : uuid(), task : 'Terminar app', complete: false},
    {id : uuid(), task : 'Leer 1 hora', complete: false},
    {id : uuid(), task : 'Limpiar la pieza', complete: false},
  ];
  

  //2nd use Create context to provide a Context to out app (Context.Provider)
export const TodosContext = createContext([]);
//3rd now we can actually pass the context to the store as a Provider
const TodosContextProvider = ({children}) => {
    //5TH WE can create a reducer, we pass our reducer and initialState, using useReducer hook
    // The use reducer will take the reducer function, use the initial state to set the state
    // and I also ready ups a dispatch function for dispatching the action. 
    const [state, dispatch] = useReducer(todosReducer, initialState)
    return (
        <TodosContext.Provider value={[state,dispatch]}>{children}</TodosContext.Provider>
    )
}
export default TodosContextProvider;