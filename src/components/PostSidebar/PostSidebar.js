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
      <ol className="post-sidebar-list" itemScope itemType="https://schema.org/ItemList">
        {posts.map((post, index) => {
          const title = post.frontmatter.title || post.fields.slug
          const img = post.frontmatter.cover.childImageSharp.fixed

          return (
            <li key={post.fields.slug}>
              <article
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <meta itemProp="position" content={index + 1} />
                  <div className="item-img-wrapper"><Img fixed={img} itemProp="image" className="item-img" alt={title}/></div>
                  <span itemProp="name" className="item-text">{title}</span>
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
