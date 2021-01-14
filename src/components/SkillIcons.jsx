import React from "react"
import styled from "styled-components"
import { Tags } from "../styles/components"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    padding: 0 1rem 0 0;
  }
`
const AllTags = styled(Tags)`
  width: 100%;
  justify-content: center !important;
  @media only screen and (min-width: 768px) {
    padding-right: 0;
    max-width: 100%;
    width: 100%;
    justify-content: flex-start !important;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }
  li {
    position: relative;
    font-size: 1rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .backend,
  .devOps,
  .db,
  .cms,
  .frontend {
    :hover {
      ::after {
        position: absolute;
        top: 100%;
        left: 0;
        color: black;
        padding: 0.35rem;
        animation: fadeIn 0.4s ease-in-out;
        z-index: 999;
      }
    }
  }
  .backend {
    :hover {
      ::after {
        content: "Backend";
        background: #728e39;
        color: white;
      }
    }
  }
  .frontend {
    :hover {
      ::after {
        content: "Frontend";
        background: yellow;
        color: black;
      }
    }
  }
  .devOps {
    :hover {
      ::after {
        content: "DevOps";
        background: #870687;
        color: white;
      }
    }
  }
  .db {
    :hover {
      ::after {
        content: "Database";
        background: #ff91a4;
        color: white;
      }
    }
  }
  .cms {
    :hover {
      ::after {
        content: "CMS";
        background: #6161ff;
        color: white;
      }
    }
  }
`

export default function SkillIcons() {
  return (
    <Wrapper>
      <AllTags>
        <li>Javascript</li>
        <li>Python</li>
        <li className="frontend">React</li>
        <li className="backend">Node.js</li>
        <li className="frontend">HTML</li>
        <li className="frontend">CSS</li>
        <li className="devOps">AWS</li>
        <li className="frontend">Gatsby</li>
        <li className="frontend">Next.js</li>
        <li className="db">MongoDB</li>
        <li className="backend">GraphQL</li>
        <li className="db">SQL</li>
        <li className="db">MongoDB</li>
        <li className="db">FaunaDB</li>
        <li className="backend">Firebase</li>
        <li className="cms">Wordpress</li>
        <li className="cms">Shopify</li>
      </AllTags>
    </Wrapper>
  )
}
