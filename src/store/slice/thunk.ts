import { cardsDataActions } from "./cardsData";
import axios from "axios";

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
        dispatch(
          cardsDataActions.setCardsData(err.message || "Something went wrong!")
        );
      });
  };
};

// export const sendCartData = (cardsData: any) => {
//   return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
//     dispatch(
//       cardsDataActions.setCardsData({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/",
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             items: cardsData.setCardsData,
//             //  totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Sending cart data failed.");
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         cardsDataActions.setCardsData({
//           status: "success",
//           title: "Success!",
//           message: "Sent cart data successfully!",
//         })
//       );
//     } catch (error) {
//       dispatch(
//         cardsDataActions.setCardsData({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     }
//   };
// };
