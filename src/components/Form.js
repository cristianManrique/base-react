import React, { Component } from 'react';
// material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
     open: false,
     name: '',
     age: ''
   };
    this.handleClose = this.handleClose.bind(this);
  }


 handleClickOpen = () => {
   this.setState({ open: true });
 };

 handleClose = () => {
   this.setState({ open: false });
 };


 handleFormChange = event => {
   event.preventDefault();
   this.setState({
     name: this.nameField.value,
     age: this.ageField.value,
   });

 }

  render() {
    const styles = theme => ({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
      },
      button: {
        margin: theme.spacing.unit,
      }
    });

    return (
      <div>
        <h2>Form</h2>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form ref={input => this.cardForm = input }
            onSubmit={ (e) => {this.handleFormChange(e); this.handleClose();}}>

            <TextField id="name" label="Name" margin="normal"
              className={styles.textField}
              inputRef={input => this.nameField = input}
            />
            <TextField id="age" label="Age" margin="normal"
              className={styles.textField}
              inputRef={input => this.ageField = input}
            />
            <div>
              <Button variant="contained" color="primary" type="submit">
                SAVE
              </Button>
            </div>
          </form>
        </Dialog>
        <Button variant="fab"
                color="secondary"
                aria-label="Add"
                className={styles.button}
                onClick={this.handleClickOpen}>
          <AddIcon />
        </Button>

        <Paper className={styles.root} elevation={1}>
          <Typography variant="headline" component="h2">
            Info
          </Typography>
          <Typography component="h3">
            {this.state.name}
          </Typography>
          <Typography component="h4">
            {this.state.age}
          </Typography>
        </Paper>
      </div>
      )
    }
  };
export default Form;
