import './Post.scss';

import Img from 'gatsby-image';
import React from 'react';

const Post = ({ post }) => {
  const img = post.frontmatter.cover.childImageSharp.fluid
  return (
    <article
      className="blog-post-article"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        <p className="date">{post.fields.date}</p>
        <Img fluid={img} itemProp="image"/>
      </header>
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />
      <hr />
    </article>
  )
}

export default Post

