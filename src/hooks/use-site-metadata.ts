import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            tagline
            phone
            email
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
