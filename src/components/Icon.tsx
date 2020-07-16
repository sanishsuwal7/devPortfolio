import React, { useState } from "react"
import { FaReact } from "react-icons/fa"
import styled from "styled-components"

export default function Icon({ speed }) {
  return (
    <Wrapper speed={speed}>
      <FaReact />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  svg {
    @keyframes example {
      from {
        color: #ff715b;
      }

      to {
        transform: rotate(360deg);
        color: #ff715b;
      }
    }
    font-size: 2rem;
    animation: ${props => props.speed} example linear infinite;
  }
`
