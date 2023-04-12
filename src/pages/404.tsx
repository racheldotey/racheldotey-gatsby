import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from '../components/seo';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col sm={12} md={5} lg={4} className="pb-3 text-center">
            <div className="profile-image">
              <StaticImage
                src="../images/stock-you-are-here.jpg"
                alt="Honestly, I'm as lost as you are..."
                placeholder="blurred"
                layout="fullWidth"
                style={{ maxHeight: "340px", maxWidth: "340px" }}
              />
            </div>
          </Col>
          <Col sm={12} md={7} lg={8}>
            <Container>
              <Row className="justify-content-md-center">
                <Col className="text-center">
                  <h1 className="title">404, there's nothing here...</h1>
                  <p className="lead">
                    Sorry but we couldn't find the page you are looking for.
                  </p>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col className="pb-5 text-center">
                  <p>
                    It's possible that the resource was moved
                    <br />
                    or maybe you just hit a route that doesn't exist... the
                    sadness.
                  </p>
                  <Link to="/">Go back to the homepage.</Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="404 Not Found"></Seo>;
