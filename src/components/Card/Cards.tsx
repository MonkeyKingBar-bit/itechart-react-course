/* eslint-disable no-console */
import Button from '@material-ui/core/Button';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../../styles/styles';
import './Card.css';
// import initialData from '../../state/card-data';
// import initialData from '../../state/card-data';

interface CardProps {
  id: string;
  title: string;
  text: string;
  activeEdit: boolean;
  deleteCard: any;
  setDeleteCard: any;
  onDeleteCard: any;
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  const classes = useStyles();
  const {
    id, title, text, activeEdit, deleteCard, setDeleteCard, onDeleteCard,
  } = props;
  const isDeleteCard = () => {
    setDeleteCard(false);
    onDeleteCard(id);
    // initialData.forEach((i) => console.log(i.id));
  };
  const deleteCardHandler = () => {};
  return (
    <main className={deleteCard ? 'delete__card' : 'delete__card'}>
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
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography>{text}</Typography>
              </CardContent>
              <CardActions className={activeEdit ? 'editMode active' : 'editMode'}>
                <Button size="medium" color="secondary">
                  Edit
                </Button>
                <Button size="small" color="secondary">
                  Save
                </Button>
                <Button size="small" color="secondary" onClick={isDeleteCard} onChange={deleteCardHandler}>
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
