---
title: Moving Day
description: Coffee by Benjamin is a React Application built for a self roasting coffee kit. I built this project from scratch alongside a designer with React, GraphQL, and Shopify. This e-commerce application required a lot of heavy lifting to create a universal cart and overall shopping experience as well as introduce the product and include support pages.
details:
  type: Personal project
  stack: react styled-components firebase netlify
  code: github
  live: https://movingday.netlify.app/
---

# Project Purpose and Goal

This was initially intended to be a data scraper for Kijiji (a classified ad site in Canada) with a simple front end that filters out spam.

This project included 3 phases and iterations of the site. Phase 1 simply allowed users to enter their email to be alerted to when the product was released. Phase 2 was quite larger and is designed to introduce users to the Coffee By Benjamin product and answer any questions they may have. Phase three is by far the largest and most complex, as it includes the full shop and cart pages as well as the logic and backend that goes along with it.

I found that the best way to implement these 3 phases without having separate versions saved was to incorporate a feature flag that will pass the current state that should be displayed and then render content conditionally.

# Web Stack and Explanation

React made the most sense for the web application because it required to connect to graphQL and the Shopify-SDK for javascript ties into React very smoothly. The Shopify-Buy-SDK was chosen because of the ability for the client to modify the products without any complex coding knowledge.

React hooks and session storage are also used throughout the project to maintain the user cart items and allows the cart count and other shopping data to be displayed universally without the need for Redux. Netlify is also an obvious choice for deployment because of its speed and reliability.

[PICTURES]

# Problems and Thought Process

As the project grew

Like most projects, I ran into a few bumps along the way, one particularly difficult area was organization and structure of the code. Because of this project's size, I realized how important maintaining an organized structure would be.

I worked hard to keep components as reusable as possible and utilized props for many slight variations. I also used styled-components, because the structure of CSS-in-js is much clearer and prevents overrides.

[PICTURES]

# Lessons Learned

I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved my newfound understanding of React Hooks, Git management, Feature Keys, and API integration. As my first large project using React, I learned a lot of lessons regarding code structure and organization. When I first began, I would write sloppy code and move on, but now I know how doing so can come back to bite you; I now spend a lot more time refactoring and improving every line I code I write, for the best readability and far fewer headaches.
