import { useStaticQuery, graphql } from 'gatsby';

export const usePageHead = (): string => {
  const { site } = useStaticQuery(
    graphql`
      query PageMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
            }
            keywords
            description
            titleTemplate
            defaultTitle
          }
        }
      }
    `
  );

  return site.siteMetadata;
};

export default usePageHead;
