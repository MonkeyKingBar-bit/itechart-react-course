import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1.2),
    },
  },
  headerColor: {
    backgroundColor: '#000',
    color: '#fff',
    zIndex: 0,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerLeftContent: {
    display: 'flex',
    alignItems: 'center',
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
  headerButton: {
    backgroundColor: '#f50057',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGridActive: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    pointerEvents: 'none',
    transition: '0.5s',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    opacity: 1,
    pointerEvents: 'all',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    background: '#f50057',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  pos: {
    marginBottom: 12,
  },
  modalContent: {
    position: 'fixed',
    top: '30vh',
    left: '10%',
    width: '80%',
    zIndex: 100,
    overflow: 'hidden',
    transform: 'scale(0)',
  },
  modalActive: {
    transform: 'scale(1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
  },
  buttonForm: {
    justifyContent: 'center',
  },
}));

export default useStyles;
