import React from "react"
import AboutPageTemplate from "../pages/about"

export default function AboutTemplateExport({ title, content }) {
  //const PageContent = contentComponent || Content
  //console.log(title)
  return (
    <AboutPageTemplate
      title={title}
      content={"<div>There is some html</div>"}
    />
  )
}
