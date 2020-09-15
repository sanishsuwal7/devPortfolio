import React, { useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Layout from "../../templates/layout"
import { Box, Button } from "@chakra-ui/core"
import {
  Section as S,
  Hero,
  Tags,
  HeroP,
  ImageFull,
  Bio,
  Projects,
  SectionTag,
  Paragraph,
  Header,
  CupContainer,
} from "../../styles/components"

import styled from "styled-components"

const Section = styled(S)`
  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    max-width: 200px;
    margin: auto;
    padding-top: 5rem;
    > * {
      width: 100%;
      margin: 1rem 0;
    }
    img {
      transition: 0.8s ease-in-out;
      filter: drop-shadow(2px 4px 6px black);
      margin: 0;
      border-radius: 24px;
      :hover {
        filter: drop-shadow(2px 4px 6px black) brightness(1.2) opacity(0.8);
      }
      :focus,
      :active {
        border: 10px solid #ff715b87;
        padding: 0.2rem;
      }
    }
    h3,
    h5 {
      margin: 1rem;
    }
  }
`

const url = `/.netlify/functions/stripe-charge/`
const stripePromise = loadStripe(
  `pk_test_51HRfXgBRONX4uWcmjRoBLKOcwcOPPJAo725YgNEsnhc23B7S5hSVhhn5l6bkJ8faLJwmlhnJohw2G2JPOx0dYYPV003nDcWKnI`
)

const ProductDisplay = ({ handleClick }) => (
  <Section>
    <Box className="product">
      <div>
        <img
          onClick={handleClick}
          src="https://aaspinwall.com/static/a90bf3d0d375ca4ebd2a49dafa4d72e5/4e6d4/landingImage.webp"
          alt="Get alejandro some coffee"
        />
        <div className="description">
          <h3>Get Alejandro some coffee ☕️</h3>
          <h5>$1.00 USD</h5>
        </div>
      </div>
      <Button
        variantColor={"teal"}
        borderRadius="15px"
        role="link"
        onClick={handleClick}
      >
        Checkout
      </Button>
      <p>It's amock transaction, you wont get charged 😉</p>
    </Box>
  </Section>
)

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
)

export default function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.")
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      )
    }
  }, [])

  const handleClick = async event => {
    const stripe = await stripePromise

    const response = await fetch(url, {
      method: "POST",
    })

    const session = await response.json()

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    })

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  }

  return message ? (
    <Message message={message} />
  ) : (
    <Layout>
      <ProductDisplay handleClick={handleClick} />
    </Layout>
  )
}

/* const Debug = () => {
  const get = async () => {
    const body = await fetch(url)
    const ms = await body.json()
    setData(ms)
    console.log(ms)
  }
  const [data, setData] = React.useState(null)
  React.useEffect(get, [])
  return (
    <div>
      <div>Debugging</div>
      <div>{data ? data.message : null}</div>
      
    </div>
  )
}

export default Debug */
