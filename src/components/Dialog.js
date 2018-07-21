import React, { Component } from 'react';
// material ui
import {
  Grid, Paper,
  Button, Typography,
  Card, CardActions,
  CardContent, CardMedia,
  withStyles, TextField,
  Dialog, DialogTitle,
  DialogContent,
  DialogContentText, DialogActions
} from '@material-ui/core';


class DialogComp extends Component {
 state = {
   open: false,
   items : [
      {
        "nom": "John",
        "code": "123",
        "account": "3456"
      },
      {
        "nom": "Peter",
        "code": "345",
        "account": "4567"
      },
      {
        "nom": "Laurent",
        "code": "567",
        "account": "456"
      },
    ]
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const styles = theme => ({
      root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
    });

    const list = Object.keys(this.state.items)
                      .map((key, index) => <div key={index}>{this.state.items[key].nom}</div>);
    console.log(list);
    return (
      <div>
        <Paper className={styles.root} elevation={1}>
          <Typography variant="headline" component="h2">
            Dialog
          </Typography>
          <ul>
            {list}
          </ul>
          <Button to="/about">
            About
          </Button>
        </Paper>


        <Button onClick={this.handleClickOpen}>Open form dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      )
    }
  };
export default DialogComp;
