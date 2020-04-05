import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const PlaceTag = ({children}) => {
  const classes = useStyles();

  return (
    <b className={classes.placeTag}>{children}</b>
  )
}

export default PlaceTag;
