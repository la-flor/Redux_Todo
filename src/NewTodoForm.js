import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_FORMDATA = {
        memo: "",
    }

    const [formData, setFormData] = useState(INITIAL_FORMDATA);
    
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        formData.memo.trim() !== "" &&
            addTodo({...formData, id: uuidv4()});
        setFormData(INITIAL_FORMDATA);
    }


    return (
        <div className="NewTodoForm-container text-center p-4">
            <form onSubmit={handleSubmit} className="NewTodoForm">
                <label for="todo">
                    New Todo:
                </label>
                <br />
                <input
                    id="memo"
                    name="memo"
                    type="text"
                    value={formData.memo}
                    onChange={handleChange}
                    className="form-control text-center"
                    />
                <button className="btn btn-success">Create Todo!</button>
            </form>
        </div>
    )
}

export default NewTodoForm;