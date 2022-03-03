import { useEffect, useState } from "react";
import Button from "./button";
import Heading from "./heading";
import NewTaskInput from "./newTaskInput";
import SubHeading from "./subheading";
import TodoList from "./todoList";

const Homepage = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTasks] = useState<string[]>([]);

    const handleClick = () => {
        setShowAdd(!showAdd);
    };

    const handleAdd = (newTask: string) => {
        const taskList = tasks;
        const newList = [...taskList, newTask];
        setTasks(newList);
        localStorage.setItem("taskList", JSON.stringify(newList));
        setShowAdd(false);
    };

    const handleRemove = (task: string) => {
        const taskList = tasks;
        const index = taskList.indexOf(task);
        taskList.splice(index, 1);
        setTasks([...taskList]);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    };

    useEffect(() => {
        const taskList = localStorage?.getItem("taskList");
        if (taskList) {
            setTasks(JSON.parse(taskList));
        }
    }, []);

    return (
        <div className="home-container">
            <Heading />
            <SubHeading />
            <TodoList tasks={tasks} handleRemove={handleRemove} />
            {showAdd ? (
                <NewTaskInput handleAdd={handleAdd} setShowAdd={setShowAdd} />
            ) : (
                <Button text={"Add New"} handleClick={handleClick} />
            )}
        </div>
    );
};
export default Homepage;
