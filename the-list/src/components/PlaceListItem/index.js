import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import PlaceImg from '../PlaceImg';
import PlaceTag from './PlaceTag';

import useStyles from './styles';

const PlaceListItem = ({place}) => {
  const classes = useStyles();

  let tags = [];
  if(place.alcohol_available === 'TRUE') {
    tags.push("Drinks 🍷")
  }
  if(place.groceries_available === 'TRUE') {
    tags.push("Groceries 🥦")
  }
  if(place.meal_kits_available === 'TRUE') {
    tags.push("Meal Kits 👨🏻‍🍳")
  }
  if(place.nhs_donations_available === 'TRUE') {
    tags.push("NHS Donations 👩🏽‍⚕️")
  }

  let availables = [];
  if(place.takeaway_text !== 'n/a') {
    availables.push({
      text: 'Takeaway available',
      color: 'primary'
    })
  }
  if(place.delivery_text !== 'n/a') {
    availables.push({
      text: 'Delivery available',
      color: 'primary'
    })
  }
  if(place.vouchers_text !== 'n/a') {
    availables.push({
      text: 'Vouchers available',
      color: 'primary',
      link: place.voucher_link
    })
  }
  if(place.nhs_donations_available === 'TRUE') {
    availables.push({
      text: 'NHS donations',
      color: 'secondary',
      link: place.nhs_donations_link
    })
  }

  const orderNowLink = place.delivery_link !== 'n/a'
    ? place.delivery_link
    : place.takeaway_link !== 'n/a'
    ? place.takeaway_link
    : null;

  return (
    <Box key={place.id}
      className={classes.item}
      display="flex"
      flexDirection="column"
      alignItems="left">
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={1}></Grid>
        <Grid item xs={12} sm={4} md={4}>
          <PlaceImg src={place.image}/>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h4" gutterBottom>{place.name}</Typography>
          <Typography variant="body1" gutterBottom>{place.type} in {place.area}</Typography>
          <Typography variant="body1">
            {tags.map(tag => <PlaceTag key={tag}>{tag}</PlaceTag>)}
          </Typography>
          <List component="ul" gutterBottom>
            {availables.map(item => (
              <ListItem className={classes.servicesListItem}>
                <ListItemIcon className={classes.servicesListItemIcon}>
                  <CheckCircleOutlineIcon color={item.color} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Button variant="outlined" color="primary" href={orderNowLink}>Order →</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={1}></Grid>
      </Grid>
    </Box>
  )
}

export default PlaceListItem;
