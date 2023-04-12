import React from "react";
import "./ToDoSearch.css"
import { ToDoContext } from "../ToDoContext";

function ToDoSearch() {

    const { 
        searchValue, 
        setSearchValue 
    } = React.useContext(ToDoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    };

    return (
    <input 
        placeholder="Search" 
        className="ToDoSearch"
        value={ searchValue }
        onChange={ onSearchValueChange } 
    />
    );
}

export { ToDoSearch };