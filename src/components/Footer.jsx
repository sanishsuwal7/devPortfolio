import React from "react"

export default function Footer() {
  return (
    <footer style={{ padding: "3rem 1rem 1rem" }}>
      © {new Date().getFullYear()}, Built by Alejandro Aspinwall, using {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <a href=""></a>
    </footer>
  )
}
