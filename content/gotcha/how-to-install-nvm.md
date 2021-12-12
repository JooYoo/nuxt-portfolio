---
title: How to install nvm
time: 2021.12.12
keyword: trick
description: node how to install nvm
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🎯 Goal

After setup a Next.js project via `npx create-next-app@latest --typescript`. We can't start the project via `npm run dev`. The reason could be that Next.js requires _Node.js 12.22.0 or later_. We have to update the node. **nvm** would be a good solution to manage different node version in one machine.

<br />

# 🔗 Links

- [nvm Github README](https://github.com/nvm-sh/nvm)

<br />

# 🦶🏻 Steps

## Step 0. install nvm via curl or wget

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

```

<br />

to be continue ...
