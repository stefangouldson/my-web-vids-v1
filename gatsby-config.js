/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `My Web Vids V1`,
    siteUrl: `https://mywebvids.com`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ['/about', '/success']
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
  }]
};