import { cardsDataActions } from "./cardsData";
import axios from "axios";

export const fetchCardData = (cardsData: any) => {
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
        dispatch(
          cardsDataActions.setCardsData(err.message || "Something went wrong!")
        );
      });
  };
};

export const sendCardRequest = ({ taskTitle, taskText }: any) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts/", {
      title: taskTitle,
      text: taskText,
    })
    .then((response) => console.log(response.status))
    .catch((error) => {
      console.error("Sending cart data failed.", error);
    });
};
