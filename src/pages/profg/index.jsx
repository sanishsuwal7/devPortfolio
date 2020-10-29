import React from "react"
import Layout from "../../templates/layout"
import PropTypes from "prop-types"
import { Hero, Section, Markdown, HeroP } from "../../styles/components"
import ReadTime from "../../components/ReadTime"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../../components/ui/button"

import ReactWordcloud from "react-wordcloud"

import { positive, negative } from "../../utils/data"
import plot from "../../../content/assets/svg/plot.svg"
import up from "lodash/capitalize"
import "tippy.js/dist/tippy.css"
import "tippy.js/animations/scale.css"

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "Muli",
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

const P = styled.p``

const size = [300, 900]

const callbacks = {
  getWordColor: word => (word.value > 50 ? "#ff715b" : "#FFA799"),
  onWordClick: (e, i) => console.log(e, i),
  getWordTooltip: word => ` ${word.value}`,

  /* `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`, */
}

const Prof = () => {
  return (
    <Layout>
      <SEO title="Prof G Data analysis" />
      <Section>
        <Hero>Good vs Bad</Hero>
        <HeroP>October 29, 2020</HeroP>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            maxWidth: "500px",
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
      </Section>
      <Section>
        <Hero>Sentiment</Hero>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
          consequatur esse optio voluptatibus excepturi voluptates adipisci
          voluptatem consequuntur laudantium, laborum fuga quia facere est
          incidunt? Enim ipsam libero inventore fugit!
        </P>
        <img src={plot} />
      </Section>
    </Layout>
  )
}

export default Prof
