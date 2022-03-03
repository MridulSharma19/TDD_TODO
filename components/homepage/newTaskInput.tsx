import { useState } from "react";
import Button from "./button";

interface Props {
    setShowAdd: Function;
    handleAdd: Function;
}

const NewTaskInput = ({ setShowAdd, handleAdd }: Props) => {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e: any) => {
        setNewTask(e.target.value);
    };

    const handleClick = () => {
        handleAdd(newTask);
    };

    return (
        <div className="flex">
            <div className="form-group">
                <label htmlFor="newTask">New Task</label>
                <input
                    type="text"
                    id="newTask"
                    name="newTask"
                    value={newTask}
                    placeholder="New Task"
                    onChange={handleChange}
                />
            </div>
            <Button text="Add Task" handleClick={handleClick} />
        </div>
    );
};

export default NewTaskInput;
