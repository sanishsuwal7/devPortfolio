// Gatsby supports TypeScript natively!
import React from "react"
import { graphql, navigate } from "gatsby"
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

import Clouds from "../components/Clouds"
import Layout from "../templates/layout"

import Steam from "../draw/steam/steam_1.svg"
import Cup from "../draw/cup.svg"

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

    return (
      <Bio>
        <div id="bioContainer">
          <h1 style={{ height: "3rem" }}>{formatTitle(title)}</h1>
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
          <div className="latest" style={{ gridArea: "top" }}>
            LATEST WORK
          </div>
          <h1 style={{ gridArea: "title" }}>{formatTitle(title)}</h1>
          <Tags>
            {tags.map(li => (
              <li>{li}</li>
            ))}
          </Tags>
          <p style={{ gridArea: "text" }}>{body}</p>
          <Button tabIndex={"0"} style={{ gridArea: "button" }}>
            {getButton(action, link)}
          </Button>
          <div
            tabIndex="0"
            onClick={() => window.open(link)}
            onKeyDown={e => {
              if (e.keyCode === 13) window.open(link)
            }}
            className="projectImage"
            style={{ gridArea: "image" }}
          >
            <img src={image} />
          </div>
        </Projects>
      )
    })
  }

  const getContact = contact => {
    const { action, title } = contact
    return (
      <div id="contactBox">
        <Hero>{formatTitle(title)}</Hero>
        <div className="cup">
          <Steam />
          <Cup />
        </div>
        <Button style={{ gridArea: "button" }}>
          {getButton(
            action,
            "/",
            () => (window.location.href = "mailto:aaspinwall@gmail.com")
          )}
        </Button>
      </div>
    )
  }

  const formatTitle = title => {
    return title.split(" ").map(el => {
      if (el.includes("**")) {
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

  const getButton = (action: string, link: string = "/", alt?) => {
    return [0, 0].map(e =>
      alt ? (
        <div onClick={alt}>{action}</div>
      ) : (
        <div onClick={() => window.open(link)}>{action}</div>
      )
    )
  }

  const makeClouds = (cloudCount: number, mult: number = 1) => {
    const cloudArray = [...Array(cloudCount).keys()]

    return cloudArray.map(cloud => {
      function r(min, max) {
        const rand = Math.random() * (max - min) + min
        return rand.toString()
      }
      return (
        <Clouds
          roll={`${r(120, 300)}s`}
          top={`${r(3, 90)}vh`}
          pulse={`${r(7, 12)}s`}
          size={`${r(0.5, 7)}rem`}
          offset={`${r(-10, 90)}vw`}
        />
      )
    })
  }

  return (
    <Layout invert={true}>
      {makeClouds(20, 3)}
      <Section invert={true}>
        <div className="marquee">
          <Hero invert={true}>{formatTitle(title)}</Hero>
          {/* <HeroP>{subtitle}</HeroP> */}
        </div>
      </Section>
      <Section id="bio">{getBio(content.bio)}</Section>
      <Section id="projects">{getProjects(content.projects)}</Section>
      <Section id="contact">{getContact(content.contact)}</Section>
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
