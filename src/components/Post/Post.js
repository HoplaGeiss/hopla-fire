import './Post.scss';

import Img from 'gatsby-image';
import React from 'react';

const Post = ({ post }) => {
  const img = post.frontmatter.cover.childImageSharp.fluid
  return (
    <article
      className="blog-post-article"
      itemprop="blogPost"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 itemProp="headline name">{post.frontmatter.title}</h1>
        <p className="date" itemprop="datePublished">{post.fields.date}</p>
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

