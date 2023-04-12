import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();


function ToDoProvider(props) {
    const {
        item: ToDoS, 
        saveItem: saveToDoS,
        loading,
        error
        } = useLocalStorage("TODOS_V1", []);
        const [searchValue, setSearchValue] = React.useState("");
        const [openModal, setOpenModal] = React.useState(false);
        
        const completedToDoS = ToDoS.filter(ToDo => ToDo.completed).length;
        const totalToDoS = ToDoS.length;
        
        let searchedToDoS = [];
        
        if(!searchValue.length >= 1){
            searchedToDoS = ToDoS;
        } else{
            searchedToDoS = ToDoS.filter(ToDo => {
            const toDoText = ToDo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
        
            return toDoText.includes(searchText);
            })   
        }
        

        const addToDo = (text) => {
            const newToDoS = [...ToDoS];
            newToDoS.push({
                completed: false,
                text,
            });
            saveToDoS(newToDoS);
        }

        const completeToDo = (text) => {
            const toDoIndex = ToDoS.findIndex(ToDo => ToDo.text === text);
        
            const newToDoS = [...ToDoS];
            newToDoS[toDoIndex].completed = true;
            saveToDoS(newToDoS);
        }
        
        const deleteToDo = (text) => {
            const toDoIndex = ToDoS.findIndex(ToDo => ToDo.text === text);
        
            const newToDoS = [...ToDoS];
            newToDoS.splice(toDoIndex, 1);
            saveToDoS(newToDoS);
        };
    
    return (
        <ToDoContext.Provider value={{
            error,
            loading ,
            totalToDoS,
            completedToDoS,
            searchValue,
            setSearchValue,
            searchedToDoS,
            addToDo,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal
            }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider}
