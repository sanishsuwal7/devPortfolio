import React, { useEffect, useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import kebab from "lodash/kebabCase"

export default function Headers(props) {
  const [allTitles, setAllTitles] = useState(null)
  useEffect(() => {
    const titles = document.querySelectorAll("h3")
    console.log(titles)
    const indexArr = Object.values(titles).map((el, i) => {
      console.log(el)
      return (
        <AnchorLink
          to={`${window.location.pathname}#${el.id}`}
          key={`titles-index-${i}`}
        >
          {el.innerText}
        </AnchorLink>
      )
    })
    setAllTitles(indexArr)
  }, [])
  return <div style={{ display: "grid" }}>{allTitles}</div>
}

export const H1 = ({ children: text, id: directID, ...props }) => {
  const id = directID || kebab(text.split(" ").slice(1, 5))
  return (
    <div>
      <h3 id={id}>{text}</h3>
    </div>
  )
}
