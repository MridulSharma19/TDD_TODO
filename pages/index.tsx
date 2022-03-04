import { useEffect, useState } from "react";
import Head from "next/head";

import Homepage from "@/components/homepage/homepage";
import LoginPage from "@/components/loginpage/loginpage";
import Button from "@/components/homepage/button";

export default function Home() {
    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTasks] = useState<string[]>([]);
    const [name, setName] = useState("");

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

    const handleName = (username: string) => {
        setName(username);
        localStorage.setItem("username", username);
    };

    const Signout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("taskList");
        setName("");
        setTasks([]);
    };

    useEffect(() => {
        const taskList = localStorage?.getItem("taskList");
        if (taskList) {
            setTasks(JSON.parse(taskList));
        }
    }, []);

    useEffect(() => {
        const name = localStorage?.getItem("username");
        if (name) {
            setName(name);
        }
    }, []);

    return (
        <div className="container">
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {name.length > 0 && (
                <div className="logout-container">
                    <Button text={"Sign Out"} handleClick={Signout} remove={true} />
                </div>
            )}
            {name.length > 0 ? (
                <Homepage
                    tasks={tasks}
                    handleAdd={handleAdd}
                    handleClick={handleClick}
                    handleRemove={handleRemove}
                    showAdd={showAdd}
                    name={name}
                />
            ) : (
                <LoginPage setName={handleName} />
            )}
        </div>
    );
}
