import React, { useEffect } from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Section, Markdown } from "../styles/components"
import { graphql } from "gatsby"
import Icon from "../components/Icon"

export const Project = ({ data, images }) => {
  const { title, details, description, html } = data
  const { stack, code, live, type } = details

  return (
    <Section top={true}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      {/* <Icon speed={"4s"} /> */}
      <div id="projectDetails">
        <div>
          <h3>Type</h3>
          <div>{type}</div>
        </div>
        <div>
          <h3>Stack</h3>
          <div>
            {stack.split(" ").map(e => (
              <div>{e}</div>
            ))}
          </div>
        </div>
        {code ? (
          <div>
            <h3>Code</h3>
            <a href={code}>Github</a>
          </div>
        ) : null}
        <div>
          <h3>Live</h3>
          <a href={live} target={"blank"}>
            <a href={live}>Site</a>
          </a>
        </div>
      </div>

      <Markdown
        className="projectBody"
        dangerouslySetInnerHTML={{ __html: html }}
      ></Markdown>
    </Section>
  )
}

const ProjectPage = ({ data }) => {
  const {
    markdownRemark: { html, frontmatter },
    imageSharp,
  } = data

  const { title, details, description } = frontmatter

  return (
    <Layout>
      <Project
        data={{ title, details, description, html }}
        images={imageSharp}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      frontmatter {
        title
        internal
        description
        details {
          code
          live
          stack
          type
        }
      }
    }
  }
`
