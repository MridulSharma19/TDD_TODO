import { render, screen } from "@testing-library/react";
import NewTaskInput from "@/components/homepage/newTaskInput";

describe("New Task", () => {
    it("has an input", () => {
        render(<NewTaskInput />);

        const input = screen.getByRole("textbox", {
            name: "New Task",
        });

        expect(input).toBeInTheDocument();
    });

    it("has a button", () => {
        render(<NewTaskInput />);

        const button = screen.getByRole("button", { name: "Add Task" });

        expect(button).toBeInTheDocument();
    });
});
