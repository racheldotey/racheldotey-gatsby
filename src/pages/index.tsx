import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import ContactBanner from "../components/banner-contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="pb-5">
        <section className="greeting-banner">
          <a href="#greeting"></a>
          <div className="d-flex h-100">
            <div className="container justify-content-center align-self-center text-right">
              <h1>
                Hi, my name is <span className="highlight">Rachel</span>!<br />I
                build <span className="highlight">interactive</span> websites
                and software.
              </h1>
            </div>
          </div>
        </section>

        <section className="introduction-banner">
          <a href="#intro"></a>
          <Container>
            <Row className="d-flex h-100 py-3 mb-4 mb-sm-0">
              <Col
                sm={12}
                md={4}
                lg={6}
                className="justify-content-center align-self-center text-center pb-3"
              >
                <div className="profile-image">
                  <StaticImage
                    src="../images/stock-responsive-laptop-square.jpg"
                    alt="This is the developer you are looking for..."
                    placeholder="blurred"
                    layout="fullWidth"
                    style={{ maxHeight: "340px", maxWidth: "340px" }}
                  />
                </div>
              </Col>
              <Col sm={12} md={8} lg={6} className="pt-3">
                <span className="h2">It's great to have you visit!</span>
                <p className="lead">
                  I'm a software developer with experience designing and
                  developing interactive web applications.
                </p>
                <p className="lead">
                  I am interested in helping small businesses gain visibility on
                  the internet. Create strong brands and stay competitive in the
                  market.
                </p>
                <div className="text-center">
                  <Link to="/services" className="button button-light">
                    Look at what I do
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="services-banner">
          <a href="#services"></a>
          <Container className="my-5 py-5">
            <Row>
              <Col sm={12} md={6} lg={4}>
                <div className="mb-5 mb-lg-0">
                  <p className="h2 text-center">Responsive Web Design</p>
                  <div className="image-framed">
                    <StaticImage
                      src="../images/stock-responsive-phone-banner.jpg"
                      alt="This is the developer you are looking for..."
                      placeholder="blurred"
                      layout="fullWidth"
                      style={{ maxHeight: "340px", maxWidth: "340px" }}
                    />
                  </div>
                  <p className="mt-3">
                    Customers visit browse the web on their cell phones more
                    than ever before, making responsive web design essential to
                    reaching your clients where they are.
                  </p>
                  <p>
                    I theme websites using responsive mobile first design so
                    your website can adapt and deliver the best experience to
                    users on any screen.
                  </p>
                  <div className="text-center">
                    <Link to="/services">See my services</Link>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <div className="mb-5 mb-lg-0">
                  <p className="h2 text-center">Search Engine Marking</p>
                  <div className="image-framed">
                    <StaticImage
                      src="../images/stock-analytics-banner.jpg"
                      alt="This is the developer you are looking for..."
                      placeholder="blurred"
                      layout="fullWidth"
                      style={{ maxHeight: "340px", maxWidth: "340px" }}
                    />
                    ;
                  </div>
                  <p className="mt-3">
                    Getting found in Google is tricky. From content strategy and
                    social media marketing, then there's adwords and Google
                    reviews. Results are tracked with Google Analyitics.
                  </p>
                  <p>
                    We discover the unique needs of your business and create a
                    targeted strategy for you.
                  </p>
                  <div className="text-center">
                    <Link to="#contact">Contact me</Link>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={4}>
                <div>
                  <p className="h2 text-center">Software Development</p>
                  <div className="image-framed">
                    <StaticImage
                      src="../images/stock-laptop-windows-banner.jpg"
                      alt="This is the developer you are looking for..."
                      placeholder="blurred"
                      layout="fullWidth"
                      style={{ maxHeight: "340px", maxWidth: "340px" }}
                    />
                  </div>
                  <p className="mt-3">
                    As a full stack software developer I create custom WordPress
                    plugins, membership areas, payment gateways, React based
                    single page websites, fully custom web and phone apps.
                  </p>
                  <p>
                    I can create anything your business needs to succeed in
                    today's competitive online markets.
                  </p>
                  <div className="text-center">
                    <Link to="/about">Lets build something</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Container>
          <Row className="justify-content-center align-self-center">
            <Col md={12} lg={10} className="my-5">
              <p className="h1 highlight text-center">
                What will connect you with customers?
              </p>
              <p className="lead text-center">
                Reach out! Lets talk about what will take your business presence
                to the next level. Whether its a website redesign, a targeted
                local search campaign, or developing a new application to
                provide your service to users in an innovative way - I'm the
                developer you are looking for.
              </p>
            </Col>
          </Row>
        </Container>

        <ContactBanner />
      </div>
      <hr />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Web & App Development | RachelDotey.ninja</title>
);
