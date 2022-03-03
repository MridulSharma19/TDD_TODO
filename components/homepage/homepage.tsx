import { useEffect, useState } from "react";
import Button from "./button";
import Heading from "./heading";
import NewTaskInput from "./newTaskInput";
import SubHeading from "./subheading";
import TodoList from "./todoList";

const Homepage = () => {
    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleClick = () => {
        setShowAdd(!showAdd);
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
            <TodoList tasks={tasks} />
            {showAdd ? (
                <NewTaskInput setShowAdd={setShowAdd} />
            ) : (
                <Button text={"Add New"} handleClick={handleClick} />
            )}
        </div>
    );
};
export default Homepage;
