interface Props {
    handleClick: Function;
    text: string;
    remove?: boolean;
    disabled?: boolean;
}

const Button = ({ remove, text, handleClick, disabled }: Props) => {
    return (
        <button
            disabled={disabled}
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
