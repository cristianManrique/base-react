import React, { Component } from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class NotFound extends Component {
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
          <Typography variant="headline" component="h3">
            not found
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
      )
    }
  };
export default NotFound;
