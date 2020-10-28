import React from "react"

export default function Footer() {
  return (
    <footer style={{ padding: "3rem 1rem 1rem" }}>
      © {new Date().getFullYear()}, Built and designed by BRAND, follow him on{" "}
      <a target="blank" href="https://twitter.com/aaspinwall">
        Twitter
      </a>
    </footer>
  )
}
