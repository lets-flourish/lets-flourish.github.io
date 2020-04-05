import React from 'react';
import useStyles from './styles';

const PlaceImg = ({src}) => {
  console.log('TODO: implement lazy loading');
  const classes = useStyles();
  return (
    <img className={classes.placeImg} src={src} />
  )
}

export default PlaceImg;
