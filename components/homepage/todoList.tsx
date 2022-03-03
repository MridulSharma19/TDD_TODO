import ListItem from "./listItem";

interface Props {
    tasks: string[];
    setTasks: Function;
}

const TodoList = ({ tasks, setTasks }: Props) => {
    const handleRemove = (task: string) => {
        const taskList = tasks;
        const index = taskList.indexOf(task);
        taskList.splice(index, 1);
        setTasks([...taskList]);
        localStorage.setItem("taskList", JSON.stringify(taskList));
    };
    return (
        <>
            {tasks.map((task: string, index: number) => (
                <ListItem task={task} handleRemove={handleRemove} key={`${index}${task}`} />
            ))}
        </>
    );
};

export default TodoList;
