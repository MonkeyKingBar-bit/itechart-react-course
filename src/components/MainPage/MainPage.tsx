import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <Box maxWidth="auto">
      <Grid>
        <Grid item>
          <Card className={classes.wrapper}>
            <CardContent>
              <Typography gutterBottom variant="h1" component="h1" color="secondary">
                Open the future
              </Typography>
              <Typography gutterBottom variant="h6" component="h6" color="secondary">
              We make digital products for millions of users around the world.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" color="secondary" variant="contained">
                Show Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
