import React from "react";
import  { ToDoProvider } from "../ToDoContext"
import  { AppUI } from "./AppUI.js";

//import './App.css';

function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
