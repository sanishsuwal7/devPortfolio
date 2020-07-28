import React from "react"
import Layout from "../templates/layout"
import PropTypes from "prop-types"
import { Hero, Section, Markdown } from "../styles/components"
import ReadTime from "../components/ReadTime"
import { graphql } from "gatsby"
import styled from "styled-components"

export const AboutPageTemplate = ({ title, content }) => {
  const { html, work } = content

  return (
    <Section>
      <Hero>{title}</Hero>

      <ReadTime text={html} />
      {work.map(wrk => (
        <Work>
          <div>image</div>
          <div>
            <h3>{wrk.title}</h3>
            <h4>{wrk.company}</h4>
            <div>{wrk.mission}</div>
            <h4>Tech Stack</h4>
            <ul>
              {wrk.stack.split("**").map(el => (
                <li>{el}</li>
              ))}
            </ul>
            <h4>What I did</h4>
            <div dangerouslySetInnerHTML={{ __html: wrk.did }}></div>
            <h4>What I shipped</h4>
            <div dangerouslySetInnerHTML={{ __html: wrk.shipped }}></div>
          </div>
        </Work>
      ))}
      <Markdown dangerouslySetInnerHTML={{ __html: html }}></Markdown>
    </Section>
  )
}

const Work = styled.div`
  border: 1px grey solid;
  padding: 1rem 2rem 2rem;
  margin: 0;
  font-family: Muli;
  display: grid;
  grid-template-columns: 3rem 1fr;
  ul {
    display: block;
  }
  li {
    list-style: circle;
    margin-left: 2rem;
  }
  h3 {
    margin: 1rem 0;
  }
`

const AboutPage = ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data
  const content = fileAbsolutePath.frontmatter
  const { title, work } = content
  const { html } = fileAbsolutePath

  return (
    <Layout>
      <AboutPageTemplate title={title} content={{ html, work }} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
          internal
          work {
            title
            mission
            company
            stack
            did
            shipped
          }
        }
        html
      }
    }
  }
`
