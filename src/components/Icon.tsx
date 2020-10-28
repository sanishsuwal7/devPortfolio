import React, { useState } from "react"
import { FaReact } from "react-icons/fa"
import styled from "styled-components"

export default function Icon({ speed, icon, ...props }) {
  return <Wrapper speed={speed}>{icon ? icon : <FaReact />}</Wrapper>
}

const Wrapper = styled.div`
  svg,
  img {
    color: #ff715b;
    @keyframes example {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
    font-size: 2rem;
    animation: example ${props => props.speed} linear infinite;
  }
`
