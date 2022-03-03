import Button from "@/components/homepage/button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Add Button", () => {
    it("button exists", () => {
        const handleClick = jest.fn();

        render(<Button text={"Add"} handleClick={handleClick} />);

        const button = screen.getByRole("button", { name: "Add" });

        expect(button).toBeInTheDocument();
    });

    it("runs a function when clicked", () => {
        const handleClick = jest.fn();

        render(<Button text={"Add"} handleClick={handleClick} />);

        fireEvent.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when needed", () => {
        const handleClick = jest.fn();

        render(<Button text="Add" handleClick={handleClick} disabled={true} />);

        fireEvent.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(0);
    });
});
