import RemoveButton from "./removebutton";

interface Props {
    task?: string;
}
const ListItem = ({ task }: Props) => {
    const handleClick = () => {};

    return (
        <div className="list-item">
            <div>{task}</div>
            <RemoveButton handleClick={handleClick} />
        </div>
    );
};
export default ListItem;
