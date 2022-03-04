import LoginPage from "@/components/loginpage/loginpage";
import { render } from "@testing-library/react";

it("renders loginpage unchanged", () => {
    const dummyFunc = jest.fn();

    const { container } = render(<LoginPage setName={dummyFunc} />);
    expect(container).toMatchSnapshot();
});
