import TodoList from "@/components/homepage/todoList";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Task List", () => {
    it("has correct text", () => {
        const handleClick = jest.fn();

        render(<TodoList tasks={["Go to sleep", "Eat", "Read"]} handleRemove={handleClick} />);

        const FirstTask = screen.getByText("Go to sleep");
        const SecondTask = screen.getByText("Eat");
        const ThirdTask = screen.getByText("Read");

        expect(FirstTask).toBeInTheDocument();
        expect(SecondTask).toBeInTheDocument();
        expect(ThirdTask).toBeInTheDocument();
    });
    it("calls function on button click", () => {
        const handleClick = jest.fn();

        render(<TodoList tasks={["Go to sleep", "Eat", "Read"]} handleRemove={handleClick} />);

        const buttons = screen.getAllByRole("button", { name: "Remove" });
        buttons.map((button) => {
            fireEvent.click(button);
        });

        expect(handleClick).toHaveBeenCalledTimes(3);
    });
});
