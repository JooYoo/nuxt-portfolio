---
title: JavaScript Hoisting
time: 2021.04.01
keyword: JavaScript
description: JavaScript basic hoisting
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🙋🏻‍♂️ Q & A

<br/>

### Q1. Explain Js Hoisting by code

<WidgetsMdToggle title="🔑">

```jsx
foo()
function foo() {
  console.log('Hi, there.')
}
```

- Even if the function is called before it's defined, it still works. That's called Js Hoisting.

</WidgetsMdToggle>

<br/>

### Q2. Does the following code valid?

```js
foo()
const foo = function () {
  console.log('Hi, there.')
}
```

<WidgetsMdToggle title="🔑">

- invalid
- When the function assigned to a variable, the hoisting will be disabled.

</WidgetsMdToggle>

<br/>

### Q3. Does the following code valid?

```js
foo()
const foo = () => {
  console.log('Hi, there.')
}
```

<WidgetsMdToggle title="🔑">

- invalid
- When the function assign to a variable, JS hoisting will be disabled, include arraow function.

</WidgetsMdToggle>

<br/>
