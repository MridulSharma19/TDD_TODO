import Homepage from "@/components/homepage/homepage";
import { render } from "@testing-library/react";

it("renders homepage unchanged", () => {
    const dummyFunc = jest.fn();

    const { container } = render(
        <Homepage
            tasks={["Go to sleep", "Eat", "Read a book"]}
            name={"Mridul"}
            handleRemove={dummyFunc}
            handleAdd={dummyFunc}
            showAdd={false}
            handleClick={dummyFunc}
        />
    );
    expect(container).toMatchSnapshot();
});
