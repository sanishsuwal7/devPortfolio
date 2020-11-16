import React, { useRef } from "react"
import styled from "styled-components"

export default function SkillClouds({ roll, top, pulse, size, offset }) {
  const thisCloud = useRef()

  function randomizeValue(min, max) {
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
  }
  const cloudArray = [
    "javascript",
    "python",
    "html",
    "css",
    "react",
    "gatsbyjs",
    "AWS",
  ]
  const index = randomizeValue(0, cloudArray.length - 1)
  const Cloud = cloudArray[index]

  return (
    <SVGcontainer
      ref={thisCloud}
      roll={roll}
      top={top}
      pulse={pulse}
      size={size}
      offset={offset}
    >
      <div>{Cloud}</div>
    </SVGcontainer>
  )
}

export const SVGcontainer = styled.div`
  position: absolute;

  top: ${props => props.top};
  overflow: hidden;
  left: ${props => props.offset};

  @keyframes pulse {
    0%,
    100% {
      transform: translate(0, 0);
      filter: opacity(1);
    }
    50% {
      transform: translate(0, 30%);
      filter: opacity(0.6);
    }
  }
  @keyframes roll {
    0% {
    }
    100% {
      left: 120vw;
    }
  }
  @keyframes life {
    0% {
      filter: opacity(0);
    }
    100% {
      filter: opacity(1);
    }
  }
  @keyframes spin {
    0% {
      filter: opacity(0.6);
    }
    100% {
      filter: opacity(0);
    }
  }

  animation: pulse ${props => props.pulse} ease-in-out infinite alternate,
    roll ${props => props.roll} linear forwards;

  color: whitesmoke;
  font-size: ${props => props.size};
  font-family: Montserrat;
`
