import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    author: "Rachel Dotey",
    title: `RachelDotey.ninja`,
    titleTemplate: "Web Apps by Rachel - %s",
    defaultTitle: "Website And Software Development",
    description: "Hi, my name is Rachel! I build interactive websites and software for clients all over the world.",
    keywords: "Vermont, Burlington, Web design, Web development, Marketing, Social Media, Software development, Programming, Full stack software developer",
    siteUrl: "https://racheldotey.ninja",   // No trailing slash
    image: {
      url: "https://racheldotey.ninja/images/rachel-dotey-web-and-software-developer.jpg", // Path to your image you placed in the 'static' folder
      width: 1750,
      height: 1312,
      alt: "Web design and software development by Rachel Dotey.",
    },
    twitterUsername: "@RaeDeveloper"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

export default config;
