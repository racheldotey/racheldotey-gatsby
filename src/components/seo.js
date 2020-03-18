/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            title
            titleTemplate
            description
            url
            image {
              url
              width
              height
            }
            twitterUsername
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: site.siteMetadata.titleTemplate.replace(/%s/, title),
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image.url,
        },
        {
          property: `og:image:width`,
          content: site.siteMetadata.image.width,
        },
        {
          property: `og:image:height`,
          content: site.siteMetadata.image.height,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_image_large`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.titleTemplate.replace(/%s/, title),
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image,
        },
        {
          name: `twitter:image:alt`,
          content: metaDescription,
        },
        {
          name: `fb:app_id`,
          content: `805678473287926`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
