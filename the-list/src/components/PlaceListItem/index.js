import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PlaceImg from '../PlaceImg';

const PlaceListItem = ({place}) => {
  console.log({place})
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
    availables.push('Takeaway available')
  }
  if(place.delivery_text !== 'n/a') {
    availables.push('Delivery available')
  }
  if(place.vouchers_text !== 'n/a') {
    availables.push('Vouchers available')
  }

  const orderNowButton = place.delivery_link !== 'n/a'
    ? <Button variant="contained" color="primary" href={place.delivery_link}>Order now →</Button>
    : place.takeaway_link
    ? <Button variant="contained" color="primary" href={place.takeaway_link}>Order now →</Button>
    : null;

  return (
    <React.Fragment key={place.id}>
      <Grid item xs={12} md={3}>
        <PlaceImg src={place.image}/>
      </Grid>
      <Grid item xs={12} md={9}>
        <h1>{place.name}</h1>
        <p>{place.type} in {place.area}</p>
        <p>
          {tags.map(tag => <span key={tag}>{tag}</span>)}
        </p>
        <ul>
          {availables.map(a => <li key={a}>{a}</li>)}
        </ul>
        {orderNowButton}
      </Grid>
    </React.Fragment>
  )
}

export default PlaceListItem;
