import React from "react";

import "./ToDoItem.css"


function ToDoItem(props){
    
    return(
        <li className={`ToDoItem ${props.completed && 'ToDoItem--active'}`}>
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
            ✓
            </span>
            <p className={`TodoItem-p ${props.completed && 'Icon-p--complete'}`}>{props.text}</p>
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >X</span>
        </li>
    );
}

export { ToDoItem };