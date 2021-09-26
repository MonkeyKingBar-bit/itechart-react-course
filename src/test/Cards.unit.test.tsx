import { nanoid } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { commonActions } from "../store/slice/common";
import store from "../store/index";

import Cards from "../components/Card/Cards";

describe("Cards component", () => {
  test("renders 'edit card' mode", () => {
    render(
      <Provider store={store}>
        <Cards id={nanoid()} title="testTitle" text="testText" />
      </Provider>
      // use provider for dispatch and selector
    );
    // Assert
    let action = commonActions.editCardMode();
    expect(action).toBeTruthy();
  });

  test("renders 'edit' card", () => {
    render(
      <Provider store={store}>
        <Cards id={nanoid()} title="testTitle" text="testText" />
      </Provider>
      // use provider for dispatch and selector
    );
    // Assert
    let action = commonActions.editCard();
    expect(action).toBeTruthy();
  });

  test("mustn't 'save' card without changed", () => {
    render(
      <Provider store={store}>
        <Cards id={nanoid()} title="testTitle" text="testText" />
      </Provider>
      // use provider for dispatch and selector
    );
    // Assert
    let action = commonActions.saveCard();
    expect(action).toBeTruthy();
  });
});
