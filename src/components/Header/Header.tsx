import { commonActions } from "../../store/slice/common";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

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

const Header = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isEditCardMode = useAppSelector((state) => state.common.isEditCardMode);
  const isActiveCancelBtn = useAppSelector(
    (state) => state.common.isActiveCancelBtn
  );

  const cancelHandler = () => {
    dispatch(commonActions.isCanceled());
    dispatch(commonActions.setEditCardMode());
    dispatch(commonActions.setCancelBtn());
  };

  const exitHandler = () => {
    dispatch(commonActions.setIsCanceled());
    dispatch(commonActions.setEditCardMode());
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
                <strong className={classes.headerTitle}>iTechArt</strong>
                <p>React Course</p>
              </div>
            </Typography>
          </div>
          <div className={classes.root}>
            <Fab
              data-testId="addButton"
              className={classes.headerButton}
              color="inherit"
              aria-label="add"
              size="small"
              onClick={() => dispatch(commonActions.modalActive())}
            >
              <AddIcon />
            </Fab>
            <Fab
              data-testId="editModeButton"
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
                data-testId="cancelButton"
                variant="contained"
                color="secondary"
                className={`${!isActiveCancelBtn} ? ${classes.button} : `}
                startIcon={<CancelIcon />}
                onClick={cancelHandler}
              >
                Cancel
              </Button>
            )}
            {isEditCardMode && (
              <Button
                data-testId="exitButton"
                variant="contained"
                color="secondary"
                className={`${!isActiveCancelBtn} ? ${classes.button} : `}
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
