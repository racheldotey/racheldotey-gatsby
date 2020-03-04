import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

const ServicesBanner = () => {
    const data = useStaticQuery(graphql`
      query {
        imageAnalytics: file(relativePath: { eq: "stock-analytics-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageResponsivePhone: file(relativePath: { eq: "stock-responsive-phone-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageLaptopWindows: file(relativePath: { eq: "stock-laptop-windows-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

    return (
        <section className="services-banner"><a href="#services"></a>
            <Container className="my-5 py-5">
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <p className="h2 text-center">Responsive Web Design</p>
                            <div className="image-framed">
                                <Img fluid={data.imageResponsivePhone.childImageSharp.fluid} />
                            </div>
                            <p className="mt-3">Customers visit browse the web on their cell phones more than ever before, making responsive web design essential to reaching your clients where they are.</p>
                            <p>I theme websites using responsive mobile first design so your website can adapt and deliver the best experience to users on any screen.</p>
                            <div className="text-center">
                                <Link to="/services">See my services</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="mb-5 mb-lg-0">
                            <p className="h2 text-center">Search Engine Marking</p>
                            <div className="image-framed">
                                <Img fluid={data.imageAnalytics.childImageSharp.fluid} />
                            </div>
                            <p className="mt-3">Getting found in Google is tricky. From content strategy and social media marketing, then there's adwords and Google reviews. Results are tracked with Google Analyitics.</p>
                            <p>We discover the unique needs of your business and create a targeted strategy for you.</p>
                            <div className="text-center">
                                <Link to="#contact">Contact me</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4}>
                        <div>
                            <p className="h2 text-center">Software Development</p>
                            <div className="image-framed">
                                <Img fluid={data.imageLaptopWindows.childImageSharp.fluid} />
                            </div>
                            <p className="mt-3">As a full stack software developer I create custom WordPress plugins, membership areas, payment gateways, React based single page websites, fully custom web and phone apps.</p>
                            <p>I can create anything your business needs to succeed in today's competitive online markets.</p>
                            <div className="text-center">
                                <Link to="/about">Lets build something</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServicesBanner