import React from "react";

const Todo = ({id, memo, deleteTodo}) => {
    function handleDelete() {
        deleteTodo(id);
    }
    
    return (
        <li id={id} className="Todo-memo">
            {memo} &nbsp;&nbsp;
            <button className="btn btn-sm btn-danger" onClick={handleDelete}>X</button>
        </li>
    )
    
}

export default Todo;