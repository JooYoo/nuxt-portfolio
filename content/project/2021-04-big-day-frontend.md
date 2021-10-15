---
title: Big Day - Frontend
time: 2020.12 ~ 2021.04
description: a tool to track important dates and shows how many days are left
overviewImg: https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80
links:
  - name: 🚀 Demo
    url: https://bigdays.netlify.app/
  - name: 👨🏻‍💻 Github
    url: https://github.com/JooYoo/react-bigDay
screenshots:
  - url: https://i.giphy.com/media/UX4BMkEubyo79Izbq4/giphy.webp
techs:
  - name: React
  - name: JavaScript
  - name: Sass
  - name: HTML
---

<WidgetsMdHeader :title="title" :time="time" :links="links"></WidgetsMdHeader>

<v-container>

<WidgetsMdScreenshot :screenshots="screenshots"></WidgetsMdScreenshot>

<br/>

## About

A Full-Stack WebApp. It helps users to keep track of important dates and shows how many days are left. I used this project to practice my ability to develop full-stack applications. The API and Database of this project which I built, is NOT allowed to be used in other projects.

<br/>

## Link to

TODO:

- 🔗 &nbsp; [Frontend](./2021-10-personal-website)
- 🔗 &nbsp; [Backend](./BigDayBackend.md)

<br/>

## User story

As a user I want to have a tool to keep track of important dates and shows how many days are left, so that I won't missing the important dates.

<br/>

## Technologies

- Code: JSX, Scss, JavaScript
- Library:
  - Frontend Lib: React
  - State Management: useContext
  - Form: Formik
  - API Calling: Axio
- UI: no extra library. Glassmorphism UI design, styling by Scss.
- Deployment: Netlify

<br/>

## Setup

1. clone the project
2. install dependence: `npm i`
3. create `.env` to define **REACT_APP_API_URL**
4. start project: `npm run start`
