---
title: nvm installation
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

## Step 1. add script for loading nvm

```bash
$ cd ~
```

- ahead to the root directory
- display hide files by `⌘` + `⇧` + `.`

```bash

[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh  # This loads NVM
```

- add this line of code in the end of `.bash_profile`

```bash

$ sudo chown [mac-user-name] ~/.bash_profile

```

- 🐞 if error: `.bash_profile` not allow to edit, type the command above to fix it.

<br />

## Step 1+. Terminal is **zsh**

```bash

$ touch ~/.zshrc

```

- We will need to edit `zshrc`, if there is no such file, then create manully at root

```bash

source ~/.nvm/nvm.sh

```

- add this line of code in `zshrc` to clarify where to find nvm.

<br />

## Step 2 restart Terminal
