import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "stock-you-are-here.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, maxHeight: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (<div className="profile-image">
      <Img style={{"max-height": "340px", "max-width": "340px"}} fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>)
}