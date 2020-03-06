import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

const IntroductionBanner = () => {
    const data = useStaticQuery(graphql`
      query {
        imageLaptop: file(relativePath: { eq: "stock-responsive-laptop-square.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 512, maxHeight: 512) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

    return (
        <section className="introduction-banner"><a href="#intro"></a>
            <Container>
                <Row className="d-flex h-100 py-3 mb-4 mb-sm-0">
                    <Col sm={12} md={4} lg={6} className="justify-content-center align-self-center text-center pb-3">
                        <div className="profile-image">
                            <Img style={{ "max-height": "340px", "max-width": "340px" }} fluid={data.imageLaptop.childImageSharp.fluid} />
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={6}>
                        <span className="h2">It's great to meet you!</span>
                        <p className="lead">I'm a software developer with experience building interactive user experiences and .</p>
                        <p className="lead">I am interested in helping small businesses gain visibility on the internet.
                Create strong brands and stay competitive in the market.</p>
                        <div className="text-center">
                            <Link to="#services" className="button button-light">Look at what I do</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IntroductionBanner