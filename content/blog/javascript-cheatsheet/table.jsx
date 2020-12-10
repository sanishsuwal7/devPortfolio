import React, { useEffect, useState, useRef } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { navigate } from "@reach/router"
import kebab from "lodash/kebabCase"
import styled from "styled-components"

const Menu = styled.div`
  div {
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 1.2rem;
  }
`

export default function Table(props) {
  const [allTitles, setAllTitles] = useState(null)

  useEffect(() => {
    const titles = document.querySelectorAll("h3")
    console.log(titles)
    const indexArr = Object.values(titles).map((el, i) => {
      console.log(el)
      return (
        <div
          className="anchorLink"
          onClick={() => {
            console.log(window.location.pathname)
            el.scrollIntoView()
          }}
          key={`titles-index-${i}`}
        >
          {el.innerText.replace(/Q:|:/, "")}
        </div>
      )
    })
    setAllTitles(indexArr)
  }, [])
  return <Menu style={{ display: "grid" }}>{allTitles}</Menu>
}

export const H1 = ({ children: text, id: directID, ...props }) => {
  const id = directID || kebab(text.split(" ").slice(1, 5))
  return (
    <div>
      <h3 id={id}>{text}</h3>
    </div>
  )
}
