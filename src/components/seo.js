/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

/* const SEO = ({ description, lang, meta, title }) => { */
const SEO = ({ lang, meta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            lang
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const {
    siteMetadata: { title, description },
  } = site

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | Developer`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          name: `twitter:creator`,
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
    >
      <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>

      <script>
        {`  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCKqDirqF99M7jJKo-uNXVJ7DQwdliKuFQ",
    authDomain: "devportfolio-314b9.firebaseapp.com",
    databaseURL: "https://devportfolio-314b9.firebaseio.com",
    projectId: "devportfolio-314b9",
    storageBucket: "devportfolio-314b9.appspot.com",
    messagingSenderId: "854072268663",
    appId: "1:854072268663:web:793bf548f01ae12fe9f372",
    measurementId: "G-KBD98ZWTNM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();`}
      </script>
    </Helmet>
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
