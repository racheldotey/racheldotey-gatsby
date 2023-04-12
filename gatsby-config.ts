import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    author: {
      name: 'Rachel Dotey',
      bio: 'Website And Software Development',
      phone: '607-386-5872',
      email: 'hello@racheldotey.com',
    },
    header: {
      tagline: 'Web & App Development',
      title: 'RachelDotey.ninja',
      url: 'https://racheldotey.ninja', // No trailing slash
      description:
        'Hi, my name is Rachel! I build interactive websites and software for clients all over the world.',
      keywords:
        'Responsive Web Design, Progressive Web Apps (PWA), Single-page Applications (SPA), Web Accessibility (WCAG 2.1), User Experience (UX), Search Engine Optimization (SEO), Web Security, Microservices, Serverless Architecture, Cloud Computing, JavaScript Frameworks (React, Angular, Vue), Web Components, Headless CMS, Web Performance Optimization (WPO), Artificial Intelligence (AI) and Machine Learning (ML) in web development, Blockchain technology in web development, Chatbots and voice assistants, Web animations',
      subject: 'Full Stack Node.JS Application Development',
    },
    image: {
      url: 'https://racheldotey.ninja/images/rachel-dotey-web-and-software-developer.jpg', // Path to your image you placed in the 'static' folder
      width: 1750,
      height: 1312,
      alt: 'Web design and software development by Rachel Dotey.',
    },
    siteTitle: 'RachelDotey.ninja',
    siteUrl: 'https://racheldotey.ninja', // No trailing slash
    social: {
      github: 'https://github.com/racheldotey',
      linkedin: 'https://www.linkedin.com/in/racheldotey/',
      twitter: '@RaeDeveloper',
      instagram: 'https://www.instagram.com/racheldotey/',
      facebook: 'https://www.facebook.com/racheldotey/',
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: '/rss.xml',
            title: 'Gatsby Starter Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-32666435-1'],
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rachel Dotey Developer',
        short_name: 'software-developer',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'dominantColor',
          quality: 100,
          // breakpoints: [750, 1080, 1366, 1920],
          // backgroundColor: "transparent",
          // blurredOptions: {},
          // jpgOptions: {},
          // pngOptions: {},
          // webpOptions: {},
          // avifOptions: {},
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    'gatsby-transformer-sharp',
  ],
};

export default config;
