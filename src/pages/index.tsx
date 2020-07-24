// Gatsby supports TypeScript natively!
import React from "react"
import { graphql, navigate, Link } from "gatsby"
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
import Social from "../components/Social"
import SkillIcons from "../components/SkillIcons"

import Steam from "../draw/steam/steam_1.svg"
import Cup from "../draw/cup.svg"

const Index = ({ data }) => {
  React.useEffect(
    () =>
      console.log(
        ` _____________________________________________________________________
  
                                                        
        _|    _|    _|_|    _|      _|  _|_|_|_|        _|_|    
        _|    _|  _|    _|  _|      _|  _|            _|    _|  
        _|_|_|_|  _|_|_|_|  _|      _|  _|_|_|        _|_|_|_|  
        _|    _|  _|    _|    _|  _|    _|            _|    _|  
        _|    _|  _|    _|      _|      _|_|_|_|      _|    _|  
                                                                
                                                                
                                                
        _|      _|  _|_|_|    _|_|_|  _|_|_|_|  
        _|_|    _|    _|    _|        _|        
        _|  _|  _|    _|    _|        _|_|_|    
        _|    _|_|    _|    _|        _|        
        _|      _|  _|_|_|    _|_|_|  _|_|_|_|  
                                                
                                                
                                            
        _|_|_|      _|_|    _|      _|  _|  
        _|    _|  _|    _|    _|  _|    _|  
        _|    _|  _|_|_|_|      _|      _|  
        _|    _|  _|    _|      _|          
        _|_|_|    _|    _|      _|      _|  



        WEBSITE DESIGNED AND BUILT BY ALEJANDRO ASPINWALL  _______________________________________________


                
  `
      ),
    []
  )
  const {
    allMarkdownRemark: {
      nodes: [fileAbsolutePath],
    },
  } = data

  const content = fileAbsolutePath.frontmatter
  const { title, subtitle, action } = content.mainpitch

  const getTop = () => {
    return (
      <div>
        {makeClouds(20, 3)}
        <div className="marquee">
          <Hero invert={true}>{highlightWords(title)}</Hero>
          <Social />
          <HeroP>{subtitle}</HeroP>
        </div>
      </div>
    )
  }

  const getBio = bio => {
    const { title, features, image } = bio

    return (
      <Bio>
        <div id="bioContainer">
          <h1 style={{ height: "3rem" }}>{highlightWords(title)}</h1>
          <ImageFull id="bioImage">
            <img src={image} />
          </ImageFull>

          <div id="bioText">
            {/* TODO Add skill icons */}
            <SkillIcons />

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
      console.log(image)
      return (
        <Projects>
          <div className="latest" style={{ gridArea: "top" }}>
            LATEST WORK
          </div>
          <h1 style={{ gridArea: "title" }}>{highlightWords(title)}</h1>
          <Tags>
            {tags.map(li => (
              <li>{li}</li>
            ))}
          </Tags>
          <p style={{ gridArea: "text" }}>{body}</p>
          <Button style={{ gridArea: "button" }}>
            {slidingButton(action, link)}
          </Button>
          <div
            tabIndex={0}
            className="projectImage"
            onKeyDown={e => {
              if (e.keyCode === 13) navigate(link)
            }}
            onClick={() => navigate(link)}
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
        <Hero>{highlightWords(title)}</Hero>
        <div className="cup">
          <Steam />
          <Cup />
        </div>
        <Button style={{ gridArea: "button" }}>
          {slidingButton(
            action,
            "/",
            () => (window.location.href = "mailto:aaspinwall@gmail.com")
          )}
        </Button>
      </div>
    )
  }

  const highlightWords = title => {
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

  const slidingButton = (action: string, link: string = "/", alt?) => {
    return [0, 0].map((e, i) =>
      alt ? (
        <div tabIndex={i === 0 ? 0 : -1} onClick={alt}>
          {action}
        </div>
      ) : (
        <Link tabIndex={i === 0 ? 0 : -1} to={link}>
          {action}
        </Link>
      )
    )
  }

  const makeClouds = (cloudCount: number, mult: number = 1) => {
    const cloudArray = [...Array(cloudCount).keys()]
    return cloudArray.map(cloudComponent => {
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
      <Section invert={true}>{getTop()}</Section>
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
