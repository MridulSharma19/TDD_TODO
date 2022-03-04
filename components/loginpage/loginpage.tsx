import { useState } from "react";
import Heading from "../homepage/heading";

interface Props {
    setName: Function;
}

const LoginPage = ({ setName }: Props) => {
    const [input, setInput] = useState("");

    const handleChange = (e: any) => {
        setInput(e.target.value.trim());
    };

    const handleClick = () => {
        setName(input);
    };

    return (
        <div className="home-container">
            <Heading />
            <h3>Please enter your name</h3>
            <form>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={input}
                    onChange={handleChange}
                />
                <input type="submit" hidden />
            </form>
            <button
                disabled={input.length < 1}
                onClick={() => {
                    handleClick();
                }}
            >
                Get Started
            </button>
        </div>
    );
};
export default LoginPage;
