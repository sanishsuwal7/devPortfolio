// Gatsby supports TypeScript natively!
import React, { useEffect } from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Section, Hero } from "../styles/components"

import Layout from "../templates/layout"

const Index = ({ data }) => {
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data

  const content = fileAbsolutePath.frontmatter
  const { title, subtitle, action } = content.mainpitch

  //console.log(content.projects)

  const getBio = bio => {
    const { title, features } = bio
    console.log(features)
    return (
      <div>
        <h1>{title}</h1>
        {features.map(feature => {
          console.log(feature)
          return (
            <div>
              <h3>{feature.header}</h3>
              <p>{feature.body}</p>
            </div>
          )
        })}
      </div>
    )
  }
  const getProjects = projects => {
    return projects.map(project => {
      const { action, body, link, tags, title, image } = project
      return (
        <div>
          <h1>{title}</h1>
          <ul>
            {tags.map(li => (
              <li>{li}</li>
            ))}
          </ul>
          <p>{body}</p>
          <a href={link}>
            <button>{action}</button>
          </a>
          <img src={image} />
        </div>
      )
    })
  }

  return (
    <Layout>
      <Section>
        <Hero>{title}</Hero>
        <p>{subtitle}</p>
        <button>{action}</button>
      </Section>
      <Section>{getBio(content.bio)}</Section>
      <Section>{getProjects(content.projects)}</Section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/landing/" } }) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
          mainpitch {
            title
            subtitle
            action
          }
          projects {
            action
            body
            link
            tags
            title
            image
          }
          bio {
            title
            features {
              header
              body
            }
          }
        }
      }
    }
  }
`
