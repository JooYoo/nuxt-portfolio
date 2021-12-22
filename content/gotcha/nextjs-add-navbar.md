---
title: Nextjs add Navbar
time: 2021.12.21
keyword: Nextjs
description: Nextjs how to add Navbar
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<iframe src="https://stackblitz.com/edit/nextjs-hvab26?embed=1&file=components/Navbar.js&hideExplorer=1&hideNavigation=1&theme=dark&view=preview"
 style="width:100%; height:400px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
></iframe>

<br/>
<br/>

# 🎯 Goal

create a Navbar to navigate between different pages

<br/>

# 🛸 Techs

- Nextjs
- JavaScript

<br/>

# 🌲 File Structure

```javascript
.
├── components/
│   └── Navbar.js
├── layout/
│   └── Layout.js
├── pages/
│   ├── about/
│   │   └── index.js
│   ├── product/
│   │   └── index.js
│   ├── _app.js
│   └── index.js
└── packge.json

```

<br/>

# 🦶🏻 Steps

## Step 0. create Navbar Component

```javascript
import Link from 'next/link'

const styleNavbar = {
  border: '1px hotpink solid',
  display: 'flex',
  justifyContent: 'space-between',
}

const Navbar = () => {
  return (
    <div style={styleNavbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
    </div>
  )
}

export default Navbar
```

- _components/Navbar.js_
- `<Link>`: Nextjs buildIn component. Create links to route between pages.
- We also add very simple style here to make Navbar stand out.

<br/>

## Step 1. create Layout Component

```javascript
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
```

- _layout/Layout.js_
- We create the basic struture here for our Website.
- `<Navbar/>` Component at the top.
- The rest of space will be filled with `children` which is the current page content.

<br/>

## Step 3. use Layout Component

```javascript
import Layout from '../layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```

- _pages/\_app.js_
- We can now wrap the `<Component/>` (as **Children**, which is the main content of our app) inside of `<Layout>`.
  <br/>
