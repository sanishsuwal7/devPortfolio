// Gatsby supports TypeScript natively!
import React from "react"
import { graphql, navigate, Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import {
  Section,
  Hero,
  Tags,
  Button,
  HeroP,
  ImageFull,
  Bio,
  Projects,
  SectionTag,
  Paragraph,
  Header,
  CupContainer,
} from "../styles/components"

import styled from "styled-components"

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
            <Img
              fluid={image.childImageSharp.fluid}
              style={{ gridArea: "image" }}
            />
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
            <ReadMore>
              <Link to="/about">Read more...</Link>
            </ReadMore>
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
          <SectionTag className="latest" style={{ gridArea: "top" }}>
            LATEST WORK
          </SectionTag>
          <Header style={{ gridArea: "title" }}>{highlightWords(title)}</Header>
          <Tags>
            {tags.map(li => (
              <li>{li}</li>
            ))}
          </Tags>
          <Paragraph style={{ gridArea: "text" }}>{body}</Paragraph>
          <Button style={{ gridArea: "button" }}>
            {slidingButton(action, link)}
          </Button>
          <ProjectImage style={{ gridArea: "image" }}>
            <Link
              to={link}
              onKeyDown={e => {
                if (e.keyCode === 13) navigate(link)
              }}
            >
              <Img
                fluid={image.childImageSharp.fluid}
                className="imageFluidContainer"
                /* imgStyle={{ borderRadius: "40px" }} */
              />
            </Link>
          </ProjectImage>
        </Projects>
      )
    })
  }

  const ProjectImage = styled.div`
    grid-area: image;

    .imageFluidContainer {
      max-width: 500px;
      border-radius: 40px;
      transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
      :hover,
      :focus {
        transform: translate(0, -2%);
        box-shadow: 0px 40px 8px -10px grey;
        cursor: pointer;
      }
    }
  `
  const ReadMore = styled.div`
    font-family: Muli;
    transition: 0.8s ease-in-out;

    :hover {
      font-weight: bold;
      filter: brightness(0.8);
    }
  `

  const getContact = contact => {
    const { action, title } = contact
    return (
      <div id="contactBox">
        <Hero>{highlightWords(title)}</Hero>
        <CupContainer className="cup">
          <Steam />
          <Cup />
        </CupContainer>
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
          top={`${r(12, 90)}vh`}
          pulse={`${r(7, 12)}s`}
          size={`${r(0.5, 7)}rem`}
          offset={`${r(-10, 90)}vw`}
        />
      )
    })
  }

  return (
    <Layout invert={true}>
      <SEO />
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
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          bio {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
