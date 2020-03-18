import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

const CallOutBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSign: file(relativePath: { eq: "stock-this-is-the-sign.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 512, maxHeight: 512) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="callout-banner">
      <Container>
        <Row className="d-flex h-100 py-3 mb-xs-3">
          <Col sm={12}  md={8}  lg={6} className="order-md-first">
            <h2>Lets talk about what will take your business presence to the next level.</h2>
            <p className="lead">Whether its a website redesign, a targeted local search campaign, or developing a new application to provide your service to users in an innovative way - I'm the developer you are looking for.</p>
            <p className="lead">Reach out today.</p>
            <div className="pt-3 text-center">
              <Link className="button button-light" to="/contact">Connect with me</Link>
            </div>
          </Col>
          <Col sm={12}  md={4}  lg={6} className="align-self-center text-center py-3">
            <div className="profile-image">
              <Link className="image-link" to="/contact">
                <Img style={{ "maxHeight": "340px", "maxWidth": "340px" }} fluid={data.imageSign.childImageSharp.fluid} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CallOutBanner
