import React from "react"
import styled from "styled-components"

export default function ReadTime({ text }) {
  const readTime = Math.ceil(text.split(" ").length / 240)
  return <ReadTimeWrapper>{readTime + " minute read"}</ReadTimeWrapper>
}

export const ReadTimeWrapper = styled.div`
  font-family: Inter;
`
