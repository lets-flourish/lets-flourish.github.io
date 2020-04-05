import React from 'react';

import useStyles from './styles';

const PlaceTag = ({children}) => {
  const classes = useStyles();

  return (
    <b className={classes.placeTag}>{children}</b>
  )
}

export default PlaceTag;
