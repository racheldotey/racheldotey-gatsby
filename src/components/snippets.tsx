import * as React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

export const LocationParagraph: React.FC = () => {
  return (
    <p>
      <span>Working remotely across the United States.</span>{' '}
      <span>Based in New York's Capital Region.</span>
    </p>
  );
};

export const TelephoneLink: React.FC = () => {
  const { author } = useSiteMetadata();
  const cta =
    'Ready to take your project to the next level? Call me now to discuss your software development needs and get started.';
  
  return (
    <a title={cta} href={`tel:${author.phone}`}>
      {author.phone}
    </a>
  );
};

export const EmailLink: React.FC = () => {
  const { author } = useSiteMetadata();
   const cta =
     "Let's build something great together! Contact me now to discuss your software development needs.";

  return (
    <Link title={cta} to="/contact">
      {author.email}
    </Link>
  );
};
