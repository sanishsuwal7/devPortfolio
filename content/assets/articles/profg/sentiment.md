---
name: sentiment
title: Prof g
internal: true
type: custom-blog
---

##Sentiment

Next, I wanted to get a feel for the mood of the group. We ran a sentiment analysis (also known as opinion mining or emotion AI) based on the words we used to describe ourselves.

Warning! nerd talk ahead: Some words which are associated with positive/negative emotions are ranked between -5 and +5 (0 is neutral). We call this the AFINN score.

For example, let's imagine an incredibly "positive" blurb with 50 words, where each one has an AFINN score of 5. Our result would look like this:

(max positive score _ number of words) / number of words
(5 _ 50) / 50 = 5
