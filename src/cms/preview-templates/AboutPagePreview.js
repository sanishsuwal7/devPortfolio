import React from "react"
import PropTypes from "prop-types"
import AboutTemplate from "../../templates/about"

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutTemplate
    contentComponent={widgetFor("body")}
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
    hidden={widgetFor("internal")}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
