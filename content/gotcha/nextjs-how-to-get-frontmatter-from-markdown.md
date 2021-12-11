---
title: Nextjs get frontmatter from Markdown
time: 2021.12.10
keyword: Nextjs
description: Nextjs how to get frontmatter from Markdown
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

## 🚀 Demo

<iframe src="https://codesandbox.io/embed/try-gray-matter-givrd?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="try-gray-matter"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br />
<br />

# 🎯 Goal

Using Next.js as a static site generator, how can we get the Frontmatter in Markdown file?

<br />

# 🛸 Techs

- Next.js
- react
- JavaScript
- gray-matter
- Markdown

<br />

# 🌲 File Structure

```javascript

.
├── pages/
│   └── index.js
├── posts/
│   ├── markA.md
│   └── markB.md
└── package.json

```

<br />

# 🦶🏻 Steps

## Step 0. Add `.md`

```jsx
---
title: "Test Post"
date: "June 24 2021"
excerpt: "This is an excerpt"
---

**Heading Two**

Hello world
```

- e.g. `markA.md`
- The markdown file must include **Frontmatter**.

<br/>

## Step 1. get `.md` by File system

```jsx
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  // get files from /posts
  const files = fs.readdirSync(path.join('posts'))

  return {
    props: {
      hello: 'world',
    },
  }
}
```

- `getStaticProps()`: Nextjs buildIn function. The function is used to fetch data. Next.js will pre-render this page at build time using the props returned by `getStaticProps`.
- `fs.readdirSync()`: Nodejs buildIn. We can get file _full-name_ (with extension) via the path.

<br />

## Step 2. get slug, frontmatter, markdown content

```jsx
$ npm i gray-matter
```

- install **gray-matter**

```jsx
export async function getStaticProps() {
  // get files from /posts
  const files = fs.readdirSync(path.join('posts'))

  // get slug, frontmatter, markdown main content
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace('.md', '')

    // get frontmatter
    const mdWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    // get markdown main content
    const { data: frontmatter, content } = matter(mdWithMeta)
    return {
      slug,
      frontmatter,
      content,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
```

- `slug`: using a simple JS trick to get a clean slug (filename without extension).
- `mdWithMeta`: using Nodejs buildIn File system, to get eveything in the markdown file. Include frontmatter and main content.
- `matter()`: **gray-matter** can extract the _frontmatter_ and _main-content_ of a markdown file.
- `prop: { ... }`: after the mapping, the posts can be returned for the template rendering.

<br />

## Step 3. render in template

```jsx
export default function IndexPage({ posts }) {
  return (
    <div>
      {/* title */}
      <h4>{posts[1].frontmatter.title}</h4>
      {/* content */}
      {posts[1].content}
    </div>
  )
}
```

- `IndexPage({ posts })`: the result of _getStaticProps()_ should be injected into template as prop.
- We can now get frontmatter in the template now. And the data is also structured.

<br />
