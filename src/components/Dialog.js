import React, { Component } from 'react';
// material ui
import {
  Grid, Paper,
  List, ListItem,
  ListItemText, Divider,

  Button, Typography,
  withStyles, TextField,
  Dialog, DialogTitle,
  DialogContent,
  DialogContentText, DialogActions,

  Table, TableHead, TableRow,
  TableCell, TableBody

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
                      .map((key, index) =>  <div>
                                              <ListItem key={key} button>
                                                <ListItemText  primary={this.state.items[key].nom}></ListItemText>
                                                <ListItemText secondary={this.state.items[key].code}></ListItemText>
                                                <ListItemText  secondary={this.state.items[key].account}></ListItemText>
                                              </ListItem>
                                              <Divider />
                                            </div>
                                          );
    console.log(list);
    return (
      <div>
        <Paper className={styles.root} elevation={1}>
          <Typography variant="headline" component="h2">
            Dialog
          </Typography>
          <Typography component="p">
            Open dialog to see list
          </Typography>
          <Button onClick={this.handleClickOpen}>Open dialog</Button>
        </Paper>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">List</DialogTitle>
          <DialogContent>
            {/* <List component="nav">
                {list}
            </List> */}
      <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

              <TableRow>
                <TableCell component="th" scope="row">
                  test
                </TableCell>
                <TableCell numeric>test</TableCell>
                <TableCell numeric>test</TableCell>
                <TableCell numeric>test</TableCell>
                <TableCell numeric>test</TableCell>
              </TableRow>

        </TableBody>
      </Table>
    </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      )
    }
  };
export default DialogComp;
