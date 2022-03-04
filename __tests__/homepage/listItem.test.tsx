import { render, screen } from "@testing-library/react";
import ListItem from "@/components/homepage/listItem";

describe("List Item", () => {
    it("has correct task text", () => {
        const handleClick = jest.fn();

        render(<ListItem handleRemove={handleClick} task={"Go to sleep"} />);

        const listItem = screen.getByText("Go to sleep");

        expect(listItem).toBeInTheDocument();
    });

    it("has a button", () => {
        const handleClick = jest.fn();

        render(<ListItem handleRemove={handleClick} task="Go to sleep" />);

        const button = screen.getByRole("button", { name: "Remove" });

        expect(button).toBeInTheDocument();
    });
});
