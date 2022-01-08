---
title: Nuxtjs use JSON as data
time: 2021.12.29
keyword: Nuxtjs
description: Nuxtjs how to use JSON file as data in project
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<iframe src="https://codesandbox.io/embed/nuxtjs-use-json-as-data-0ngdy?fontsize=14&hidenavigation=1&theme=light&view=preview"
     style="width:100%; height:400px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="nuxtjs use json as data"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts">
</iframe>

<br/>
<br/>

# 🎯 Goal

Some of the static data is not neccessary to save into Database. We only need a JSON file to hold them. Because they are not often changing.

<br/>

# 🛸 Techs

- Nuxt.js
- JSON

<br/>

# 🦶🏻 Steps

## Step 1. where to put the JSON file

```javascript
.
├── components
├── pages
├── static/
│   └── JsonFile.json
└── package.json
```

- All of the JSON file save under **static/** folder.

<br/>

## Step 2. create the JSON file

```json
[
  {
    "id": 1,
    "name": "Zelda",
    "company": "Nintendo"
  },
  {
    "id": 2,
    "name": "God of War",
    "company": "Sony"
  },
  {
    "id": 1,
    "name": "Halo",
    "company": "Microsoft"
  }
]
```

- `static/Game.json`
- We need double-quotes for each key

<br/>

## Step 3. How to use the JSON file

```js
<script>
import GameJson from "~/static/Game.json";

export default {
  data: () => ({
    games: GameJson,
  }),
};
</script>
```

- `components/GameList.vue`
- `~/`: navigate to the root of the project to import the JSON file
- after _import_ we can use the data as **data** directly

<br/>
