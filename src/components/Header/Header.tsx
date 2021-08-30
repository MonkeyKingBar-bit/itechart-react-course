/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
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
    </header>
  );
};
export default Header;
