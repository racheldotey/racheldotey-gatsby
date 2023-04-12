import { useStaticQuery, graphql } from 'gatsby';

export type AuthorDataType = {
  bio: string;
  name: string;
  email: string;
  phone: string;
};

export type HeaderDataType = {
  tagline: string;
  title: string;
  url: string;
  description: string;
  keywords: string;
  subject: string;
};

export type SocialImageDataType = {
  alt: string;
  url: string;
  height: number;
  width: number;
};

export type SocialDataType = {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
};

export type SiteMetadataType = {
  author: AuthorDataType;
  header: HeaderDataType;
  social: SocialDataType;
  image: SocialImageDataType;
};

export const useSiteMetadata = (): SiteMetadataType => {
  const { site } = useStaticQuery(
    graphql`
      query getAllSiteMetaDataMwaHaHa {
        site {
          siteMetadata {
            author {
              bio
              name
              email
              phone
            }
            header {
              description
              keywords
              subject
              tagline
              title
              url
            }
            image {
              alt
              url
              height
              width
            }
            social {
              github
              linkedin
              twitter
              instagram
              facebook
            }
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
