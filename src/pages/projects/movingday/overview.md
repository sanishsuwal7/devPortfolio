---
title: Moving Day
description: Moving Day is an application that helps users to look for a place to live. I've moved countries a couple of times and everytime I do, I dread looking for a new place. I want to offer others a simple tool that filters out spam, notifies them of listings that match their search criterion and most importantly, gives them peace of mind during stressful times.
details:
  type: Personal project
  stack: react styled-components firebase netlify
  code: github
  live: https://movingday.netlify.app/
---

# Project Purpose and Goal

This project was initially thought of as a tool for people that were looking to rent apartments in Montreal. Since the most popular site for this purpose is Kijiji, I wanted to make a friendly front end that filtered out the spam posts and displayed relevant information about the listing. I also wanted to add a notification system that sent an email to the user anytime a new ad that matched their search terms was posted. Finally, I wanted to display additional information that wasn’t available directly from kijiji. I decided to add the Google Maps API that allows for a more intuitive navigation and the Walkscore API rates the listing’s access to public transportation and bike friendliness.

My goal was to learn to use third party APIs and to make a robust full stack application.

# Web Stack and Explanation

To maximize my learning-to-production ratio,I wanted to have a javascript-based stack. I chose React for the fronted because I was already familiar with it. I wanted to push myself even within a familiar environment so after developing the initial version, refactored the code using hooks. This was the first time I used hooks with Redux and also the first time I would be using a store persistor.

I used a firebase realtime database to store the scraped data and to eventually provide a public facing API.

For the backend I wanted to learn to develop and deploy serverless functions. This meant that I would have to split the functionality into simple modules. I used Netlify functions, a Heroku instance as a master clock for the lambda functions and finally a Cloud Scheduler to keep everything synced.

After trying a few other providers, I decided that Netlify was the best choice for my application. It's a powerful and fast platform for deployment, which allowed me to use (and learn) serverless functions.

![altText](/img/brummana.png "title")

# Problems and Thought Process

Like most projects, the initial idea in my head was simpler and more elegant than what the actual solutions ended up being. I encountered a few bumps along the way that set back my progress significantly. Looking back, all these caveats forced me to learn much more than I initially challenged myself to.
When I started to develop the search function I encountered that kijiji doesn’t provide a public API for their ads. To solve this, I created a simple express app that scraped the site. The results would be displayed in real time on the application. Everything ran smoothly on my local machine, but when I deployed the application I soon realized that kijiji doesn’t like repeated requests from servers. I would need a more robust infrastructure to work around this limitation.

[PICTURES]

# Lessons Learned

I could spend all day describing the lessons that I learned while working on this project, but the most important ones involved my newfound understanding of React Hooks, Git management, Feature Keys, and API integration. As my first large project using React, I learned a lot of lessons regarding code structure and organization. When I first began, I would write sloppy code and move on, but now I know how doing so can come back to bite you; I now spend a lot more time refactoring and improving every line I code I write, for the best readability and far fewer headaches.
