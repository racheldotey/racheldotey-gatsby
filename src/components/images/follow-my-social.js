import * as React from "react"
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
      iconFacebook: file(relativePath: { eq: "icon_social_facebook.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconInstagram: file(relativePath: { eq: "icon_social_instagram.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconTwitter: file(relativePath: { eq: "icon_social_twitter.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconLinkedIn: file(relativePath: { eq: "icon_social_linkedin.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iconGit: file(relativePath: { eq: "icon_social_github.png" }) {
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
      <a title="Fork my Github" href="https://github.com/racheldotey" target="_blank" rel="noopener noreferrer" className="pr-2">
        <Img fixed={data.iconGit.childImageSharp.fixed} />
      </a>
      <a title="View my Instagram" href="https://instagram.com/dancingrabbit" target="_blank" rel="noopener noreferrer" className="pr-2">
        <Img fixed={data.iconInstagram.childImageSharp.fixed} />
      </a>
      <a title="Follow me on Twitter" href="https://twitter.com/RaeDeveloper" target="_blank" rel="noopener noreferrer" className="pr-2">
        <Img fixed={data.iconTwitter.childImageSharp.fixed} />
      </a>
      <a title="View my Facebook" href="https://www.facebook.com/rachelldotey" target="_blank" rel="noopener noreferrer" className="pr-2">
        <Img fixed={data.iconFacebook.childImageSharp.fixed} />
      </a>
      <a title="Read my LinkedIn" href="https://www.linkedin.com/in/racheldotey" target="_blank" rel="noopener noreferrer">
        <Img fixed={data.iconLinkedIn.childImageSharp.fixed} />
      </a>
    </div>
  )
}