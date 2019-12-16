// const fs = require("fs")

// const envConfig = dotenv.parse(fs.readFileSync(`.env.development`))
// for (var k in envConfig) {
//   process.env[k] = envConfig[k]
// }
// let env = process.env.NODE_ENV || "development"
// require("dotenv").config({ path: `./.env.${env}` })
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const dotenv = require("dotenv").config({ silent: true })
if (process.env.NODE_ENV !== "test" && dotenv.error) throw dotenv.error

module.exports = {
  siteMetadata: {
    title: `Happy Coffee`,
    description: `Freshly brewed Nigerian grown coffee`,
    author: `@Udcodes`,
  },
  plugins: [
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //done!
  ],
}
