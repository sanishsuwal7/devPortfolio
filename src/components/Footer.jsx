import React from "react"

export default function Footer() {
  return (
    <footer style={{ padding: "3rem 1rem 1rem" }}>
      © {new Date().getFullYear()}, Built and designed by Alejandro Aspinwall,
      follow him on <a href="https://www.gatsbyjs.org">Twitter</a>
      <a href=""></a>
    </footer>
  )
}
