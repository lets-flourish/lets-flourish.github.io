import React from 'react';
import useStyles from './styles';

const PlaceImg = ({src, alt}) => {
  console.log('TODO: implement lazy loading');
  const classes = useStyles();
  return (
    <img className={classes.placeImg} src={src} alt={alt} />
  )
}

export default PlaceImg;
