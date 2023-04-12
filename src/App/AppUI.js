import React from "react";
import { ToDoContext } from "../ToDoContext"
import { ToDoCounter } from "../ToDoCounter"
import { ToDoSearch } from "../ToDoSearch"
import { ToDoList } from "../ToDoList"
import { ToDoItem } from "../ToDoItem"
import { ToDoForm } from "../ToDoForm"
import { CreateTodoButton } from "../CreateToDoButton"
import { Modal } from "../Modal"

function AppUI() {

    const {
        error, 
        loading, 
        searchedToDoS, 
        completeToDo, 
        deleteToDo,
        openModal,
        setOpenModal,
    } = React.useContext(ToDoContext)


    return (
        <React.Fragment> {/*"React.Fragment" is an invisible tag*/}
            <ToDoCounter />
            <ToDoSearch />
            
            <ToDoList>
                { error && <p>Cry, there was a mistake...</p>}
                { loading && <p>We are loading, do not despair...</p>}
                { (!loading && !searchedToDoS.length) && <p>Create your first ToDo!!</p>}


                {searchedToDoS.map(ToDo => (
                    <ToDoItem 
                    key={ToDo.text} 
                    text={ToDo.text}
                    completed={ToDo.completed}
                    onComplete={() => completeToDo(ToDo.text)}
                    onDelete={() => deleteToDo(ToDo.text)}
                    />
                    ))}
            </ToDoList>

            {openModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
    
    </React.Fragment>
    );
}


export { AppUI };

                