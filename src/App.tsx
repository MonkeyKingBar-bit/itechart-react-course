/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Button from "@material-ui/core/Button";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Card from '@material-ui/core/Card';
// import CardActions from "@material-ui/core/CardActions";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from "@material-ui/core/Link";
import './App.css';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textPrimary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  headerColor: {
    backgroundColor: '#000',
    color: '#fff',
  },
  icon: {
    color: '#f50057',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '26px',
  },
  headerTitle: {
    color: '#f50057',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(6),
  // },
}));
const cards = [1, 2, 3];
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.headerColor}>
        <Toolbar>
          <DragIndicatorIcon className={classes.icon} />
          <Typography variant="h6" color="initial" noWrap>
            <div className={classes.header}>
              <strong className={classes.headerTitle}>iTechArt</strong>
              <p>React Course</p>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil soluta, quae corrupti quo voluptatem eius sint sed
                      accusantium eveniet animi vero maiores dignissimos
                      obcaecati blanditiis dolorem quos esse sequi nostrum?
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </>
  );
};

export default App;
