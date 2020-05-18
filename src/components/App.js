import React from "react";

import makeStyles from "../styles/AppStyles";
import TodoApp from "./TodoApp";

function App() {
  const classes = makeStyles();

  return (
    <div className="App">

      <div className={classes.header}>
        <h1>
          para<span>HACER</span>
        </h1>
        <h2>Empieza el día con tu propósito en mente</h2>
      </div>
      <TodoApp />
    </div>
  );
}

export default App;
