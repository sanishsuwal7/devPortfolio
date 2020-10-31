import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { c } from "../../styles/"
import { Button as B } from "@chakra-ui/core"

const Button = ({ children, to, ...props }) => {
  const external = to.includes("http")
  return (
    <B variant="ghost" {...props}>
      {external ? (
        <a href={to} target="blank">
          {children}
        </a>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </B>
  )
}

export default Button
