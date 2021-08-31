/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../../styles/styles';
import './Modal.css';

interface ModalProps {
  active: any;
  setActive: any;
}

const Modal = (props: ModalProps) => {
  const { active, setActive } = props;
  const classes = useStyles();
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
            >
              <TextField
                id="standard-basic"
                label="Title"
                placeholder="write header"
                color="secondary"
              />
              <TextField
                id="standard-multiline-static"
                label="Content"
                multiline
                rows={4}
                placeholder="write your text"
                color="secondary"
              />
            </form>
          </CardContent>
          <CardActions className={classes.buttonForm}>
            <Button size="large">Submit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};
export default Modal;
