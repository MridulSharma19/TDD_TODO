import { useState } from "react";
import Button from "./button";

interface Props {
    setShowAdd: Function;
    tasks: string[];
    setTasks: Function;
}

const NewTaskInput = ({ setShowAdd, tasks, setTasks }: Props) => {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e: any) => {
        setNewTask(e.target.value);
    };

    const handleClick = () => {
        const taskList = tasks;

        const newList = [...taskList, newTask];
        setTasks(newList);
        localStorage.setItem("taskList", JSON.stringify(newList));

        setShowAdd(false);
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
