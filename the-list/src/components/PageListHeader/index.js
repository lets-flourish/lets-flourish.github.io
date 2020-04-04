import React from 'react';

import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography';

const submitPlaceLink = 'https://docs.google.com/forms/d/e/1FAIpQLSePTw6SCO9HeB23fuYvb3b3oaCNBMTkIcnJBEnMTNMLVnWzUA/viewform';

const PageListHeader = () => {
  return (
    <header>
      <Typography variant="body1" align="center">
        A directory of independent food and drink spots in London offering delivery, takeaway or NHS donations services during the lockdown
      </Typography>
      <Typography vaiant="body1" align="center">
       <b>last updated: 3rd April 2020 - 14:10</b>
      </Typography>
      <Typography variant="body1" align="center">
        Add your business or suggest one <Link href={submitPlaceLink}>here</Link>.
      </Typography>
    </header>
  )
}

export default PageListHeader;
