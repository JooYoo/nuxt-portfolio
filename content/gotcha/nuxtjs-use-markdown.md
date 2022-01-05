---
title: Nuxtjs use markdown
time: 2022.01.04
keyword: Nuxtjs
description: Nuxtjs how to use markdown file as data in project
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<br/>
<br/>

# 🎯 Goal

JamStack approach. Markdown files as the data source. All the content write as markdown. And fetch the contents, render them in vue page.

<br/>

# 🛸 Techs

- Nuxt.js
- @nuxt/content
- Markdown

<br/>

# 🌲 File Structure

```javascript
.
├── components/
├── content/
│   └── article/
│       ├── article-1.md
│       └── article-2.md
├── pages/
│   ├── article/
│   │   ├── _slug.vue
│   │   └── index.vue
│   └── index.vue
├── static/
└── package.json
```

<br/>

# 🦶🏻 Steps

## Step 1. install nuxt/content

```bash
$ npm install @nuxt/content
```

- install nuxt/content via npm

```javascript
{
  modules: [
    '@nuxt/content'
  ],
  content: {
    // Options
  }
}
```

- add `@nuxt/content` to the `modules` section of `nuxt.config.js`

<br/>

## Step 2. setup file structure

```js
.
└── content/
    └── article/
        ├── article-1.md
        └── article-2.md
```

- Create a new folder in the root directory and name it `content`, all the markdown files save inside of this folder. `@nuxt/content` can recognize those files in the folder.

```js
.
├── content/
│   └── article/
│       ├── article-1.md
│       └── article-2.md
└── pages/
    ├── article/
    │   ├── _slug.vue
    │   └── index.vue
    └── index.vue
```

<br/>

to be continue...
