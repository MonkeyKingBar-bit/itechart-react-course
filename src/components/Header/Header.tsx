/* eslint-disable no-console */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../../styles/styles';
// import addCardModal from '../Card/AddCardModal';

const Header = () => {
  const classes = useStyles();
  const addNewCard = (event: any) => {
    event.preventDefault();
    console.log('hi');
  };
  return (
    <header>
      <CssBaseline />
      <AppBar position="relative" className={classes.headerColor}>
        <Toolbar className={classes.headerContent}>
          <div className={classes.headerLeftContent}>
            <DragIndicatorIcon className={classes.icon} />
            <Typography variant="h6" color="initial" noWrap>
              <div className={classes.header}>
                <strong className={classes.headerTitle}>
                  iTechArt
                </strong>
                <p>React Course</p>
              </div>
            </Typography>
          </div>
          <div className={classes.root}>
            <Fab
              className={classes.headerButton}
              color="inherit"
              aria-label="add"
              size="small"
              onClick={addNewCard}
            >
              <AddIcon />
            </Fab>
            <Fab
              className={classes.headerButton}
              color="inherit"
              aria-label="edit"
              size="small"
            >
              <EditIcon />
            </Fab>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
