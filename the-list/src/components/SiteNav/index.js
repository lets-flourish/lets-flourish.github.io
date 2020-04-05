import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const NavMenu = ({toggleDrawer}) => (
  <div
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List>
      {[{text: 'Home', href: 'https://letsflourish.co/'}, {text: 'Find Businesses', href: 'https://thelist.letsflourish.co/'}, {text: 'About', href: 'https://letsflourish.co/pages/about'}].map((item, index) => (
        <ListItem component={Link} href={item.href} key={item.text}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </div>
);

const SiteNav = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.title}>
            THE FLOURISH LIST
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon onClick={toggleDrawer(true)} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {NavMenu({toggleDrawer})}
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default SiteNav;
