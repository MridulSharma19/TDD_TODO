import Button from "./button";

interface Props {
    task?: string;
    handleRemove: Function;
}
const ListItem = ({ task, handleRemove }: Props) => {
    const handleClick = () => {
        handleRemove(task);
    };

    return (
        <div className="list-item">
            <span>{task}</span>
            <Button text="Remove" remove={true} handleClick={handleClick} />
        </div>
    );
};
export default ListItem;
