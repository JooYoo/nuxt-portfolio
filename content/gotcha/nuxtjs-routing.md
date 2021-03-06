---
title: Nuxtjs route between pages
time: 2022.01.10
keyword: Nuxtjs
description: Nuxtjs how to route between pages
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# π Demo

<iframe src="https://codesandbox.io/embed/boring-kapitsa-np1z9?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:400px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="nuxt routing"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br/>
<br/>

# π― Goal

Create simple home-page, about-page and contact-page. Each of the page include route-link for routing between them.

<br/>

# πΈ Techs

- Nuxt.js

<br/>

# π² File Structure

```

.
βββ components/
βββ pages/
β   βββ about/
β   β   βββ index.vue
β   βββ contact/
β   β   βββ index.vue
β   βββ index.vue
βββ package.json

```

<br/>

# π¦Άπ» Steps

## Step 1. create pages

- Since Nuxtjs has **File system routing**. We don't need to configure the router manully. All we have to do is create `.vue` files inside of **pages** folder.
- In this case, except `home-page`, we also have `about-page` and `contact-page`.

<br/>

## Step 2. navigate between pages

```vue
<template>
  <div>
    <h3>Home page</h3>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <a href="https://nuxtjs.org">External Link</a>
  </div>
</template>
```

- `pages/index.vue`
- `<NuxtLink to="...">`: Nuxtjs buildIn navigation component. We use `to="..."` to navigate to a specific page.
- `<a>`: When we need to navigate to external Link.

<br>
