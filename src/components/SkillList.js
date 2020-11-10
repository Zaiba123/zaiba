import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // maxWidth: 752,
    // textAlign: "center",
    // backgroundColor:"lightpink"
    // display:"flex",
  },

  title: {
    margin: theme.spacing(4, 0, 2),
    // maxWidth:"70%",
    textAlign:"center",
 
  },
  skillList: {
    display: "grid",
    // flexDirection:'row',
    gridTemplateColumns:"1fr 1fr 1fr",
    // flexWrap: "wrap",
  },
  skillName: {
    // display: "flex",
    marginLeft:"20px",
    marginRight:"20px",
    margin: "10px",
    textAlign: "center",
    fontSize: "30px",
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
            <div classes={classes.skillList}>
                {
                  languages.map(lan => {
                      return (
                        <div classes={classes.skillName}>
                          <WbSunnyIcon />
                        <ListItemText 
                          primary={lan}
                        />
                      </div>
                      )
                  })
                }
            </div>

    </div>
  );
}