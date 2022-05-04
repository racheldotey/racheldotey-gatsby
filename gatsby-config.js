module.exports = {
  siteMetadata: {
    author: "Rachel Dotey",
    title: "Rachel Dotey",
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
    twitterUsername: "@RaeDeveloper",
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32666435-1",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
