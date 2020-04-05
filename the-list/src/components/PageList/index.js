import React, { useState } from 'react';
import PlacesList from '../PlacesList';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PageListHeader from '../PageListHeader';
import ListFilterPanel from '../ListFilterPanel';

import allPlaces from './places.json'
import initialFilter from './initialFilter.json'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const PageList = () => {
  // const [filter, setFilter] = useState(initialFilter);
  const [places, setPlaces] = useState(allPlaces.filter(p => p.publish === 'yes'));

  return (
    <React.Fragment>
      <PageListHeader />
      <ListFilterPanel setPlaces={setPlaces} allPlaces={allPlaces}/>
      <Box m={2}>
        <Typography variant="body1" align="center">
          Showing {places.length} businesses
        </Typography>
      </Box>
      <Box m={2}>
        <Container fluid>
        <PlacesList places={places} />
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default PageList;
