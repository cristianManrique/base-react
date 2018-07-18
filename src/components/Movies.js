import React, { Component } from 'react';

// material UI
import {
  Grid, Paper,
  Button, Typography,
  Card, CardActions,
  CardContent, CardMedia,
  withStyles
} from '@material-ui/core';

// styles
const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
  },
  paper: {
    padding: '16px'
  }
});

class Movies extends Component {

  state = {
    list: [
      {
        id: 1,
        title: 'Mission: Impossible Fallout',
        text: 'The best intentions often come back to haunt you.',
        rating: 4
      },
      {
        id: 2,
        title: 'Ant-Man And The Wasp',
        text: 'a new chapter featuring heroes with the astonishing ability to shrink',
        rating: 2
      },
      {
        id: 3,
        title: 'Back to the Future',
        text: 'Lorem ipsum dolores radius melotus lapis demus fercoletus',
        rating: 2
      }
    ]
  }



  render() {
    // const classes use withStyles
    const { classes } = this.props;

    const list = Object
                  .keys(this.state.list)
                  .map(key =>

                  <Grid item xs={4} key={key}>
                    <Card className={classes.card}>
                      <CardMedia
                          className={classes.media}
                          title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                          {this.state.list[key].title}
                        </Typography>
                        <Typography component="h3">
                          Rating ; {this.state.list[key].rating}
                        </Typography>
                        <Typography component="p">
                          {this.state.list[key].text}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          SAVE
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>

                );
    return (
        <div className="app-wrapper">
          <Grid container justify="center" spacing={24}>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="headline" component="h2">
                  Movies
                </Typography>
                <Typography component="p">
                  Movies ratings.
                </Typography>
                <Grid container spacing={24}>
                  {list}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
  }
};

export default withStyles(styles)(Movies);
