import React from "react"

const AboutTemplateExport = ({ title, content }) => {
  //const PageContent = contentComponent || Content
  console.log("loading from about.js")
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>something</div>
    </div>
  )
}

export default AboutTemplateExport
