import React, { Component } from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {
  render() {
    const styles = theme => ({
      root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
    });
    return (
      <div>
        <Paper className={styles.root} elevation={1}>
          <Typography variant="headline" component="h2">
            Home
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
          <Button component={Link} to="/about">
            About
          </Button>
        </Paper>
      </div>
      )
    }
  };
export default Home;
