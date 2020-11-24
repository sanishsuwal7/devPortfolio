import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({
  description,
  lang,
  meta,
  title,
  thumb = "logo.png",
  keywords = "javascript, css, html, gatsby, nextjs",
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title
  const metaDescription = description || site.siteMetadata.description
  const metaTags = keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `keywords`,
          content: metaTags,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          itemprop: "image",
          content: `https://www.aaspinwall.com/img/${thumb}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: `https://www.aaspinwall.com/img/${thumb}`,
        },
        {
          name: `twitter:image:alt`,
          content: `Alejandro Aspinwall Logo`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "google-site-verification",
          content: "We7BOl_CZVyDeFTxQEtsewDNNE2nwsw5rJi7Kf1s4JA",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
