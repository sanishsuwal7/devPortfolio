import React, { useState, useCallback } from "react"
import Layout from "../../templates/layout"
import { Hero, Note, HeroP, Section } from "../../components/ui/screens/blog"
import Social from "../../components/ui/Social"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import ReactWordcloud from "react-wordcloud"
import twImg from "../../../content/assets/images/tweet.png"

import { positive, negative, all } from "../../utils/data"
import msglen from "../../../content/assets/svg/msglen.svg"
import sentimentPlot from "../../../content/assets/svg/sentiment.svg"
import timePlot from "../../../content/assets/svg/time.svg"
import up from "lodash/capitalize"

import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale.css"

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

  #sprinters {
    left: 0%;
  }
  .x,
  .y {
    position: absolute;
    font-weight: bold;
  }
  .x {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  .y {
    transform: rotate(-90deg) translateY(-50%) translateX(10%);
    left: -10%;
    top: 50%;
  }
  img {
    margin-left: 2rem;
  }
`

const NerdBox = styled.div`
  div:nth-child(1) {
    font-family: Muli;
    color: #ff715b;
    font-weight: bold;
  }
  div:nth-child(2) {
    background: lightgray;
    padding: 1rem;
  }
`

const size = [300, 500]

const callbacks = {
  getWordColor: word => (word.value > 50 ? "#ff715b" : "#FFA799"),
  /* onWordClick: (e, i) => console.log(e, i), */
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
  const {
    intro,
    timeToRead,
    tweet,
    words,
    sentiment,
    time,
    nerd,
    good,
    conclusion,
  } = CONTENT

  //console.log(CONTENT)

  const [more, setMore] = useState(false)
  const toggleMore = useCallback(() => setMore(!more), [more])

  const slidingButton = (action, link = "/", alt) => {
    return [0, 0].map((e, i) =>
      alt ? (
        <div className="topButton" tabIndex={i === 0 ? 0 : -1} onClick={alt}>
          {action}
        </div>
      ) : (
        <Link tabIndex={i === 0 ? 0 : -1} to={link}>
          {action}
        </Link>
      )
    )
  }

  return (
    <Layout>
      <SEO
        title="Prof G Data analysis"
        thumb={"profg.png"}
        description={`Prof G's brand strategy sprint has been unique from day one. There are +1,000 students networking! We crunched the numbers to get some insights into the group.`}
      />
      <Section>
        <Hero>Prof G's Brand Strategy Sprint - About The Sprinters </Hero>
        <Note>October 31, 2020</Note>
        <Note>{timeToRead} minute read</Note>
        {/* <Tweet /> */}
        <div dangerouslySetInnerHTML={{ __html: intro }}></div>

        <Graph className="center">
          <span className="x">Words</span>
          <span id="sprinters" className="y">
            Sprinters
          </span>
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
              fontSizes: [20, 80],
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
        <Graph className="center">
          <span className="y">Number of posts</span>
          <span className="x">Sentiment score</span>
          <img src={sentimentPlot} />
        </Graph>

        <NerdBox>
          <div onClick={toggleMore}>
            {!more ? `Click here to read a detailed explanation ` : `Show less`}
          </div>
          {more ? <div dangerouslySetInnerHTML={{ __html: nerd }}></div> : null}
        </NerdBox>

        <div dangerouslySetInnerHTML={{ __html: good }}></div>

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
            callbacks={callbacks}
            options={options}
            size={size}
            words={positive}
            style={{ textAlign: "-webkit-center" }}
          />
          <ReactWordcloud
            callbacks={{
              ...callbacks,
              getWordColor: word => (word.value > 5 ? "black" : "grey"),
            }}
            options={options}
            size={size}
            words={negative}
            style={{ textAlign: "-webkit-center" }}
          />
        </div>
        <Note>Hover/tap to see how many times each word occurred.</Note>
        <div dangerouslySetInnerHTML={{ __html: time }}></div>
        <Graph className="center">
          <span className="x">Time</span>
          <span className="y">Number of posts</span>
          <img src={timePlot} />
        </Graph>
        <div dangerouslySetInnerHTML={{ __html: conclusion }}></div>
      </Section>
      <Section>
        <Hero>Related posts:</Hero>
        <Link to="/prof-g-map">
          Prof G's Brand Strategy Sprint - Sprinters Around The World
        </Link>
      </Section>
      <Social />
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
