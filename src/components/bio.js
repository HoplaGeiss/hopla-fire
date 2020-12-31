import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      markdownRemark(fileAbsolutePath: {regex: "/(other/bio/bio.md)/"}) {
        html
      }
    }
  `)

  const bio = data.markdownRemark

  return (
    <section
          dangerouslySetInnerHTML={{ __html: bio.html }}
          itemProp="articleBody"
        />
  )
}

export default Bio
