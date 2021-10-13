---
title: ML Hand Position Recognition
time: 2019.01 ~ 2019.03
description: a Machine Learning app to recognize hand position
overviewImg: https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
links:
  - name: 🚀 Demo
    url: https://jooyoo.github.io/ML5-mlknn/
  - name: 👨🏻‍💻 Github
    url: https://github.com/JooYoo/ML5-mlknn
screenshots:
  - url: https://live.staticflickr.com/65535/47993649073_601f917fbb_b.jpg
  - url: https://live.staticflickr.com/65535/47993627727_1ba9eaefe2_z.jpg
  - url: https://live.staticflickr.com/65535/47993671341_4b9a7066ea_z.jpg
techs:
  - name: HTML
  - name: CSS
  - name: JavaScript
  - name: ml5
  - name: Chartjs
  - name: Bootstrap
---

<WidgetsMdHeader :title="title" :time="time" :links="links"></WidgetsMdHeader>

<v-container>

<WidgetsMdScreenshot :screenshots="screenshots"></WidgetsMdScreenshot>

<br/>

## About

A Machine Learning app. According to Webcam, the app can recognize is there a hand or not. After data collection, the app can also distinguish the position of the hand. If the prediction result is not enough accurate, the user can collect more data for the specific category to optimize the prediction result.

<br/>

## Supported Platform

- Web
- PWA

<br/>

## **User story**

The project is a prototype for Goods Organize System. The system can be used in warehouses where manual work is required to organize goods. Based on machine learning. The system can recognize the worker's hand and the position of the hand approximately, thus automating the entire goods organizing process and providing work efficiency.

<br/>

## **Technologies**

- Code: HTML, CSS, JavaScript
- Framework: Tensorflow.js, ML5.js, Uikit, Bootstrap
- Deployment: GitHub Pages

<br/>

## **Setup**

1. clone the project
2. start by local server: e.g. vs-code Live-Server extension.

<br/>

</v-container>
