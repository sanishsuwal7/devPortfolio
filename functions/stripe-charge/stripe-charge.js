// with thanks https://github.com/alexmacarthur/netlify-lambda-function-example/blob/68a0cdc05e201d68fe80b0926b0af7ff88f15802/lambda-src/purchase.js

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const url = `${process.env.URL}/payment/success`

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
              name: "Get Alejandro some coffee",
              images: [
                "https://aaspinwall.com/static/a90bf3d0d375ca4ebd2a49dafa4d72e5/4e6d4/landingImage.webp",
              ],
            },
            unit_amount: 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${url}?success=true`,
      cancel_url: `${url}?canceled=true`,
    })
    console.log(session.id)
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ id: session.id }),
    })
    /*     return {
      statusCode,
      body: JSON.stringify({ id: session.id }),
    } */
  }
  makeSession()
}
