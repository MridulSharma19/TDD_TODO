interface Props {
    handleClick: Function;
}
const RemoveButton = ({ handleClick }: Props) => {
    return (
        <button
            onClick={() => {
                handleClick();
            }}
        >
            Remove
        </button>
    );
};
export default RemoveButton;
