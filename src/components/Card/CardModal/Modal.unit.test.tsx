import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import store from "../../../store/index";

import Modal from "./Modal";

describe("Modal component", () => {
  test("render 'Create card' if the button was not clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
      // use provider for dispatch and selector
    );
    // Assert
    const outputElement = screen.getByText("Create card", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("render 'Sending' if the button was clicked", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
      // use provider for dispatch and selector
    );
    // Assert
    const outputElement = screen.queryByText("Sending");
    expect(outputElement).toBeFalsy();
  });

  test("render 'error' if an error", () => {
    // Arrange
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
      // use provider for dispatch and selector
    );
    // Assert
    const outputElement = screen.queryByText("Something went wrong!");
    expect(outputElement).toBeNull();
  });
});
