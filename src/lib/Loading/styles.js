import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'calc(100vh - 100px)'
  },
  textLoad: {
    color: '#0044aa',
    fontSize: '3rem',
  }
}));