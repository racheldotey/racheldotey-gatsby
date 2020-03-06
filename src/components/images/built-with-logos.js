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
      logoCSS: file(relativePath: { eq: "logo_css3_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoGatsbyJS: file(relativePath: { eq: "logo_gatsbyjs_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoGraphql: file(relativePath: { eq: "logo_graphql_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoHTML: file(relativePath: { eq: "logo_html5_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoNodeJS: file(relativePath: { eq: "logo_nodejs_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoReactJS: file(relativePath: { eq: "logo_reactjs_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoSASS: file(relativePath: { eq: "logo_sass_256.png" }) {
        childImageSharp {
          fixed(width: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <a title="HTML5 is the latest evolution of the standard that defines HTML." href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
        <Img fixed={data.logoHTML.childImageSharp.fixed} />
      </a>
      <a title="CSS3 is the latest evolution of the Cascading Style Sheets language." href="https://developer.mozilla.org/en-US/docs/Archive/CSS3" target="_blank">
        <Img fixed={data.logoCSS.childImageSharp.fixed} />
      </a>
      <a title="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world." href="https://sass-lang.com/" target="_blank">
        <Img fixed={data.logoSASS.childImageSharp.fixed} />
      </a>
      <br className="d-block d-sm-none" />
      <a title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." href="https://nodejs.org/" target="_blank">
        <Img fixed={data.logoNodeJS.childImageSharp.fixed} />
      </a>
      <a title="React.js is a JavaScript library for building user interfaces." href="https://reactjs.org/" target="_blank">
        <Img fixed={data.logoReactJS.childImageSharp.fixed} />
      </a>
      <a title="Gatsby.js is a free and open source framework based on React that helps developers build blazing fast websites and apps." href="https://gatsbyjs.org/" target="_blank">
        <Img fixed={data.logoGatsbyJS.childImageSharp.fixed} />
      </a>
      <a title="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data." href="https://graphql.org/" target="_blank">
        <Img fixed={data.logoGraphql.childImageSharp.fixed} />
      </a>
    </>
  )
}