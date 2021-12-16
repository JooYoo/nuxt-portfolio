---
title: Nextjs toggle Dark/Light mode
time: 2021.12.15
keyword: Nextjs
description: Nextjs how to toggle Dark/Light mode
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<br/>
<br/>

# 🎯 Goal

Add Dark Mode in Next.js project. Provide a button, users can toggle between Dark Mode and Light Mode.

<br/>

# 🛸 Techs

- Next.js
- TailwindCSS
- next-themes
- heroicons

<br />

# 🌲 File Structure

```javascript

```

<br/>

# 🦶🏻 Steps

## Step 0. install Tailwind with Next.js

- [Offical Doc from Tailwind](https://tailwindcss.com/docs/guides/nextjs)
- The official documentation provides detailed installation steps.

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- `tailwind.config.js`
- enable darkMode to _class_

<br/>

## Step 1. install and setup next-themes

```javascript
$ npm i next-themes
```

- install `next-themes` via npm

```javascript
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
```

- `pages/_app.js`
- `ThemeProvider`: import it from next-themes and wrap the **root-component** inside of it.
- `enableSystem={true}`: app theme follows System theme
- `attribute="class"`: since we use Tailwind to style the app, Tailwind is class based style system, so we set the attribute to class.

<br/>

## Step 2. install heroIcons

```js
$ npm install @heroicons/react
```

<br/>

## Step 3. create ThemeToggle Component

<br/>

to be continue ...
