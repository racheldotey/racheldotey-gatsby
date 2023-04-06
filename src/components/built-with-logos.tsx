import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default () => {
  return (
    <>
      <a
        title="HTML5 is the latest evolution of the standard that defines HTML."
        href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_html5.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <a
        title="CSS3 is the latest evolution of the Cascading Style Sheets language."
        href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_css3.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <a
        title="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
        href="https://sass-lang.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_sass.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <br className="d-block d-sm-none" />
      <a
        title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
        href="https://nodejs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_nodejs.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <a
        title="React.js is a JavaScript library for building user interfaces."
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_reactjs.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <a
        title="Gatsby.js is a free and open source framework based on React that helps developers build blazing fast websites and apps."
        href="https://gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_gatsbyjs.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <a
        title="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data."
        href="https://graphql.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_graphql.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
      <a
        title="This bad mama jama website is hosted on Netlify"
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_netlify.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          width={56}
        />
      </a>
    </>
  );
};
