---
title: Personal Website v3
time: 2021-08 ~ 2021-10
description: my personal website 3rd generation
overviewImg: https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=920&q=80
links:
  - name: 🚀 Demo
    url: https://zhuyu.netlify.app
  - name: 👨🏻‍💻 Github
    url: https://github.com/JooYoo/nuxt-portfolio
screenshots:
  - url: https://media.giphy.com/media/d2drFJQxQaKuCqOZgZ/giphy-downsized-large.gif
techs:
  - name: Nuxtjs
  - name: Vuetify
  - name: Sass
  - name: markdown
  - name: HTML
  - name: JavaScript

titlev2: Personal Website v2
timev2: 2020-05 ~ 2020-10
descriptionv2: my personal website 2nd generation
linksv2:
  - name: 🚀 Demo
    url: https://zhuyu-vuepress.netlify.app/
  - name: 👨🏻‍💻 Github
    url: https://github.com/JooYoo/vuepress-portfolio
screenshotsv2:
  - url: https://media1.giphy.com/media/AKamuejzQCIp40xv87/giphy.gif

titlev1: Personal Website v1
timev1: 2018-11 ~ 2019-06
descriptionv1: my personal website 1st generation
linksv1:
  - name: 🚀 Demo
    url: https://jooyoo.github.io/Vue-potfolio/
  - name: 👨🏻‍💻 Github
    url: https://github.com/JooYoo/Vue-potfolio
screenshotsv1:
  - url: https://media.giphy.com/media/zn6piOI3Y1m5mmhZma/giphy.gif
---

<WidgetsMdHeader :title="title" :time="time" :links="links"></WidgetsMdHeader>

<v-container>

<WidgetsMdScreenshot :screenshots="screenshots"></WidgetsMdScreenshot>

<br/>

## About

A website to introduce myself, list my side projects, my music and share what I've learned about development. Server Sider Rendering, SEO friendly. Take advantage of static site generator, the data save as markdown, no database needed. It's the 3rd generation.

<br/>

## User story

As a developer, I want to have a platform to introduce myself and showcase the projects I created, so that I have a better chance to find a job; as a lifelong learner, I want to have a space to summarise the knowledge I've learned, and share with the world so that I can get more from the study and perhaps also help the people who is trying to learn the same topic like me.

<br/>

## Supported Platform

- Web

<br/>

## Technologies

- Code: HTML, CSS, JavaScript
- Data: Markdown
- Frontend framework: Vue.js; Nuxt.js
- UI library: Vuetify
- Styling: SCSS
- Deployment: Netlify

<br/>

## Setup

```bash

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

<br/>

<hr>

<WidgetsMdHeader :title="titlev2" :time="timev2" :links="linksv2"></WidgetsMdHeader>

<WidgetsMdScreenshot :screenshots="screenshotsv2"></WidgetsMdScreenshot>

## About V2

VuePress is a Vue powered Static Site Generator. It's usually used for building Documents Website quickly. I used it to build my personal site. The Data is written as Marddown, no Database needed.

<br/>

## Technologies

- Code: HTML, CSS, JavaScript
- Frontend: Vuepress
- UI Library: Vuetify
- Deployment: Netlify

<br/>

<hr>

<WidgetsMdHeader :title="titlev1" :time="timev1" :links="linksv1"></WidgetsMdHeader>

<WidgetsMdScreenshot :screenshots="screenshotsv1"></WidgetsMdScreenshot>

<br/>

## About V1

My first Vue project. All the data in the Website is hard coded in the source code 😳.

<br/>

## Technologies

- Code: HTML, CSS, JavaScript
- Frontend: Vue
- UI Library: Vuetify
- Deployment: GitHub Pages

<br/>

</v-container>
