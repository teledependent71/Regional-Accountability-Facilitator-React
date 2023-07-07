import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Regional Accountability Facilitator</title>
        <meta
          property="og:title"
          content="Regional Accountability Facilitator"
        />
      </Helmet>
    </div>
  )
}

export default Home
