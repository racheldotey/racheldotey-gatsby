import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "picture-square.png" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (<div className="profile-image">
      <Img style={{"maxHeight": "210px", "maxWidth": "210px"}} fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>)
}