import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Section } from "../styles/components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const Project = ({ data, images }) => {
  const { title, details, description, html } = data
  const { stack, code, live, type } = details

  console.log(details)
  console.log(images)
  return (
    <Section top={true}>
      <h1>{title}</h1>
      <p>{description}</p>
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
            <div>{code}</div>
          </div>
        ) : null}
        <div>
          <h3>Live</h3>
          <a href={live} target={"blank"}>
            <h3>View site</h3>
          </a>
        </div>
      </div>
      <div className="images">
        <img src={"/img/placeholder.png"} alt={"projectImage"}></img>
        <img src={"/img/placeholder.gif"} alt={"projectImage"}></img>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
