import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
// import userEvent from "@testing-library/user-event";
import Header from "./Header";
import store from "../../store/index";

describe("Header component", () => {
  test("render header if button NOT clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    // Act
    const addButton = screen.getByTestId("addButton");
    // userEvent.click(addButton);
    // Assert
    expect(addButton).toBeInTheDocument();
  });
});
