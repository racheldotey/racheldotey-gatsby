import * as React from "react";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import Seo from '../components/seo';

const ServicesPage: React.FC<PageProps> = () => (
  <Layout>
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="text-center page-intro">
          <h1 className="title">Site Map</h1>
          <p className="lead">Trying to find something?</p>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col xs={12} sm={6} lg={3} className="pt-4 text-center text-sm-left">
          <h4>Pages</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} lg={3} className="pt-4 text-center text-sm-left">
          <h4>Blogs</h4>
          <ul className="list-unstyled">
            <li>Coming soon!</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} lg={3} className="pt-4 text-center text-sm-left">
          <h4>Policies</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/policies">Policies</Link>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} lg={3} className="pt-4 text-center text-sm-left">
          <h4>System Pages</h4>
          <ul className="list-unstyled">
            <li>
              <Link to="/404">404 Page Not Found</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <hr />
  </Layout>
);

export default ServicesPage;

export const Head: HeadFC = () => <Seo title="Site Map"></Seo>;
