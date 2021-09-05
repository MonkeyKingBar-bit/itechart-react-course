/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Button from '@material-ui/core/Button';
import React, { useRef, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import { TextField } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import useStyles from '../../styles/styles';
import './Card.css';
import Input from './Input/Input';

interface CardProps {
  id: string;
  title: string;
  text: string;
  activeEdit: boolean;
  onDeleteCard: any;
  editCard: boolean;
  setEditCard: any;
  onSaveCard: any;
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
    onSaveCard,
  } = props;
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(text);
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
    setEditCard(false);
    onSaveCard(id, editTitle, editContent);
  };
  const titleChangeHandler = (event: any) => {
    setEditTitle(event.target.value);
  };
  const contentChangeHandler = (event: any) => {
    setEditContent(event.target.value);
  };
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
                    // disabled={editCard ? '' : 'disabled'}
                    cols={10}
                    rows={2}
                    className="edit__card"
                  />
                  <Input
                    ref={contentInputRef}
                    id={id}
                    value={editContent}
                    onChange={contentChangeHandler}
                    // disabled={editCard ? '' : 'disabled'}
                    cols={30}
                    rows={8}
                    className="edit__card active"
                  />
                  <div />
                </form>
                {/* <form action="" onSubmit={submitHandler}>
                  <TextField ref={titleInputRef} value={title}>
                    {title}
                  </TextField>
                  <TextField ref={contentInputRef} value={text}>
                    {text}
                  </TextField>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    ref={titleInputRef}
                  >
                    {title}
                  </Typography>
                  <Typography ref={contentInputRef}>
                    {text}
                  </Typography>
                </form> */}
              </CardContent>
              <CardActions
                className={activeEdit ? 'editMode active' : 'editMode'}
              >
                <Button size="medium" color="secondary" onClick={isEditCard}>
                  Edit
                </Button>
                <Button size="small" color="secondary" onClick={isSaveCard}>
                  Save
                </Button>
                <Button size="small" color="secondary" onClick={isDeleteCard}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
export default Cards;
