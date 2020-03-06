import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      iconFacebook: file(relativePath: { eq: "icon-social-facebook-square.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconInstagram: file(relativePath: { eq: "icon-social-instagram-square.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconTwitter: file(relativePath: { eq: "icon-social-twitter-square.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconGithub: file(relativePath: { eq: "icon-social-github-square.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconLinkedIn: file(relativePath: { eq: "icon-social-linkedin-square.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="follow-my-social">
      <a title="View my Instagram" href="https://instagram.com/" target="_blank" className="pr-2">
        <Img fixed={data.iconInstagram.childImageSharp.fixed} />
      </a>
      <a title="Follow me on Twitter" href="https://twitter.com/RaeDeveloper" target="_blank" className="pr-2">
        <Img fixed={data.iconTwitter.childImageSharp.fixed} />
      </a>
      <a title="Read my LinkedIn" href="https://www.linkedin.com/in/racheldotey/" target="_blank" className="pr-2">
        <Img fixed={data.iconLinkedIn.childImageSharp.fixed} />
      </a>
      <a title="Fork my Github" href="https://github.com/racheldotey" target="_blank">
        <Img fixed={data.iconGithub.childImageSharp.fixed} />
      </a>
    </div>
  )
}