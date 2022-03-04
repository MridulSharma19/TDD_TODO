import { useEffect, useState } from "react";
import Button from "./button";
import Heading from "./heading";
import NewTaskInput from "./newTaskInput";
import SubHeading from "./subheading";
import TodoList from "./todoList";

interface Props {
    tasks: string[];
    handleRemove: Function;
    handleAdd: Function;
    showAdd: boolean;
    handleClick: Function;
    name: string;
}

const Homepage = ({ tasks, handleRemove, handleAdd, showAdd, handleClick, name }: Props) => {
    return (
        <div className="home-container">
            <Heading />
            <SubHeading name={name} />
            <TodoList tasks={tasks} handleRemove={handleRemove} />
            {showAdd ? (
                <NewTaskInput handleAdd={handleAdd} />
            ) : (
                <Button text={"Add New"} handleClick={handleClick} />
            )}
        </div>
    );
};
export default Homepage;
