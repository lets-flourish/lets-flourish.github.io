import React, { useState } from 'react';
import PlacesList from '../PlacesList';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import PageListHeader from '../PageListHeader';
import ListFilterPanel from '../ListFilterPanel';

import allPlaces from './places.json'
import initialFilter from './initialFilter.json'
import { Typography } from '@material-ui/core';

const PageList = () => {
  const [filter, setFilter] = useState(initialFilter);
  const [places, setPlaces] = useState(allPlaces.filter(p => p.publish === 'yes'));

  return (
    <Container fixed>
      <PageListHeader />
      <ListFilterPanel setPlaces={setPlaces} allPlaces={allPlaces}/>
      <Typography variant="body1" align="center">
        Showing {places.length} businesses
      </Typography>
      <Grid container spacing={2}>
        <PlacesList places={places} />
      </Grid>
    </Container>
  )
}

export default PageList;
