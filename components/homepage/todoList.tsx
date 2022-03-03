import ListItem from "./listItem";

interface Props {
    tasks: string[];
    handleRemove: Function;
}

const TodoList = ({ tasks, handleRemove }: Props) => {
    return (
        <>
            {tasks.map((task: string, index: number) => (
                <ListItem task={task} handleRemove={handleRemove} key={`${index}${task}`} />
            ))}
        </>
    );
};

export default TodoList;
