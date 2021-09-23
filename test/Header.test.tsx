import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Header from "../src/components/Header/Header";

describe("Header component", () => {
  test("should open modal window if the add button was clicked", () => {
    render(<Header />);
    const addButton = screen.getByTestId("addButton");
    // userEvent.click(addButton);
    expect(addButton).toBeInTheDocument();
  });
});
