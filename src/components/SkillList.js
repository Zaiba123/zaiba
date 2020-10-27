import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  //   maxWidth: 752,
  //   textAlign: "center",
  //   backgroundColor:"lightpink"
  // },
  // demo: {
  //   backgroundColor: theme.palette.background.paper,
  //   margin:"auto",
  // },
  title: {
    margin: theme.spacing(4, 0, 2),
    // maxWidth:"70%",
    textAlign:"center",
  },
  skillItems: {
    display: "flex",
    flexDirection:"column",
    flex: 3,
  }

}));


export default function InteractiveList() {
  const classes = useStyles();
  const languages = ["JavaScript","React.js","C++","Python","SQL","HTML","CSS","Redux","Git","SCSS"]
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
            Skills 
          </Typography>
          <div >
            <List className={classes.skillItems}>
                {
                  languages.map(lan => {
                      return (
                        <ListItem>
                        <ListItemIcon>
                          <WbSunnyIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={lan}
                        />
                      </ListItem>
                      )
                  })
                }
            </List>
          </div>

    </div>
  );
}