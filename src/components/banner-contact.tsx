import * as React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import useSiteMetadata from '../hooks/use-site-metadata';
import ContactForm from '../components/form-contact';
import SocialButtons from './follow-my-social';

const LocationColumn = () => {
  const { title, tagline, phone, email } = useSiteMetadata();

  const phoneCTA =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  const emailCTA =
    "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <div className="text-center">
      <div>
        <p className="h4">Follow Me At</p>
        <SocialButtons />
      </div>
      <hr />
      <div className="py-3">
        <p className="h4">Connect with Rachel</p>
        <p>
          <a title={phoneCTA} href={`tel:${phone}`}>
            {phone}
          </a>
          <br />
          <a title={emailCTA} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
      <hr />
      <div>
        <p className="h4">Location</p>
        <p>
          Working with clients across New England.
          <br />
          Based in Burlington Vermont.
        </p>
      </div>
    </div>
  );
};

const ContactBanner = () => (
  <section className="contact-banner">
    <a href="#contact"></a>
    <Container className="d-none d-md-block">
      <Row className="justify-content-md-center">
        <Col
          sm={{ order: 1, span: 12 }}
          md={5}
          lg={5}
          xl={5}
          className="text-center"
        >
          {LocationColumn()}
        </Col>
        <Col sm={{ order: 2, span: 12 }} md={7} lg={6} xl={5}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    <div className="d-block d-md-none">
      <div className="smallview-contact-banner py-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-md-center py-5">
          <Col>{LocationColumn()}</Col>
        </Row>
      </Container>
    </div>
  </section>
);

export default ContactBanner;
