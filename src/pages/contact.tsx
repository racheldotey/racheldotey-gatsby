import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';
import ContactBanner from '../components/banner-contact';
import Seo from '../components/seo';

const ContactPage: React.FC<PageProps> = () => (
  <Layout>
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={12} lg={10} className="text-center page-intro">
          <h1 className="title">Would you like to know more?</h1>
          <p className="lead">
            Are you interested in learning about how I can improve your customer
            experience? Fill out this form and I will get right back to you for
            a free phone consultation.
          </p>
        </Col>
      </Row>
    </Container>
    <div className="pb-5">
      <ContactBanner />
    </div>
    <hr />
  </Layout>
);

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Contact Me"></Seo>;
