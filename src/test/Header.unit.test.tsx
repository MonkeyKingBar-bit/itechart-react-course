import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import store from "../store/index";
import { commonActions } from "../store/slice/common";

import Header from "../components/Header/Header";

describe("Header component", () => {
  test("render 'header component' if the button was not clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Header />
      </Provider>
      // use provider for dispatch and selector
    );
    // Act
    const addButton = screen.getByTestId("addButton");
    userEvent.click(addButton);
    // Assert
    expect(addButton).toBeInTheDocument();
  });
  test("render 'modal component' if the button was clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Header />
      </Provider>
      // use provider for dispatch and selector
    );
    // Act
    const addButton = screen.getByTestId("addButton");
    userEvent.click(addButton);
    // Assert
    let action = commonActions.modalActive();
    expect(action).toBeTruthy();
  });
});
