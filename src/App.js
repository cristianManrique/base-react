import React, { Component } from 'react';
// css
// import './assets/css/style.css';
// Routes
import Routes from './Routes';
// Component
import Header from './components/Header';
// material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Paper className={styles.paper}>
                  <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <Routes />
                    </Grid>
                  </Grid>
                </Paper>
              </div>
        </div>


      </div>

    );
  };
};

export default App;
