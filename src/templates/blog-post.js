import './blog-post.scss';

import { graphql } from 'gatsby';
import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Post from '../components/Post/Post';
import PostSidebar from '../components/PostSidebar/PostSidebar';
import PreviousNextPostNav from '../components/PreviousNextPostNav/PreviousNextPostNav';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const postImage = post.frontmatter.cover.childImageSharp.fixed;
  const allPost = data.allMarkdownRemark.nodes
  const title = data.site.siteMetadata.title
  const { previous, next } = data;

  return (
    <div className="blog-post">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={postImage}
      />
      <Navbar title={title}/>
      <div className="center">
        <PostSidebar posts={allPost} title={title} className="sidebar"/>
        <div itemScope itemType="https://schema.org/Blog" className="main">
          <Post post={post} />
          <PreviousNextPostNav previous={previous} next={next} />
        </div>
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug,
        }
        frontmatter {
          title
          cover {
            childImageSharp {
              fixed(width: 40, height: 40) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        date(formatString: "DD MMMM YYYY", locale: "fr")
      }
      frontmatter {
        title
        description
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageSharp {
            fixed(height: 300, width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
