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

Jamstack approach. All the content write as Markdown. And fetch the contents, render them in vue page.

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

- Create a `content/` folder, all the content save under this directory. In this case, we have two markdown files, we save them under `content/article/`.
- Under `pages/` create the **same structure** like the _content-directory_ `page/article/`.
  - index.vue: List all the articles.
  - \_slug.vue: The content of the corresponding markdown article.

<br/>

## Step 3. route to article list page

```javascript
<template>
  <div>
    <h4>Home page</h4>
    <NuxtLink to="/article">to Article</NuxtLink>
  </div>
</template>
```

- `pages/index.vue`
- `<NuxtLink>`: Nuxtjs buildIn Component for navigate between pages. We use `to="..."` for page routing. In this case, we navigate to _/article_ folder, we will see the content of page `pages/article/index.vue`.

<br/>

## Step 4. list all article

```javascript

<template>
  <div>
    <h3>Article page</h3>
    <NuxtLink to="/">to Home</NuxtLink>
    <div v-for="article of articles" :key="article.title">
      <li>
        <NuxtLink :to="`/article/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
        -
        {{ article.description }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("article", params.slug)
      .only(["title", "description", "slug"])
      .fetch();

    return {
      articles,
    };
  },
};
</script>
```

- `pages/article/index.vue`

<br/>

## Step 5. get the content of each article

<br/>

to be continue...
