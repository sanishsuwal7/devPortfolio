import React from "react"
import styled from "styled-components"
import Icon from "../draw/cloud.svg"

export default function Clouds({ roll, top, pulse, size, offset }) {
  return (
    <SVGcontainer
      roll={roll}
      top={top}
      pulse={pulse}
      size={size}
      offset={offset}
    >
      <Icon />
    </SVGcontainer>
  )
}

export const SVGcontainer = styled.div`
  position: absolute;

  width: ${props => props.size};
  top: ${props => props.top};
  overflow: hidden;

  @keyframes pulse {
    0%,
    100% {
      transform: translate(0, 0);
      filter: opacity(1);
    }
    50% {
      transform: translate(0, 15%);
      filter: opacity(0.8);
    }
  }
  @keyframes roll {
    0% {
      left: ${props => (props.offset ? props.offset : "-20%")};
    }
    100% {
      left: 120%;
    }
  }

  animation: pulse ${props => props.pulse} ease-in-out infinite alternate,
    roll ${props => props.roll} linear infinite;
`
