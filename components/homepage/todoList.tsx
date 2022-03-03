import ListItem from "./listItem";

interface Props {
    tasks: string[];
}

const TodoList = ({ tasks }: Props) => {
    return (
        <>
            {tasks.map((task: string, index: number) => (
                <ListItem task={task} key={`${task}${index}`} />
            ))}
        </>
    );
};

export default TodoList;
