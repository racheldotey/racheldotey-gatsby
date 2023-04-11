import { useStaticQuery, graphql } from 'gatsby';

export type SiteMetadataType = {
  author: {
    name: string,
    bio: string,
  };
  email: string;
  phone: string;
  tagline: string;
  title: string;
};

export const useSiteMetadata = (): SiteMetadataType => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
            }
            email
            phone
            tagline
            title
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
