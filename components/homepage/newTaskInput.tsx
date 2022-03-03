import { useState } from "react";
import AddButton from "./addbutton";

interface Props {
    setShowAdd: Function;
}

const NewTaskInput = ({ setShowAdd }: Props) => {
    const [newTask, setNewTask] = useState("");

    const handleChange = (e: any) => {
        setNewTask(e.target.value);
    };

    const handleClick = () => {
        const taskList = localStorage?.getItem("taskList");
        if (taskList) {
            const parsedList = JSON.parse(taskList);
            const newList = [...parsedList, newTask];
            localStorage.setItem("taskList", JSON.stringify(newList));
        } else {
            const newList = [newTask];
            localStorage.setItem("taskList", JSON.stringify(newList));
        }
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
            <AddButton text="Add Task" handleClick={handleClick} />
        </div>
    );
};

export default NewTaskInput;
