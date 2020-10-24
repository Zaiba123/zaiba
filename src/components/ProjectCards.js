import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './project.css';


export const useStyles = makeStyles({
    cardStyle: {
      maxWidth: "300px",
    //   display:"grid",

      //gridTemplateColumns:"400px ",
      //gridTemplateColumns:"400px "
      //gridTemplateAreas:"'a a a' 'b b b' 'c c c'",

    },
    // a: {
    //     display:"grid",
    // },
    // b: {
    //     border: "solid pink 4px",
    //     gridarea: "b",
    // },
    // c: {
    //     display:"grid",
    // },
    
  });

export default function ProjectCards({name,description,picture,classTitle,imageTitle}) {
    const classes = useStyles();
    return (
        <div className="bg-image">
            <div className="garden" >
            <Card className={classTitle}>
                <CardActionArea className="actionArea">
                    <CardMedia
                    className="jk"
                    component="img"
                    alt="project"
                    height="200"
                    width="600"
                    image={picture}
                    title={imageTitle}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" >
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" >
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
                </div>
        </div>
    )
}
