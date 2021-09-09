import React from "react";
import AppBar from "@material-ui/core/AppBar";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import useStyles from "../../styles/styles";

interface HeaderProps {
  activeEdit: boolean;
  setActive: any;
  setActiveEdit: any;
  activeCancel: boolean;
  cancelHandler: any;
  exitHandler: () => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    setActive,
    setActiveEdit,
    activeCancel,
    activeEdit,
    cancelHandler,
    exitHandler,
  } = props;
  const classes = useStyles();
  return (
    <header>
      <CssBaseline />
      <AppBar position="relative" className={classes.headerColor}>
        <Toolbar className={classes.headerContent}>
          <div className={classes.headerLeftContent}>
            <DragIndicatorIcon className={classes.icon} />
            <Typography variant="h6" color="initial" noWrap>
              <div className={classes.header}>
                <strong className={classes.headerTitle}>iTechArt</strong>
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
              onClick={setActive}
            >
              <AddIcon />
            </Fab>
            <Fab
              className={classes.headerButton}
              color="inherit"
              aria-label="edit"
              size="small"
              onClick={setActiveEdit}
            >
              <EditIcon />
            </Fab>
            {activeEdit && (
              <Button
                variant="contained"
                color="secondary"
                className={`${activeCancel} ? ${classes.button} : `}
                startIcon={<CancelIcon />}
                onClick={cancelHandler}
              >
                Cancel
              </Button>
            )}
            {activeEdit && (
              <Button
                variant="contained"
                color="secondary"
                className={`${activeCancel} ? ${classes.button} : `}
                onClick={exitHandler}
              >
                Exit
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
