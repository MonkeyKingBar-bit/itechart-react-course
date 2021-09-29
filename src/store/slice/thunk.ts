import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

import { commonActions } from "./common";
import { cardsDataActions } from "./cardsData";
interface State {
  id: string;
  title: string;
  text: string;
}

export const fetchCardData: ThunkDispatch<State, unknown, AnyAction> = () => {
  return (dispatch: (arg0: { payload: any; type: string }) => void) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const loadedTasks = [];
        for (const taskKey in res.data) {
          loadedTasks.push({
            id: taskKey,
            title: res.data[taskKey].title,
            text: res.data[taskKey].body,
          });
        }
        dispatch(cardsDataActions.cardsData(loadedTasks));
      })
      .catch((err) => {
        dispatch(
          cardsDataActions.setError(err.message || "Something went wrong!")
        );
      });
    dispatch(commonActions.setIsLoading());
  };
};

export const sendCardRequest = ({ taskTitle, taskText }: any) => {
  return (dispatch: (arg0: { payload: any; type: string }) => void) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title: taskTitle,
        text: taskText,
      })
      .then((response) => {
        const createdTask = {
          id: nanoid(),
          title: taskTitle,
          text: taskText,
        };
        dispatch(cardsDataActions.addCard(createdTask));
        // console.log(response.status);
      })
      .catch((error) => {
        dispatch(cardsDataActions.setError(error.message));
      });
  };
};
