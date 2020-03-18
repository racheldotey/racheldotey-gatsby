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
import { Location } from '@reach/router';

function SEO({ description, lang, meta, keywords, title, social }) {
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
              alt
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

  const currentUrl =  JSON.stringify(Location)
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const socialTitle = social || site.siteMetadata.titleTemplate.replace(/%s/, title)

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
          name: `keywords`,
          content: metaKeywords,
        },
        { // Open Graph
          property: `og:title`,
          content: socialTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: currentUrl,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image.url,
        },
        {
          name: `og:image:alt`,
          content: site.siteMetadata.image.alt,
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
        { // Facebook
          name: `fb:app_id`,
          content: `805678473287926`,
        },
        { // Twitter
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: socialTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: site.siteMetadata.image.url,
        },
        {
          name: `twitter:image:alt`,
          content: site.siteMetadata.image.alt,
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
