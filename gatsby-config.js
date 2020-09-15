module.exports = {
  siteMetadata: {
    title: `Alejandro Aspinwall | Developer`,
    lang: "en-US",
    author: {
      name: `Alejandro Aspinwall`,
      summary: `who builds tools to simplify your digital needs.`,
    },
    description: `Development portfolio`,
    siteUrl: `https://alejandroaspinwall.ca/`,
    social: {
      twitter: `aaspinwall`,
    },
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isResettingCSS: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.alejandroaspinwall.ca",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 200,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "img",
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /draw/,
        },
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alejandro Aspinwall Developer`,
        short_name: `Alejandro Aspinwall Developer`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff715b`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
