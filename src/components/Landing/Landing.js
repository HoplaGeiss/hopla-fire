import './Landing.scss';

import Img from 'gatsby-image';
import React from 'react';

const Landing = ({ cover, title, description }) => {
  const fluid = cover.childImageSharp.fluid;
  return (
    <div className="landing">
      <Img fluid={fluid} className="img" />
      <h1 className="title">{title}</h1>
      <h2 className="description">{description}</h2>
    </div>
  )
}

export default Landing

