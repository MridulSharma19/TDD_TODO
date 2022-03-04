import { useState } from "react";
import Heading from "../homepage/heading";

interface Props {
    setName: Function;
}

const LoginPage = ({ setName }: Props) => {
    const [input, setInput] = useState("");

    const handleChange = (e: any) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        setName(input.trim());
    };

    return (
        <div className="home-container login-page">
            <Heading />
            <h2>Please enter your name</h2>
            <form
                onSubmit={(e: any) => {
                    e.preventDefault();
                    handleClick();
                }}
                className="form-group"
            >
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
