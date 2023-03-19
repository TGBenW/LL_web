import React from 'react'
import { Helmet } from 'react-helmet'

function Nav () {
  return (
    <Helmet>
      <title>Little Lemon - Chicago Restaurant</title>
      <meta name="description" content="Little Lemon restaurant in Chicago. Offers online ordering, table booking, specials, reviews and info about the restaurant." />
      <meta name="keywords" content="Little Lemon, Chicago, restaurant, online ordering, table booking, specials, reviews" />
      <meta property="og:title" content="Little Lemon - Chicago Restaurant" />
      <meta property="og:description" content="Little Lemon restaurant in Chicago. Offers online ordering, table booking, specials, reviews and info about the restaurant." />
      <meta property="og:image" content="https://example.com/little-lemon-logo.png" />
      <meta property="og:url" content="https://example.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Little Lemon - Chicago Restaurant" />
      <meta name="twitter:description" content="Little Lemon restaurant in Chicago. Offers online ordering, table booking, specials, reviews and info about the restaurant." />
      <meta name="twitter:image" content="https://example.com/little-lemon-logo.png" />
    </Helmet>
  )
}

export default Nav
