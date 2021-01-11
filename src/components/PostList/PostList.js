import './PostList.scss';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <ol className="list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const img = post.frontmatter.cover.childImageSharp.fluid

          return (
            <li key={post.fields.slug} className="item">
              <div className="item-img"><Img fluid={img}/></div>
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.fields.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                    className="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default PostList

