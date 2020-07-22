import React from "react"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import colors from "../styles/components"
import styled from "styled-components"

export default function Social() {
  return (
    <SocialIcons>
      <a href={`https://github.com/aaspinwall`} target="blank">
        <FaGithub />
      </a>
      <a
        href={`https://www.linkedin.com/in/alejandroaspinwall/?locale=en_US`}
        target="blank"
      >
        <FaLinkedin />
      </a>
      <a href={`https://twitter.com/aaspinwall`} target="blank">
        <FaTwitter />
      </a>
    </SocialIcons>
  )
}

const SocialIcons = styled.div`
  font-size: 2rem;

  a {
    padding: 2rem 1rem 2rem 0px;
    filter: opacity(0.8);
    transition: filter 0.4s ease-in-out, color 0.4s ease-in-out;
    :hover {
      filter: opacity(1);
      color: white;
    }
  }
`
