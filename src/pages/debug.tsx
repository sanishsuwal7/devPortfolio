import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

export default function debug({ data }) {
  console.log(data)
  return (
    <div>
      <h3>Here is a nice image</h3>
      {/* <Image fluid={data.allFile.edges[0].node.childImageSharp.fluid}></Image> */}
    </div>
  )
}
