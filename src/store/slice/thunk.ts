import { cardsDataActions } from "./cardsData";
import axios from "axios";
import { commonActions } from "./common";

export const fetchCardData = () => {
  return (dispatch: (arg0: { payload: any; type: string }) => void) => {
    //  dispatch(cardsDataActions.setCardsData([]));
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        const loadedTasks = [];
        for (const taskKey in res.data) {
          loadedTasks.push({
            id: taskKey,
            title: res.data[taskKey].title,
            text: res.data[taskKey].body,
          });
        }
        dispatch(cardsDataActions.setCardsData(loadedTasks));
      })
      .catch((err) => {
        dispatch(cardsDataActions.setError(err.message));
        // dispatch(
        //   cardsDataActions.setCardsData(err.message || "Something went wrong!")
        // );
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
      .then((response) =>
        dispatch(cardsDataActions.setCardsData(response.data))
      )
      // console.log(response.status)
      .catch((error) => {
        dispatch(cardsDataActions.setError(error.message));
        // console.error("Sending cart data failed.", error);
      });
  };
};
