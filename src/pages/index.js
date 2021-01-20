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
  const cover = data.cover.childImageSharp.fluid;
  const seoImage = data.cover.childImageSharp.fixed;

  return (
    <React.Fragment>
      <SEO image={seoImage}/>
      <div itemScope itemType="https://schema.org/Blog">
        <Landing cover={cover} title={title} description={description}/>
        <PostList posts={posts} />
      </div>
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
      childImageSharp {
        fixed(height: 300, width: 300) {
          ...GatsbyImageSharpFixed
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
