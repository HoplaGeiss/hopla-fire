import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ description, lang, meta, title, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: siteUrl + pathname,
    image: image ? siteUrl + image.src : ''
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: title ? `article` : `website`,
        },
        {
          property: `og:image`,
          content: seo.image
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
