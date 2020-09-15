// with thanks https://github.com/alexmacarthur/netlify-lambda-function-example/blob/68a0cdc05e201d68fe80b0926b0af7ff88f15802/lambda-src/purchase.js

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const YOUR_DOMAIN = `http://localhost:8888/`

const statusCode = 200
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = function (event, context, callback) {
  //-- We only care to do anything if this is our POST request.
  if (event.httpMethod !== "POST" || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ message: "not a valid request" }),
    })
  }

  const makeSession = async () => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Stubborn Attachments",
              images: ["https://i.imgur.com/EHyR2nP.png"],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    })
    console.log(session.id)
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ id: session.id }),
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    }
  }
  makeSession()
}
