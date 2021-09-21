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
import { commonActions } from "../../store/slice/common";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

interface HeaderProps {
  activeCancel: boolean;
  cancelHandler: any;
  exitHandler: () => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const isEditCardMode = useAppSelector((state) => state.common.isEditCardMode);
  const dispatch = useAppDispatch();
  const { activeCancel, cancelHandler, exitHandler } = props;
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
              onClick={() => dispatch(commonActions.modalActive())}
            >
              <AddIcon />
            </Fab>
            <Fab
              className={classes.headerButton}
              color="inherit"
              aria-label="edit"
              size="small"
              onClick={() => dispatch(commonActions.editCardMode())}
            >
              <EditIcon />
            </Fab>
            {isEditCardMode && (
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
            {isEditCardMode && (
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
