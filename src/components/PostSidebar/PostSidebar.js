import './PostSidebar.scss';

import classNames from 'classnames';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const PostSidebar = ({ posts, className, title }) => {
  const wrapperClass = classNames(className, 'post-sidebar');

  return (
    <div className={wrapperClass}>
      <div className="post-sidebar-title">
        <Link to="/">{title}</Link>
      </div>
      <ol className="post-sidebar-list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const img = post.frontmatter.cover.childImageSharp.fixed

          return (
            <li key={post.fields.slug}>
              <article
                itemScope itemType="https://schema.org/BlogPosting"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <div className="item-img-wrapper"><Img fixed={img} itemProp="image" className="item-img"/></div>
                  <span itemProp="headline name" className="item-text">{title}</span>
                </Link>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default PostSidebar
