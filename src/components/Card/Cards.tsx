/* eslint-disable no-console */
import Button from '@material-ui/core/Button';
import React, { useLayoutEffect, useRef } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../../styles/styles';
import './Card.css';

interface CardProps {
  id: string;
  title: string;
  text: string;
  activeEdit: boolean;
  onDeleteCard: any;
  // onSaveCard: any;
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  const classes = useStyles();
  const titleInputRef = useRef<HTMLHeadingElement>(null);
  const contentInputRef = useRef<HTMLHeadingElement>(null);
  const {
    id,
    title,
    text,
    activeEdit,
    onDeleteCard,
    // onSaveCard,
  } = props;
  useLayoutEffect(() => {
    if (titleInputRef.current !== null) titleInputRef.current.focus();
    if (contentInputRef.current !== null) contentInputRef.current.focus();
  }, []);
  const onEditCard = () => {
    if (titleInputRef.current) titleInputRef.current.focus();
    if (contentInputRef.current) contentInputRef.current.focus();
    console.log(titleInputRef, contentInputRef);
    // onSaveCard(titleInputRef, contentInputRef);
  };
  const isDeleteCard = () => {
    onDeleteCard(id);
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
              </CardContent>
              <CardActions className={activeEdit ? 'editMode active' : 'editMode'}>
                <Button size="medium" color="secondary" onClick={onEditCard}>
                  Edit
                </Button>
                <Button size="small" color="secondary">
                  {/* onClick={onSaveCard} */}
                  Save
                </Button>
                <Button size="small" color="secondary" onClick={isDeleteCard}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};
export default Cards;
