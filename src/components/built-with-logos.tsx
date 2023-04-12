import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const BuiltWithLogos: React.FC = () => {
  return (
    <div className="built-with-badges inline-images">
      <a
        title="HTML5 is the latest evolution of the standard that defines HTML."
        href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_dev_html5.png"
          alt="HTML5 is the latest evolution of the standard that defines HTML."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="CSS3 is the latest evolution of the Cascading Style Sheets language."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="React.js is a JavaScript library for building user interfaces."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="Gatsby.js is a free and open source framework based on React that helps developers build blazing fast websites and apps."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data."
          placeholder="blurred"
          layout="fixed"
          height={56}
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
          alt="This bad mama jama website is hosted on Netlify"
          placeholder="blurred"
          layout="fixed"
          height={56}
          width={56}
        />
      </a>
    </div>
  );
};

export default BuiltWithLogos;