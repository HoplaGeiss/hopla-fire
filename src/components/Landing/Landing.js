import './Landing.scss';

import Img from 'gatsby-image';
import React from 'react';

const Landing = ({ cover, title, description }) => {
  return (
    <div className="landing">
      <Img fluid={cover} className="img" alt={title}/>
      <h1 className="title">{title}</h1>
      <h2 className="description">{description}</h2>
    </div>
  )
}

export default Landing

