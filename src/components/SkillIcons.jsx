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

const skills = [
  { name: "Typescript" },
  { name: "React", type: "frontend" },
  { name: "Node.js", type: "backend" },
  { name: "HTML", type: "frontend" },
  { name: "CSS", type: "frontend" },
  { name: "AWS", type: "devOps" },
  { name: "Gatsby", type: "frontend" },
  { name: "Next.js", type: "frontend" },
  { name: "MongoDB", type: "db" },
  { name: "GraphQL", type: "backend" },
  { name: "Apollo GraphQL", type: "backend" },
  { name: "PostgreSQL", type: "db" },
  { name: "Nexus", type: "backend" },
  { name: "FaunaDB", type: "db" },
  { name: "Firebase", type: "backend" },
  { name: "Wordpress", type: "cms" },
  { name: "Shopify", type: "cms" },
]

export default function SkillIcons() {
  return (
    <Wrapper>
      <AllTags>
        <li>JavaScript</li>
        <li>Python</li>
        {skills.map((s, i) => (
          <li key={`skill-i-${i}`} className={s.type}>
            {s.name}
          </li>
        ))}
      </AllTags>
    </Wrapper>
  )
}
