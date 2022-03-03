import { SyntheticEvent } from "react";
import RemoveButton from "./removebutton";

interface Props {
    task?: string;
}
const ListItem = ({ task }: Props) => {
    const handleClick = (e: SyntheticEvent) => {};

    return (
        <div>
            <div>{task}</div>
            <RemoveButton handleClick={handleClick} />
        </div>
    );
};
export default ListItem;
