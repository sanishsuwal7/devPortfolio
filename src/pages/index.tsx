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

  const getBio = bio => {
    const { title, features } = bio
    console.log(bio)

    return (
      <div>
        <h1>{formatTitle(title)}</h1>
        {features.map(feature => {
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
          <h1>{formatTitle(title)}</h1>
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

  const getContact = contact => {
    const { action, title } = contact
    return (
      <div>
        <Hero>{formatTitle(title)}</Hero>
        <button>{action}</button>
      </div>
    )
  }

  const formatTitle = title => {
    return title.split(" ").map(el => {
      if (el.includes("**")) {
        console.log(el)
        const reg = /\*/g
        return (
          <div className="highlight">
            <div>{el.replace(reg, "")}</div>
            <div></div>
          </div>
        )
      } else return <div>{el}</div>
    })
  }

  return (
    <Layout>
      <Section>
        <Hero>{formatTitle(title)}</Hero>
        <p>{subtitle}</p>
        <button>{action}</button>
      </Section>
      <Section>{getBio(content.bio)}</Section>
      <Section>{getProjects(content.projects)}</Section>
      <Section>{getContact(content.contact)}</Section>
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
          contact {
            action
            title
          }
        }
      }
    }
  }
`
