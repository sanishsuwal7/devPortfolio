import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../../templates/layout"
import SEO from "../../../components/seo"
import Waterfall from "../../../components/Waterfall"
import { c } from "../../../components/styles/index"
import { Section } from "../../../styles/components"
import { Box, Grid, Flex } from "@chakra-ui/core"

const Gatsbyimage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Gatsby-image test" />
      <Box w="100vw">
        <Section>
          <Box>Gatsby image</Box>
          <Grid gap="1rem">
            <Waterfall size="lg" />
            <Flex>
              <Waterfall size="md" />
              <Waterfall size="md" />
            </Flex>
            <Flex>
              <Waterfall size="sm" />
              <Waterfall size="sm" />
              <Waterfall size="sm" />
              <Waterfall size="sm" />
            </Flex>
          </Grid>
        </Section>
      </Box>
    </Layout>
  )
}

export default Gatsbyimage
