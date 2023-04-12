/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import * as React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

type SeoProps = {
  children?: JSX.Element;
  description?: string;
  title?: string;
};

export const Seo: React.FC<SeoProps> = ({ description, title, children }) => {
  const data = useSiteMetadata();
  const siteTitle = data.header.title;
  const siteUrl = data.header.url;
  const metaTitle = `${title} | ${siteTitle}`;
  const metaDescription = description || data.header.description;
  const metaKeywords = data.header.keywords;
  const metaSubject = data.header.subject;

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="subject" content={metaSubject} />
      /* Facebook See: https://htmlhead.dev/#facebook-open-graph */
      <meta property="article:author" content="" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="https://example.com/image.jpg" />
      <meta
        property="og:image:alt"
        content="A description of what is in the image (not a caption)"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      /* Twitter See: https://htmlhead.dev/#twitter-card */
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={data?.social?.twitter || ``} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:image" content="https://example.com/image.jpg" />
      <meta
        name="twitter:image:alt"
        content="A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."
      />
      <meta name="geo.region" content="US-NY" />
      <meta name="geo.placename" content="Albany" />
      <link rel="author" href="/humans.txt" />
      {children}
    </>
  );
};

export default Seo;
