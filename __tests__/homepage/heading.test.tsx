import { render, screen } from "@testing-library/react";
import Heading from "@/components/homepage/heading";

describe("Heading", () => {
    it("renders a heading", () => {
        render(<Heading />);

        const heading = screen.getByRole("heading", {
            name: /TODO APP/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
