import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useSiteMetadata from '../hooks/use-site-metadata';
import Layout from '../components/layout';
import CallOutBanner from '../components/banner-callout';
import SocialButtons from '../components/follow-my-social';
import Seo from '../components/seo';

const AboutTextSection: React.FC = () => {
  return (
    <>
      <p>
        Hello! I'm Rachel, a{' '}
        <a target="_blank" href="/humans.txt" title="humans.txt">
          carbon-based life form
        </a>{' '}
        who has been building websites since the{' '}
        <a
          target="_blank"
          href="https://www.webhamster.com/"
          title="The Hamster Dance"
        >
          90s
        </a>
        . That's right, I am one of the internet's original{' '}
        <a
          target="_blank"
          href="https://thehistoryoftheweb.com/postscript/what-happened-to-the-webmaster/"
          title="What Happened to the Webmaster - The History of the Web"
        >
          webmasters
        </a>
        . My skills were forged in the arena of{' '}
        <a
          target="_blank"
          href="https://wiki.archiveteam.org/index.php/GeoCities"
          title="GeoCities - Archiveteam"
        >
          GeoCities
        </a>{' '}
        before{' '}
        <a
          target="_blank"
          href="https://content.time.com/time/business/article/0,8599,1936645,00.html"
          title="Yahoo! Pulls Plug on GeoCities, Erases Internet History - TIME"
        >
          the fall
        </a>{' '}
        of the ancient digital world. My first version of JavaScript was v1.5 on{' '}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Netscape_Navigator"
          title="Netscape Navigator - Wikipedia"
        >
          Netscape Navigator
        </a>{' '}
        circa 1999.
      </p>
      <p>
        Since then, I have evolved into a full-stack software developer with
        expertise in a wide range of technologies. My skills span across
        front-end and back-end software development, project management, search
        engine optimization, and graphic design. Additionally, I have experience
        working with the latest JavaScript frameworks such as React, Angular,
        and Vue.
      </p>
      <p>
        I specialize in building responsive and accessible websites that provide
        a seamless user experience. I use Node.js to develop single-page
        applications (SPA) and progressive web apps (PWA), as well as
        implementing web components and animations.
      </p>
      <p>
        My goal is to provide the best possible results for my clients by using
        the most suitable tools and frameworks for each project.
      </p>
    </>
  );
};

const ImageSection: React.FC = () => {
  const { author } = useSiteMetadata();
  const { phone, email } = author;

  const phoneCTA =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  const emailCTA =
    "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <>
      <div className="profile-image">
        <StaticImage
          src="../images/picture-square.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={236}
        />
      </div>
      <p>
        <a title={phoneCTA} href={`tel:${phone}`}>
          {phone}
        </a>
        <br />
        <Link title={emailCTA} to="/contact">
          {email}
        </Link>
      </p>
      <SocialButtons />
    </>
  );
};

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container className="my-5">
        <Row className="justify-content-md-center">
          <Col md={12} lg={10} className="text-center page-intro">
            <h1 className="title">About Me</h1>
            <p className="lead">Webmaster from the 90's</p>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col sm={12} md={6}>
            <AboutTextSection />
          </Col>
          <Col sm={12} md={6} className="text-center">
            <ImageSection />
          </Col>
        </Row>
      </Container>
      <CallOutBanner />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title="About the Developer"></Seo>;
