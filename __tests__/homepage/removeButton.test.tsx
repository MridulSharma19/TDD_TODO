import RemoveButton from "@/components/homepage/removebutton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Remove Button", () => {
    it("runs a function when clicked", () => {
        const handleClick = jest.fn();

        render(<RemoveButton handleClick={handleClick} />);

        fireEvent.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
