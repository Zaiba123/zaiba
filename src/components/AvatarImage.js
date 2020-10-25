import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';


const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

export default function AvatarImage() {
  const classes = useStyles();

  return (
    <div className={classes.large}>
      <Avatar alt="Zaiba" src={Zaiba_Iqbal} />
      {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
    </div>
  );
}