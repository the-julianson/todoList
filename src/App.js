import React, {useState} from "react";

import "./App.css";

function App() {

  const [tasks] = useState([
    {id : '1', task : 'Terminar app', complete: false},
    {id : '2', task : 'Leer 1 hora', complete: false},
    {id : '3', task : 'Limpiar la pieza', complete: false},
  ])
  

  return (
    <div className="App">
      <div className='navbar'>
           <h2>Comienza a agregar tus tareas</h2> 
      </div>
      <form>
        <input 
        type="text" 
        placeholder="Agrega tu tarea"
        ></input>
        <input type="submit"></input>
      </form>
      <div className="tasks">
            <ul>
              {tasks.map(task => {
                return (
                  <li key={task.id}>{task.task}</li>
                )
              })}
            </ul>
      </div>
    </div>
  );
}

export default App;
