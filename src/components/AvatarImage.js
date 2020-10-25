import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Zaiba_Iqbal from '../images/Zaiba_Iqbal.jpg';
import './project.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15 rem',
    height: "200px"
  },
}));

export default function AvatarImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Zaiba" src={Zaiba_Iqbal} />
      {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
    </div>
  );
}