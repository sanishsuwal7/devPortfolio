---
title: Javascript cheatsheet
draft: false
date: 2020-08-03T18:44:42.151Z
description: "A cheatsheet for interviews"
internal: false
---

### Q: What is the difference between undefined and undeclared?

Undefined means that the variable has been declared but has not had a value assigned to it.
Undeclared is that it hasn't been declared.

```js
if (false) {
  let firstNameLet = "Alejandro"
  var firstNameVar = "Alejandro"
}

console.log(firstNameVar) // undefined
console.log(firstNameLet) // ReferenceError: firstNameLet is not defined
```

### Q: What are falsey values in JavaScript?

A: A set of unique values that evaluate to false.

<!-- prettier-ignore-start -->
```javascript
const falsy = [
  null, 0, undefined, false, NaN, "", -0, 0n
  ]

console.log(falsy.some(el => el)) // false
```
<!-- prettier-ignore-end -->

### Q: What are the differences between const, let, and var?

**Var** uses hoisting, this means that the variable is declared before any of the code runs. In JS, variable and function declarations are put into memory during the compile phase.

This is why you can call a function before it's been declared

```js
catName("Chloe")

function catName(name) {
  console.log("My cat's name is " + name)
}
/*
The result of the code above is: "My cat's name is Chloe"
*/
```

JavaScript only hoists declarations, not initializations.

```js
console.log(num) // undefined
var num // Declaration
num = 6 // Initialization
```

A: **const and let** use a block scope while **var** uses lexical scope.

<!-- prettier-ignore-start -->
```javascript

```
<!-- prettier-ignore-end -->
