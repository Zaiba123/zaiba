import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const languages = ["JavaScript","React.js","C++","Python"]
  const moreLanguages=["HTML","CSS","Redux","Git"]
  return (
    <div className={classes.root}>
      {/* <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup> */}
      <Typography variant="h6" className={classes.title}>
            Skills 
          </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={dense}>
                {
                  languages.map(lan => {
                      return (
                        <ListItem>
                        <ListItemIcon>
                          <WbSunnyIcon />
                        </ListItemIcon>
                        {/* {languages.map((lang) => {
                            return (
                                <ListItemText primary={lang} />
                            )
                        })} */}
                        <ListItemText
                          primary={lan}
                          secondary={secondary ? 'Secondary text' : null}
                        />
                      </ListItem>
                      )
                  })
                }   
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
          <List dense={dense}>
                {
                  moreLanguages.map(lan => {
                      return (
                        <ListItem>
                        <ListItemIcon>
                          <WbSunnyIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={lan}
                          secondary={secondary ? 'Secondary text' : null}
                        />
                      </ListItem>
                      )
                  })
                }   
            </List>
          </div>
        </Grid>
        </Grid>

    </div>
  );
}