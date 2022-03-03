interface Props {
    handleClick: Function;
}
const RemoveButton = ({ handleClick }: Props) => {
    return (
        <button
            className="remove-button"
            onClick={() => {
                handleClick();
            }}
        >
            Remove
        </button>
    );
};
export default RemoveButton;
