---
title: Javascript cheatsheet
draft: false
date: 2020-08-03T18:44:42.151Z
description: "A cheatsheet for interviews"
internal: false
---

- Q: What are falsey values in JavaScript?

A set of unique values that evaluate to false.

```javascript
const falsy = [null, 0, undefined, false, NaN, "", -0, 0n]
console.log(falsy.some(el => el)) //false
```
