// Gatsby supports TypeScript natively!
import React, { useEffect } from "react"
import { PageProps, Link, graphql } from "gatsby"
import {
  Section,
  Hero,
  Tags,
  Button,
  HeroP,
  ImageFull,
  Bio,
  Projects,
} from "../styles/components"

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
    const { title, features, image } = bio
    console.log(bio)

    return (
      <Bio>
        <div id="bioContainer">
          <h1>{formatTitle(title)}</h1>
          <ImageFull id="bioImage">
            <img src={image} />
          </ImageFull>
          <div id="bioText">
            {features.map(feature => {
              return (
                <div>
                  <h3>{feature.header}</h3>
                  <p>{feature.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Bio>
    )
  }
  const getProjects = projects => {
    return projects.map((project, i) => {
      const { action, body, link, tags, title, image } = project
      return (
        <Projects>
          <h1 style={{ gridArea: "title" }}>{formatTitle(title)}</h1>
          <Tags>
            {tags.map(li => (
              <li>{li}</li>
            ))}
          </Tags>
          <p style={{ gridArea: "text" }}>{body}</p>
          <a style={{ gridArea: "button" }} href={link}>
            <Button>
              <div>{action}</div>
              <div></div>
            </Button>
          </a>
          <img style={{ gridArea: "image" }} src={image} />
        </Projects>
      )
    })
  }

  const getContact = contact => {
    const { action, title } = contact
    return (
      <div>
        <Hero>{formatTitle(title)}</Hero>
        <Button>
          <div>{action}</div>
          <div></div>
        </Button>
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
      <Section invert={true} top={true}>
        <Hero invert={true}>{formatTitle(title)}</Hero>
        <HeroP>{subtitle}</HeroP>
        <Button invert={true}>
          <div>{action}</div>
          <div></div>
        </Button>
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
            image
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
