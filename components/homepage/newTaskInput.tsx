import { useState } from "react";
import Button from "./button";

interface Props {
    handleAdd: Function;
}

const NewTaskInput = ({ handleAdd }: Props) => {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e: any) => {
        setNewTask(e.target.value.trim());
    };

    const handleClick = () => {
        handleAdd(newTask);
    };

    return (
        <div className="flex">
            <form
                onSubmit={(e: any) => {
                    e.preventDefault();
                    handleClick();
                }}
                className="form-group"
            >
                <label htmlFor="newTask">New Task</label>
                <input
                    type="text"
                    id="newTask"
                    name="newTask"
                    value={newTask}
                    placeholder="New Task"
                    onChange={handleChange}
                    autoFocus
                />
                <input type="submit" hidden />
            </form>
            <Button text="Add Task" handleClick={handleClick} disabled={newTask.length < 1} />
        </div>
    );
};

export default NewTaskInput;
