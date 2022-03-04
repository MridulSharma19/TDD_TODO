import { useState } from "react";
import Button from "./button";

interface Props {
    handleAdd: Function;
}

const NewTaskInput = ({ handleAdd }: Props) => {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e: any) => {
        if (e.target.value.length < 251) {
            setNewTask(e.target.value);
        } else {
            setNewTask(e.target.value.substr(0, 250));
        }
    };

    const handleClick = () => {
        handleAdd(newTask.trim());
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
                    maxLength={250}
                />
                <input type="submit" hidden />
            </form>
            <Button text="Add Task" handleClick={handleClick} disabled={newTask.length < 1} />
        </div>
    );
};

export default NewTaskInput;
