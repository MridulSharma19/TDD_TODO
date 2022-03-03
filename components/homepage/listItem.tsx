import Button from "./button";

interface Props {
    task?: string;
}
const ListItem = ({ task }: Props) => {
    const handleClick = () => {
        const taskList = localStorage.getItem("taskList");
        if (taskList) {
            const parsedList = JSON.parse(taskList);
            const index = parsedList.indexOf(task);
            const newList = parsedList.splice(index, 1);
            localStorage.setItem("taskList", JSON.stringify(newList));
        }
    };

    return (
        <div className="list-item">
            <div>{task}</div>
            <Button text="Remove" remove={true} handleClick={handleClick} />
        </div>
    );
};
export default ListItem;
