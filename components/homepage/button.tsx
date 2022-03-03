interface Props {
    handleClick: Function;
    text: string;
    remove?: boolean;
}

const Button = ({ remove, text, handleClick }: Props) => {
    return (
        <button
            className={remove ? "red" : ""}
            onClick={() => {
                handleClick();
            }}
        >
            {text}
        </button>
    );
};
export default Button;
