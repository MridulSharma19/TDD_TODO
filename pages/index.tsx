import Head from "next/head";

import Homepage from "@/components/homepage/homepage";
import { useEffect, useState } from "react";

export default function Home() {
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
        <div className="container">
            <Head>
                <title>Todo App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homepage
                tasks={tasks}
                handleAdd={handleAdd}
                handleClick={handleClick}
                handleRemove={handleRemove}
                showAdd={showAdd}
            />
        </div>
    );
}
