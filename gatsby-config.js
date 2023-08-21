/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `helx-marketing-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-PEWT74G972"
      }
    }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/helxLogo.svg`
      }
    },
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,400,500,600`,
          `montserrat\:500,600,700,800,900`
        ],
        display: 'swap'
      }
    }
  ]
};