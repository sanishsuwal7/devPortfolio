import React from "react"
import Layout from "../../templates/layout"
import PropTypes from "prop-types"
import {
  Hero as H,
  Section as S,
  Markdown,
  HeroP,
} from "../../styles/components"
import ReadTime from "../../components/ReadTime"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../../components/ui/button"

import Tweet from "../../components/ui/screens/"
import ReactWordcloud from "react-wordcloud"
import twImg from "../../../content/assets/images/tweet.png"

import { positive, negative, all } from "../../utils/data"
import msglen from "../../../content/assets/svg/msglen.svg"
import up from "lodash/capitalize"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale.css"

const Section = styled(S)`
  max-width: 600px;
  h2 {
    font-family: Montserrat;
    font-weight: bold;
  }
`
const Hero = styled(H)`
  font-size: 2.3rem !important;
`
const Sub = styled(Hero)`
  font-size: 1.2rem;
  font-weight: bold;
`

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "Montserrat",
  fontSizes: [8, 60],
  fontStyle: "normal",
  tooltipOptions: { animateFill: "green" },
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
}

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const P = styled.p``

const Graph = styled.div`
  position: relative;
  font-family: Montserrat;
  .x,
  .y {
    position: absolute;
  }
  .x {
    bottom: 5%;
    left: 50%;
  }
  .y {
    transform: rotate(-90deg);
    left: 0;
    top: 50%;
  }
`

const Note = styled(HeroP)`
  padding: 0;
  margin: 1rem 0;
`

const size = [300, 500]

const callbacks = {
  getWordColor: word => (word.value > 50 ? "#ff715b" : "#FFA799"),
  onWordClick: (e, i) => console.log(e, i),
  getWordTooltip: word => ` ${word.value}`,

  /* `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`, */
}

const Prof = ({ data }) => {
  const content = data.allMarkdownRemark.nodes
  const CONTENT = {}
  content.forEach(el => {
    if (el.frontmatter.name === "full") {
      CONTENT["timeToRead"] = el.timeToRead
      return
    }
    CONTENT[el.frontmatter.name] = el.html
  })
  const { intro, timeToRead, tweet, words, sentiment, time, nerd } = CONTENT

  console.log(CONTENT)

  return (
    <Layout>
      <SEO title="Prof G Data analysis" />
      <Section>
        <Hero>Prof G's Brand Strategy Sprint - About The Sprinters </Hero>
        <Note>October 29, 2020</Note>
        <Note>{timeToRead} minute read</Note>
        {/* <Tweet /> */}
        <div dangerouslySetInnerHTML={{ __html: intro }}></div>

        <Graph className="center">
          <span className="x">Words</span>
          <span className="y">Sprinters</span>
          <img src={msglen} />
        </Graph>
        <div dangerouslySetInnerHTML={{ __html: tweet }}></div>

        <div className="center">
          <img src={twImg} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: words }}></div>

        <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud
            callbacks={{
              onWordClick: callbacks.onWordClick,
              getWordTooltip: callbacks.getWordTooltip,
            }}
            style={resizeStyle}
            defaultSize={{
              width: 600,
              height: 800,
            }}
            options={{
              colors: ["#ff6047ff", "#ff715bff", "#156064ff", "#000000ff"],
              enableTooltip: true,
              deterministic: true,
              fontFamily: "Montserrat",
              fontSizes: [30, 80],
              fontStyle: "normal",
              fontWeight: "normal",
              padding: 2,
              rotations: 1,
              rotationAngles: [0, 90],

              spiral: "archimedean",
              transitionDuration: 1000,
            }}
            words={all}
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: sentiment }}></div>
        <div dangerouslySetInnerHTML={{ __html: nerd }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            maxWidth: "500px",
            flexWrap: "wrap",
          }}
        >
          <ReactWordcloud
            callbacks={{
              ...callbacks,
              getWordColor: word => (word.value > 5 ? "black" : "grey"),
            }}
            options={options}
            size={size}
            words={negative}
          />

          <ReactWordcloud
            callbacks={callbacks}
            options={options}
            size={size}
            words={positive}
          />
        </div>
        <Note>Hover/tap to see how many times each word occurred.</Note>
        <div dangerouslySetInnerHTML={{ __html: time }}></div>
      </Section>
    </Layout>
  )
}

export default Prof

export const pageQuery = graphql`
  query q {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "custom-blog" } } }
    ) {
      nodes {
        html
        frontmatter {
          name
        }
        timeToRead
      }
    }
  }
`
