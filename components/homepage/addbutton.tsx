interface Props {
    handleClick: Function;
    text: string;
}

const AddButton = ({ text, handleClick }: Props) => {
    return (
        <button
            className="add-button"
            onClick={() => {
                handleClick();
            }}
        >
            {text}
        </button>
    );
};
export default AddButton;
