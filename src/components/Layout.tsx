import React, { useEffect, useState } from "react"
import StyledComponentsRegistry from "../../lib/registry"
import { Wrapper } from "@/styles/components"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import "../App.css"
// import "../index.css"
// import "../styles.css"
// import { Navbar } from "./Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return <></>

  return (
    <Wrapper>
      <Navbar invert />
      <div className="App">
        <Navbar />
        <StyledComponentsRegistry>
          <div>{children}</div>
        </StyledComponentsRegistry>
        <Footer />
      </div>
    </Wrapper>
  )
}
