---
title: Swift hide API-KEY
time: 2020.12.05
keyword: Swift
description: How to hide API KEY in iOS project
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

## 🎯 Goal
- Hide API KEY. Make it only available in the local project, not push it to Github.

<br/>

## 🦶🏻 Steps

### Step 1. create xcconfig file

<WidgetsMdImage img-path="gotcha" img-name="swift-hide-api-key-1.png" ></WidgetsMdImage>

- create `Secrets.xcconfig` file

```
API_KEY = 123abc
```
- add API_KEY to the file
