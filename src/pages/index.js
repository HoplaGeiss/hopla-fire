import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';

import Intro from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogIndex = ({ data, location }) => {
  const [showIntro, setShowIntro] = useState(false);

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const toggleIntro = () => setShowIntro(!showIntro)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <p>
        Bienvenue sur HOPLA, un blog dédié à l'indépendance financière et à la retraite anticipé.
        Chacun a ses raisons pour essayer d'atteindre l'indépendance financière. Comme beaucoup, peut-être que votre travail ne vous intéresse plus, peut-être que vous voulez assurer l'avenir de votre famille, peut-être que vous ne comprenez pas pourquoi nous sommes censés passer la plupart de notre vie d'adulte à travailler.
      </p>
      <div onClick={toggleIntro}>Lisez la suite...</div>

      { showIntro ? <Intro /> : null }

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"  }}, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
