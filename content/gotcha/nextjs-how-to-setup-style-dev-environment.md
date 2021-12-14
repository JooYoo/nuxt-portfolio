---
title: Nextjs setup style dev environment
time: 2021.12.14
keyword: Nextjs
description: Nextjs how to setup style dev environment
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🎯 Goal

How can we install SCSS and TailwindCSS in Next.js project.

<br />

# 🦶🏻 Steps

## Step 1. SCSS

```bash
$ npm install sass
```

- after install, change all the `.css` extension to `.scss`

<br/>

## Step 2. TailwindCSS

[Official: Install Tailwind CSS with Next.js
](https://tailwindcss.com/docs/guides/nextjs)

- The official installation steps are already very well documented. There is even an official start template prepared.

<br/>

# 🧰 Others

## install TailwindCSS IntelliSense

1. install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. add the following to VS Code `settings.json`

```json

"tailwindCSS.includeLanguages": {
	"plaintext": "ts"
},
"editor.quickSuggestions": {
	"strings": true
}

```

<br/>

## 🐞 Unknown at rule @tailwindscss(unknownAtRules)

```json
"files.associations": {
    "*.scss": "postcss"
}
```

- 🔑 in VS Code `settings.json` add this line
