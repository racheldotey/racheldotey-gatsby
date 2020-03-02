import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "stock-laptop-windows-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (<div className="banner-services-image">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>)
}