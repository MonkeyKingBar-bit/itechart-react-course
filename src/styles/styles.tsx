import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  headerColor: {
    backgroundColor: '#000',
    color: '#fff',
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
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  backdrop: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: 10,
  },
}));

export default useStyles;
