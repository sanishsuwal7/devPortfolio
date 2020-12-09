import React from "react"
import Layout from "../../templates/layout"
import { Section as S } from "../../styles/components"
import styled from "styled-components"

const Section = styled(S)`
  > * {
    margin-top: 8rem;
    min-height: 60vh;
  }
`

const Success = () => {
  return (
    <Layout>
      <Section>
        <div>
          <iframe
            src="https://giphy.com/embed/el7VG1XOOvi24oRXFt"
            width="100%"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </Section>
    </Layout>
  )
}

export default Success
