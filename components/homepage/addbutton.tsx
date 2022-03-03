interface Props {
    handleClick: Function;
    text: string;
}

const AddButton = ({ text, handleClick }: Props) => {
    return (
        <button
            onClick={() => {
                handleClick();
            }}
        >
            {text}
        </button>
    );
};
export default AddButton;
