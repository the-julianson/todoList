import React from "react";

import "./App.css";
import Store from './store';

function App() {

  
  return (
    <Store>
    <div className="App">
      <div className='navbar'>
           <h2>Comienza a agregar tus tareas</h2> 
      </div>
      <form>
        <input 
        type="text" 
        placeholder="Aun me falta hacer...."
        value={false}
        onChange={false}
        required
        ></input>
        <input type="submit" value="Agregar mi tarea"></input>
      </form>
      <div className="tasks">
            <ul>
              {false}
            </ul>
      </div>
    </div>
    </Store>
  );
}

export default App;
