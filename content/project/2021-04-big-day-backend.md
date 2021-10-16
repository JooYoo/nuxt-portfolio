---
title: Big Day - Backend
time: 2020.12 ~ 2021.04
description: the Backend part of BigDay project
overviewImg: https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80
links:
  - name: 👨🏻‍💻 Github
    url: https://github.com/JooYoo/node-bigDay
screenshots:
  - url: https://pbs.twimg.com/media/Ew6h31cWEAEe6DP?format=jpg&name=large
techs:
  - name: Nodejs
  - name: MongoDB
  - name: JavaScript
  - name: Express
---

<WidgetsMdHeader :title="title" :time="time" :links="links"></WidgetsMdHeader>

<WidgetsMdScreenshot :screenshots="screenshots"></WidgetsMdScreenshot>

<br/>

## About

The backend of the Project _Big Day_. The frontend of the Project's link see below. I used this project to practice my ability to develop full-stack applications. The API and Database of this project which I built, is NOT allowed to be used in other projects.

<br/>

## Supported Platform

- Web

<br/>

## Link to

- 🔗 &nbsp; [Frontend](./2021-04-big-day-frontend)
- 🔗 &nbsp; [Backend](./2021-04-big-day-backend)

<br/>

## User story

As a user I want to have a tool to keep track of important dates and shows how many days are left, so that I won't missing the important dates.

<br/>

## Technologies

- Code: JavaScript
- Framework:
  - Runtime: Node.js
  - Backend Framework: Express.js
  - Database: MongoDB
  - Database Library: Mongoose
- Deployment: MongoDB Cloud, Heroku

<br/>

## Setup

1. clone the project
2. install dependence: `npm i`
3. create `config/config.env` to define **MONGO_URI**
4. start project: `node server`

<br/>
