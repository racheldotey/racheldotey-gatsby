module.exports = {
  siteMetadata: {
    author: "Rachel Dotey",
    title: "Rachel Dotey",
    titleTemplate: "%s | Websites and Software by Rachel Dotey",
    description:
      "Software development, interactive websites and local search engine marketing.",
    url: "https://racheldotey.com",   // No trailing slash
    image: "/images/snape.jpg",       // Path to your image you placed in the 'static' folder
    twitterUsername: "@RaeDeveloper",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Crimson Text`,
            variants: [`400`, `600`]
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32666435-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
