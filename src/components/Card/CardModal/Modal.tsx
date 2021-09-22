import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../../styles/styles";
import "./Modal.css";
import useHttp from "../../../hooks/use-http";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";

import { v4 as uuidv4 } from "uuid";
import { commonActions } from "../../../store/slice/common";
// import { addCardActions } from "../../../store/slice/addCard";

interface ModalProps {
  onAddCard: any;
}

const Modal = (props: ModalProps) => {
  const { onAddCard } = props;
  const classes = useStyles();
  const modalSelector = useAppSelector((state) => state.common.isModalActive);
  // const addTitle = useAppSelector((state) => state.addCard.title);
  // const addText = useAppSelector((state) => state.addCard.text);

  const dispatch = useAppDispatch();

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createCard = ({ taskTitle, taskText }: any) => {
    const createdTask = { id: uuidv4(), title: taskTitle, text: taskText };
    // dispatch(addCardActions.addCard(createdTask));
    onAddCard(createdTask);
  };

  const addCardHandler = (event: any) => {
    event.preventDefault();
    if (enteredTitle.length === 0 || enteredContent.length === 0) {
      return;
    }
    dispatch(commonActions.setModalActive());
    // dispatch(addCardActions.enteredTitle(addTitle));
    // dispatch(addCardActions.enteredContent(addText));

    onAddCard(enteredTitle, enteredContent);
    // dispatch(addCardActions.enteredTitleEmpty());
    // dispatch(addCardActions.enteredContentEmpty());
    setEnteredTitle("");
    setEnteredContent("");
  };
  const titleChangeHandler = (event: any) => {
    // dispatch(addCardActions.enteredTitle(event.target.value));
    setEnteredTitle(event.target.value);
  };
  const contentChangeHandler = (event: any) => {
    // dispatch(addCardActions.enteredContent(event.target.value));
    setEnteredContent(event.target.value);
  };
  const enterCardHandler = async ({ taskTitle, taskText }: any) => {
    sendTaskRequest(
      {
        url: "https://jsonplaceholder.typicode.com/posts/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { title: taskTitle, text: taskText },
      },
      createCard.bind(null, taskTitle, taskText)
    );
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
              {isLoading ? "Sending" : "Create card"}
            </Button>
          </CardActions>
        </Card>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
export default Modal;
