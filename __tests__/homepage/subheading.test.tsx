import SubHeading from "@/components/homepage/subheading";
import { render, screen } from "@testing-library/react";

describe("Heading", () => {
    it("renders a heading", () => {
        render(<SubHeading name="Mridul" />);

        const heading = screen.getByRole("heading", {
            name: "Hello Mridul",
        });

        expect(heading).toBeInTheDocument();
    });
});
