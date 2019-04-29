const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Your title`,
    author: `Author name`,
    description: `Your description`,
    role: `Your role`,
    links: {
      github: `https://github.com/youraccount`,
      linkedIn: 'https://linkedin.com/in/youraccount/',
      email: 'your@email.com'
    },
    skills: [{
      'label': 'Front end',
      'contents': 'Javascript, ES6, React, Gatsby, Grunt, Webpack, CSS, SASS'
    }]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.js')
        },
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve:
              `gatsby-remark-prismjs`,
          },
          { resolve:
              `gatsby-remark-copy-linked-files`,
          },
          { resolve:
              `gatsby-remark-smartypants`,
          }
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ],
}