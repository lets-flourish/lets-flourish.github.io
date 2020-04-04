import React from 'react';

import PlaceListItem from '../PlaceListItem';

const PlacesList = ({places}) => {
  return (
    <React.Fragment>
      {places.map(place => <PlaceListItem place={place} />)}
    </React.Fragment>
  )
}

export default PlacesList;
