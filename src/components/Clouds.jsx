import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

import cloud_0 from "../draw/cloud_0.svg"
import cloud_1 from "../draw/cloud_1.svg"
import cloud_2 from "../draw/cloud_2.svg"
import cloud_3 from "../draw/cloud_3.svg"
import cloud_4 from "../draw/cloud_4.svg"
import cloud_5 from "../draw/cloud_5.svg"

export default function Clouds({ roll, top, pulse, size, offset }) {
  const [active, setActive] = useState(false)
  const thisCloud = useRef()

  function r(min, max) {
    const rand = Math.random() * (max - min) + min
    return Math.floor(rand)
  }
  const cloudArray = [cloud_0, cloud_1, cloud_2, cloud_3, cloud_4, cloud_5]
  const index = r(3, 6)
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
      <Cloud />
    </SVGcontainer>
  )
}

export const SVGcontainer = styled.div`
  position: absolute;

  width: ${props => props.size};
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

  svg {
    animation: life linear 2s;
    path {
      fill: white;
    }
  }
`
