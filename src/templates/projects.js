import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Section, Markdown } from "../styles/components"
import { graphql } from "gatsby"
import ReadTime from "../components/ReadTime"
import Icon from "../components/Icon"
import styled from "styled-components"

export const Project = ({ data }) => {
  const { title, details, description, html, timeToRead } = data
  const { stack, code, live, type } = details

  return (
    <Section top={true}>
      <h1>{title}</h1>
      <ReadTime text={timeToRead} />
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <Icon speed={"4s"} />
      <ProjectDetails>
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
      </ProjectDetails>

      <Markdown
        className="projectBody"
        dangerouslySetInnerHTML={{ __html: html }}
      ></Markdown>
    </Section>
  )
}

const ProjectDetails = styled.div`
  padding-bottom: 2rem;
  > div {
    flex-basis: 20px;
  }
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  h3 {
    margin: 1rem 0 1rem;
    font-family: Inter;
  }
  div {
    font-family: Muli;
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row;
  }
`

const ProjectPage = ({ data }) => {
  const {
    markdownRemark: { html, frontmatter, timeToRead },
  } = data

  const { title, details, description } = frontmatter

  return (
    <Layout>
      <Project data={{ title, details, description, html, timeToRead }} />
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
      timeToRead
      html
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
