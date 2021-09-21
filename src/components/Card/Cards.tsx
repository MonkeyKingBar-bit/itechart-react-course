/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useStyles from "../../styles/styles";
import "./Card.css";
import Input from "./Input/Input";
import ButtonCard from "./Button/Button";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { commonActions } from "../../store/slice/common";

interface CardProps {
  id: string;
  title: string;
  text: string;
  onDeleteCard: any;
  onSaveCard: any;
  loading: boolean;
  error: any;
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const titleInputRef = useRef<any>(null);
  const contentInputRef = useRef<any>(null);
  const editCardModeSelector = useAppSelector(
    (state) => state.common.isEditCardMode
  );
  const editCardSelector = useAppSelector((state) => state.common.isEditCard);
  const saveCardSelector = useAppSelector((state) => state.common.isSaveCard);
  const cancelSelector = useAppSelector((state) => state.common.isCanceled);

  const {
    id,
    title,
    text,
    onDeleteCard,
    onSaveCard,
    loading,
    error,
  } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(text);
  const [oldEditTitle, setOldEditTitle] = useState(title);
  const [oldEditContent, setOldEditContent] = useState(text);

  useEffect(() => {
    if (cancelSelector) {
      setEditTitle(oldEditTitle);
      setEditContent(oldEditContent);
    } else {
      setOldEditTitle(editTitle);
      setOldEditContent(editContent);
    }
  }, [cancelSelector]);

  const isEditCard = (event: any) => {
    event.preventDefault();
    titleInputRef.current?.focus();
    if (editTitle.trim().length === 0 || editContent.trim().length === 0) {
      return;
    }
    dispatch(commonActions.setEditCard());
  };
  const isDeleteCard = () => {
    onDeleteCard(id);
  };
  const isSaveCard = () => {
    if (editTitle.trim().length === 0 || editContent.trim().length === 0) {
      return;
    }
    onSaveCard(id, editTitle, editContent);
  };
  const titleChangeHandler = (event: any) => {
    setEditTitle(event.target.value);
    dispatch(commonActions.saveCard());
  };
  const contentChangeHandler = (event: any) => {
    setEditContent(event.target.value);
    dispatch(commonActions.saveCard());
  };
  if (error) <p>Try again</p>;
  if (loading) <p>'Loading cards...'</p>;
  return (
    <main className={classes.cardMain}>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <form onSubmit={isSaveCard}>
                  <Input
                    ref={titleInputRef}
                    id={id}
                    value={editTitle}
                    onChange={titleChangeHandler}
                    disabled={!editCardSelector ? "" : "disabled"}
                    cols={10}
                    rows={2}
                  />
                  <Input
                    ref={contentInputRef}
                    id={id}
                    value={editContent}
                    onChange={contentChangeHandler}
                    disabled={!editCardSelector ? "" : "disabled"}
                    cols={30}
                    rows={5}
                  />
                </form>
              </CardContent>
              <CardActions
                className={
                  editCardModeSelector ? "editMode active" : "editMode"
                }
              >
                <ButtonCard
                  name="Edit"
                  disabled=""
                  className="button"
                  onClick={isEditCard}
                />
                <ButtonCard
                  name="Save"
                  disabled={saveCardSelector ? "" : "disabled"}
                  className="button"
                  onClick={isSaveCard}
                />
                <ButtonCard
                  name="Delete"
                  disabled=""
                  className="button"
                  onClick={isDeleteCard}
                />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
export default Cards;
