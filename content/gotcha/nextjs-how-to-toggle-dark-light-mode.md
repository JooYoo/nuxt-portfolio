---
title: Nextjs toggle Dark/Light mode
time: 2021.12.15
keyword: Nextjs
description: Nextjs how to toggle Dark/Light mode
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<iframe src="https://stackblitz.com/edit/nextjs-pdmbsp?embed=1&file=pages/index.js&hideExplorer=1&theme=dark&view=preview"
 style="width:100%; height:400px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
></iframe>

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
.
├── components/
│   └── ThemeToggle.jsx
├── pages/
│   ├── _app.js
│   └── index.js
├── packge.json
├── postcss.config.js
└── tailwind.config.js

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

```jsx
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  //init
  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChnanger = () => {
    // following logic will only run when component mounted
    if (!mounted) return null

    // get current system theme
    const currentTheme = theme === 'system' ? systemTheme : theme

    // toggle light/dark
    if (currentTheme === 'dark') {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return <div>{renderThemeChnanger()}</div>
}

export default ThemeToggle
```

- `components/ThemeToggle.jsx`
- `useTheme()`: _next-themes_ buildIn hook. We can detecte current-theme.
- `setMounted`: custom Hook. To protect optimize performance.
- We check if component is already mounted, if so, we will get the current Theme. Based on _currentTheme_ we can now toggle Dark/Light Mode and also toggle the corresponding icons.

<br/>

## Step 4. import and use ThemeToggle Component

- Now we can import and use _ThemeToggleComponent_ at corresponding component. e.g. `index.js`

<br/>
