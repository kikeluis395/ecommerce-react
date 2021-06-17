import React from 'react'
import { CircularProgress  } from '@material-ui/core';
import useStyles from './styles';

const Loading = () => {
  const classes = useStyles();
  // const [progress, setProgress] = React.useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <div className= {classes.container} >
      <CircularProgress />
    </div>
  )
}

export default Loading
