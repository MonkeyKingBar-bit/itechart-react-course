import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { sendCardRequest } from "../../../store/slice/thunk";
import { commonActions } from "../../../store/slice/common";
import { cardsDataActions } from "../../../store/slice/cardsData";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../../styles/styles";
import "./Modal.css";

const Modal = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const modalSelector = useAppSelector((state) => state.common.isModalActive);
  const loadingSelector = useAppSelector((state) => state.common.isLoading);
  const errorSelector = useAppSelector((state) => state.cardsData.error);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const addCardHandler = (event: any) => {
    event.preventDefault();
    if (enteredTitle.length === 0 || enteredContent.length === 0) {
      return;
    }
    dispatch(commonActions.setModalActive());
    dispatch(
      cardsDataActions.addCard({
        id: uuidv4(),
        title: enteredTitle,
        text: enteredContent,
      })
    );
    setEnteredTitle("");
    setEnteredContent("");
  };

  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event: any) => {
    setEnteredContent(event.target.value);
  };

  const enterCardHandler = ({ taskTitle, taskText }: any) => {
    sendCardRequest({ taskTitle, taskText });
  };

  return (
    <div
      className={modalSelector ? "modal active" : "modal"}
      onClick={() => dispatch(commonActions.setModalActive())}
    >
      <div
        className={modalSelector ? "modal__content active" : "modal__content"}
        onClick={(event) => event.stopPropagation()}
      >
        <Typography
          className={classes.title}
          variant="h5"
          color="textSecondary"
          gutterBottom
        >
          Add New Card
        </Typography>
        <Card>
          <CardContent>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={enterCardHandler}
            >
              <TextField
                id="standard-basic"
                label="Title"
                placeholder="write header"
                color="secondary"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
              <TextField
                id="standard-multiline-static"
                label="Content"
                multiline
                rows={4}
                placeholder="write your text"
                color="secondary"
                value={enteredContent}
                onChange={contentChangeHandler}
              />
            </form>
          </CardContent>
          <CardActions className={classes.buttonForm}>
            <Button size="large" onClick={addCardHandler}>
              {!loadingSelector ? "Create card" : "Sending"}
            </Button>
          </CardActions>
        </Card>
        {errorSelector && <p>Something went wrong! {errorSelector}</p>}
      </div>
    </div>
  );
};
export default Modal;
