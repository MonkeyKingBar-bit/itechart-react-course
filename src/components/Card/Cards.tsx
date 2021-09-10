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

interface CardProps {
  id: string;
  title: string;
  text: string;
  activeEdit: boolean;
  onDeleteCard: any;
  editCard: boolean;
  setEditCard: any;
  onSaveCard: any;
  saveCard: boolean;
  setSaveCard: any;
  isCanceled: boolean;
  loading: boolean;
  error: any;
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  const classes = useStyles();
  const titleInputRef = useRef<any>(null);
  const contentInputRef = useRef<any>(null);
  const {
    id,
    title,
    text,
    activeEdit,
    onDeleteCard,
    editCard,
    setEditCard,
    saveCard,
    setSaveCard,
    onSaveCard,
    isCanceled,
    loading,
    error,
  } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(text);
  const [oldEditTitle, setOldEditTitle] = useState(title);
  const [oldEditContent, setOldEditContent] = useState(text);

  useEffect(() => {
    if (isCanceled) {
      setEditTitle(oldEditTitle);
      setEditContent(oldEditContent);
    } else {
      setOldEditTitle(editTitle);
      setOldEditContent(editContent);
    }
  }, [isCanceled]);

  const isEditCard = (event: any) => {
    event.preventDefault();
    titleInputRef.current?.focus();
    if (editTitle.trim().length === 0 || editContent.trim().length === 0) {
      return;
    }
    setEditCard(false);
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
    setSaveCard(true);
  };
  const contentChangeHandler = (event: any) => {
    setEditContent(event.target.value);
    setSaveCard(true);
  };
  if (error) { <p>Try again</p>; }

  if (loading) { <p>'Loading tasks...'</p>; }
  return (
    <main>
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
                <form>
                  <Input
                    ref={titleInputRef}
                    id={id}
                    value={editTitle}
                    onChange={titleChangeHandler}
                    disabled={editCard ? "" : "disabled"}
                    cols={10}
                    rows={2}
                  />
                  <Input
                    ref={contentInputRef}
                    id={id}
                    value={editContent}
                    onChange={contentChangeHandler}
                    disabled={editCard ? "" : "disabled"}
                    cols={30}
                    rows={5}
                  />
                </form>
              </CardContent>
              <CardActions
                className={activeEdit ? "editMode active" : "editMode"}
              >
                <ButtonCard
                  name="Edit"
                  disabled=""
                  className="button"
                  onClick={isEditCard}
                />
                <ButtonCard
                  name="Save"
                  disabled={saveCard ? "" : "disabled"}
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
