import AddButton from "@/components/homepage/addbutton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Add Button", () => {
    it("button exists", () => {
        const handleClick = jest.fn();

        render(<AddButton text={"Add"} handleClick={handleClick} />);

        const button = screen.getByRole("button", { name: "Add" });

        expect(button).toBeInTheDocument();
    });

    it("runs a function when clicked", () => {
        const handleClick = jest.fn();

        render(<AddButton text={"Add"} handleClick={handleClick} />);

        fireEvent.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
