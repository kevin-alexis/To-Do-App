import React from "react";
import { ToDoContext } from "../ToDoContext";

function ToDoForm() {

    const [newToDoValue, setNewToDoValue] = React.useState("");

    const  {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext)

    const onChange = (event) => {
        setNewToDoValue( event.target.value );
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addToDo(newToDoValue)
        setOpenModal(false)
    }


    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newToDoValue}
                onChange={onChange}
                placeholder="Add a to-do"
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                type="submit"
                >
                    Add To Do
                </button>
            </div>
        </form>
    )
}

export { ToDoForm }