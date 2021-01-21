import "./PreviousNextPostNav.scss";

import { Link } from "gatsby";
import React from "react";

const PreviousNextPostNav = ({ previous, next }) => {
  return (
    <nav className="previous-next-post-nav">
      {previous && (
        <Link to={previous.fields.slug} rel="prev" className="prev">
          ← {previous.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug} rel="next" className="next">
          {next.frontmatter.title} →
        </Link>
      )}
    </nav>
  );
};

export default PreviousNextPostNav;
