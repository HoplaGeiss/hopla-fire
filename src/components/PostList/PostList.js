import './PostList.scss';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      <ol className="list" itemScope itemType="https://schema.org/ItemList">
        {posts.map((post, index) => {
          const title = post.frontmatter.title || post.fields.slug
          const img = post.frontmatter.cover.childImageSharp.fixed

          return (
            <li key={post.fields.slug} >
              <article
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Link to={post.fields.slug} itemProp="url" className="item">
                  <meta itemprop="position" content={index + 1} />

                  <div className="item-img">
                    <Img fixed={img} className="img" itemProp="image" alt={title}/>
                  </div>

                  <div className="text-wrapper">
                    <header>
                      <h2 className="title" itemProp="name">{title}</h2>
                      <small className="date">{post.fields.date}</small>
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
                  </div>
                </Link>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default PostList

