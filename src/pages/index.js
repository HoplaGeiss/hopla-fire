import './index.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Landing from '../components/Landing/Landing';
import PostList from '../components/PostList/PostList';
import SEO from '../components/seo';

const BlogIndex = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.nodes;
  const cover = data.cover;

  return (
    <React.Fragment>
      <SEO title="Tous les articles" />
      <Landing cover={cover} title={title} description={description}/>
      <PostList posts={posts} />
    </React.Fragment>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description
      }
    },
    cover: file(relativePath: { eq: "fire-economies.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug,
          date(formatString: "DD MMMM YYYY", locale: "fr")
        }
        frontmatter {
          title
          description
          cover {
            childImageSharp {
              fixed(height: 100, width: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    },
  }
`
