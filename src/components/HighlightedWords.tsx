import React from "react"

export const HighlightedWords = ({ title }: { title: string }) => {
  return title.split(" ").map((el, i) => {
    if (el.includes("**")) {
      const reg = /\*/g
      return (
        <div key={`highlightwords-${i}`} className="highlight">
          <div>{el.replace(reg, "")}</div>
          <div></div>
        </div>
      )
    } else return <div>{el}</div>
  })
}
