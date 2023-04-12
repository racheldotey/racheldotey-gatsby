import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const FollowMySocials: React.FC = () => {
  return (
    <div className="follow-my-social inline-images">
      <a
        title="Fork my Github"
        href="https://github.com/racheldotey"
        target="_blank"
        rel="noopener noreferrer"
        className="pe-2"
      >
        <StaticImage
          src="../images/icon_social_github.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          height={32}
          width={32}
        />
      </a>
      <a
        title="View my Instagram"
        href="https://instagram.com/dancingrabbit"
        target="_blank"
        rel="noopener noreferrer"
        className="pe-2"
      >
        <StaticImage
          src="../images/icon_social_instagram.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          height={32}
          width={32}
        />
      </a>
      <a
        title="Follow me on Twitter"
        href="https://twitter.com/RaeDeveloper"
        target="_blank"
        rel="noopener noreferrer"
        className="pe-2"
      >
        <StaticImage
          src="../images/icon_social_twitter.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          height={32}
          width={32}
        />
      </a>
      <a
        title="View my Facebook"
        href="https://www.facebook.com/rachelldotey"
        target="_blank"
        rel="noopener noreferrer"
        className="pe-2"
      >
        <StaticImage
          src="../images/icon_social_facebook.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          height={32}
          width={32}
        />
      </a>
      <a
        title="Read my LinkedIn"
        href="https://www.linkedin.com/in/racheldotey"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../images/icon_social_linkedin.png"
          alt="This is the developer you are looking for..."
          placeholder="blurred"
          layout="fixed"
          height={32}
          width={32}
        />
      </a>
    </div>
  );
};

export default FollowMySocials;
