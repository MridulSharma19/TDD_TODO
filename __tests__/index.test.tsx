import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Index Page", () => {
    it("has a heading", () => {
        render(<Home />);
        const heading = screen.getByRole("heading", {
            name: "TODO APP",
        });

        expect(heading).toBeInTheDocument();
    });

    it("has an input", () => {
        render(<Home />);
        const input = screen.getByPlaceholderText("Your name");

        expect(input).toBeInTheDocument();
    });
    it("submitting input works", () => {
        render(<Home />);
        const input = screen.getByPlaceholderText("Your name");
        fireEvent.change(input, { target: { value: "Mridul Sharma" } });
        fireEvent.click(screen.getByRole("button", { name: "Get Started" }));

        const welcomeMessage = screen.getByRole("heading", { name: "Hello Mridul Sharma" });

        expect(welcomeMessage).toBeInTheDocument();
    });

    it("clicking on add displays input", () => {
        render(<Home />);
        fireEvent.click(screen.getByRole("button", { name: "Add New" }));

        const taskInput = screen.getByLabelText("New Task");

        expect(taskInput).toBeInTheDocument();
    });

    it("submitting task input adds task and removes input", () => {
        render(<Home />);
        fireEvent.click(screen.getByRole("button", { name: "Add New" }));

        const taskInput = screen.getByLabelText("New Task");

        fireEvent.change(taskInput, { target: { value: "Go to sleep" } });

        fireEvent.click(screen.getByRole("button", { name: "Add Task" }));

        const addedTask = screen.getByText("Go to sleep");

        const addedRemoveButton = screen.getByRole("button", { name: "Remove" });

        expect(addedTask).toBeInTheDocument();
        expect(addedRemoveButton).toBeInTheDocument();
        expect(taskInput).not.toBeInTheDocument();
    });

    it("removes task when remove button is clicked", () => {
        render(<Home />);

        const Task = screen.getByText("Go to sleep");

        const RemoveButton = screen.getByRole("button", { name: "Remove" });

        fireEvent.click(RemoveButton);

        expect(Task).not.toBeInTheDocument();
        expect(RemoveButton).not.toBeInTheDocument();
    });

    it("signs out when sign out is clicked", () => {
        render(<Home />);
        const SignedInText = screen.getByRole("heading", { name: "Hello Mridul Sharma" });

        const SignoutButton = screen.getByRole("button", { name: "Sign Out" });

        fireEvent.click(SignoutButton);

        const SignedOutText = screen.getByRole("heading", { name: "Please enter your name" });

        const SigninInput = screen.getByPlaceholderText("Your name");

        expect(SignedInText).not.toBeInTheDocument();
        expect(SignedOutText).toBeInTheDocument();
        expect(SigninInput).toBeInTheDocument();
    });
});
