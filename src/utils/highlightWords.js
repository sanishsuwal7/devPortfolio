import React from "react"

export const highlightWords = title => {
  return title.split(" ").map(el => {
    if (el.includes("**")) {
      const reg = /\*/g
      return (
        <div className="highlight">
          <div>{el.replace(reg, "")}</div>
          <div></div>
        </div>
      )
    } else return <div>{el}</div>
  })
}
