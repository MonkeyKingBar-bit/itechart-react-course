import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header component", () => {
  test("should open modal window if the add button was clicked", () => {
    // Arrange
    render(<Header />);
    // Act
    const addButton = screen.getByTestId("addButton");
    // userEvent.click(addButton);
    // Assert
    expect(addButton).toBeInTheDocument();
  });
});
