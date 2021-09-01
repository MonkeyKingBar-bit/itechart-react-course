/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../../styles/styles';
import './Modal.css';

interface ModalProps {
  active: boolean;
  setActive: any;
  onAddCard: any;
}

const Modal = (props: ModalProps) => {
  const { active, setActive, onAddCard } = props;
  const classes = useStyles();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredContent, setEnteredContent] = useState('');
  const addCardHandler = (event: any) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0 || enteredContent.trim().length === 0) {
      return;
    }
    setActive(false);
    onAddCard(enteredTitle, enteredContent);
    setEnteredTitle('');
    setEnteredContent('');
  };
  const titleChangeHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };
  const contentChangeHandler = (event: any) => {
    setEnteredContent(event.target.value);
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
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
              onSubmit={addCardHandler}
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
            <Button size="large" onClick={addCardHandler}>Submit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
export default Modal;
