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

A: **const and let** use a block scope (anything between curly brackets) while **var** uses lexical scope.

**const** stores values that will not be reassigned. They can be mutated.

```javascript
const user = { name: "Alejandro" }
user.name = "Alex"
console.log(user) // { name: 'Alex' }
```

**Var** uses hoisting, this means that the variable is declared before any of the code runs. In JS, variable and function declarations are put into memory during the compile phase.

This is why you can call a function before it's been declared

```js
catName("Tamal")

function catName(name) {
  console.log("My cat's name is " + name)
  // My cat's name is Tamal
}
```

JavaScript only hoists declarations, not initializations.

```js
console.log(num) // undefined
var num // Declaration
num = 6 // Initialization
```

### Q: What is the difference between == vs === ?

This operator checks to see if two values are equivalent. Returns a boolean value.
== ignores the type and focuses on the value.
=== does a strict check and checks both type and value.

```js
const value1 = 5
const value2 = "5"

console.log(value1 == value2) // true
console.log(value1 === value2) // false
```

### Q: What do map(), filter() and reduce() do?

Map applies the callback to each value. Returns an array with the results.

```js
const nums = [1, 2, 3]
const numsAddOne = nums.map(value => value + 1)
console.log(numsAddOne) // [2,3,4]
```

Filter applies the callback but only passes the elements that return true.

```js
const nums = [1, 2, 3, 4]
const evenNums = nums.filter(value => value % 2 === 0)
console.log(evenNums) // [2, 4]
```

Reduce takes a callback with two arguments, the first one is the accumulator, the second is the current value. It takes a second argument which is the initial accumulator value.

For each of the elements in the array, the callback is applied and the result becomes the new accumulator.

```js
const nums = [1, 2, 3]
const sum = nums.reduce((total, current) => {
  return total + current
}, 0)

console.log(sum) // 6
```

### Q: What is the difference between undefined and null?

While undefined means that something doesn't exist, null means something has no value. It's preferable to have null values that might change later rather than undefined. _Friendlier code_

### What are some JavaScript data types?

Primitives: String, boolean, numbers, BigInt, Symbol.
Non-primitives: [], {}, Map (objects with unique keys that are beyond strings), Set (arrays with unique values)

### What do the spread and rest operators do?

#### Spread

The spread operator can be used to unwrap an array or an object.

It can also be used to clone or merge arrays and objects.

```js
const users = ["dinosaur", "pumpkin", "cat"]
const allUsers = ["Mr. Dog", ...users]

console.log(users)
// [ 'dinosaur', 'pumpkin', 'cat' ]
console.log(allUsers)
// [ 'Mr. Dog', 'dinosaur', 'pumpkin', 'cat' ]
```

**concatenate an array**

```js
const a = ["Mr. Dog", "Mrs. Dog"]
const b = ["Pup", "Little Dog"]

const family = [...a, ...b]

console.log(family)
//[ 'Mr. Dog', 'Mrs. Dog', 'Pup', 'Little Dog' ]
```

**Destructuring**

```js
const scores = {
  water: 5,
  wine: 11,
  milk: 4,
  beer: 7,
}
const { wine, ...others } = scores

console.log("how much do I like wine?", wine)
//how much do I like wine?
```

This operator is used in function definitions to collect additional function arguments. Useful when you don't know how many parameters a function needs. It collects them into an array.

```js
function easy(a, b, c) {
  console.log("Easy as", a, b, c)
}
const letters = ["A", "B", "C"]
easy(...letters) // Easy as A B C
```

**Rest**

Does the opposite of spread. It collects a function's arguments into an array. It's useful when you don't know how many parameters a fuction needs.

```js
function order(...elements) {
  elements.forEach(el => console.log(el))
}
order("fries", "milkshake", "cheesburger")
//fries
//milkshake
//cheesburger
```

### References:

[Scrimba Frontend Interview Tips](https://scrimba.com/learn/frontendinterview/)

[Josh Comeau's Operator Lookup](https://www.joshwcomeau.com/operator-lookup?match=restspread)
