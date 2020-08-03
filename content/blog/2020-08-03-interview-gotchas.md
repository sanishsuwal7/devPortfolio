---
title: Interview gotchas
draft: false
date: 2020-08-03T21:02:56.444Z
description: Sometimes things are too good to be true
---
Let's face it, job interviews are made so that a company can filter out candidates as fast as possible. Some technical interview platforms remind me of that old Nickelodeon show "Legends of the hidden temple". 

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/3o6nUOvnxxN7MGmhHy" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/splat-nicksplat-legends-of-the-hidden-temple-3o6nUOvnxxN7MGmhHy">via GIPHY</a></p>

You might be a good candidate deep inside, but if you don't play the game and show them what you got, someone else will (and take the job).

![rick and morty reference](/img/smwyg.jpg "Show me what you got!")



```javascript
// 🚨Big numbers can break your code 🚨
function add(a, b) {
  return a + b;
}

const res1 = add(9007199254740992, 100);
const res2 = add(9007199254740992, 101);
console.log(res1 === res2); //true

//Fix it by using BigInt
function add(a, b) {
  return BigInt(a) + BigInt(b);
}

const bigRes1 = add(9007199254740992, 100);
const bigRes2 = add(9007199254740992, 101);
console.log(bigRes1 === bigRes2); //false
```