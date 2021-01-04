import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Intro = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      markdownRemark(fileAbsolutePath: {regex: "/(other/intro)/"}) {
        html
      }
    }
  `)

  const intro = data.markdownRemark

  return (
    <section
          dangerouslySetInnerHTML={{ __html: intro.html }}
          itemProp="articleBody"
        />
  )
}

export default Intro
