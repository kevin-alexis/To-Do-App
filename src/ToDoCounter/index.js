import React from "react";
import { ToDoContext } from "../ToDoContext"
import "./ToDoCounter.css"

function ToDoCounter() {
    const {totalToDoS, completedToDoS} = React.useContext(ToDoContext);
    
    return (
    <h2 className="ToDoCounter">You have completed {completedToDoS} of {totalToDoS} ToDo's</h2>
    );
}

export { ToDoCounter };