import React from 'react';
//import logo from '../assets/img/logo.svg';
// material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
});
class Header extends React.Component {
  render() {
  return (
    <div>
       <AppBar position="static">
         <Toolbar variant="dense">
          <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            MY-APP
          </Typography>
        </Toolbar>
       </AppBar>
     </div>
    )
  };
};

export default Header;
