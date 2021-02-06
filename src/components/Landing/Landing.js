import "./Landing.scss";

import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";

const Landing = ({ cover, title, description }) => {
  return (
    <div className="landing">
      <Img fluid={cover} className="img" alt={title} itemProp="image" />
      <h1 className="title" itemProp="name headline about">
        {title}
      </h1>
      <h2 className="description" itemProp="description abstract">
        {description}
      </h2>
      <p className="introduction">
        Nouveaux sur le site? Commencez <Link to="/introduction-hopla-fire">ici</Link>
      </p>
    </div>
  );
};

export default Landing;
