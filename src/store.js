import React, {createContext, useReducer} from 'react';


//1st define an Initial State
const initialState = [
    {id : '1', task : 'Terminar app', complete: false},
    {id : '2', task : 'Leer 1 hora', complete: false},
    {id : '3', task : 'Limpiar la pieza', complete: false},
  ];
  //4th we can now add a reducer that will take the state and an action an return an object
  const reducer = (state,action) => {
      switch(action.type) {
          case 'ADD_TASK':
              return([...state, {id: '4', task: action.payload, complete: false}] );
        default:
            return state
      }
  }

  //2nd use Create context to provide a Context to out app (Context.Provider)
const StoreContext = createContext([]);



//3rd now we can actually pass the context to the store as a Provider
const Store = ({children}) => {
    //5TH WE can create a reducer, we pass our reducer and initialState
    // we 
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={[state,dispatch]}>{children}</StoreContext.Provider>
    )
}

export default Store;