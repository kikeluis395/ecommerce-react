import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '80%',
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '90.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));