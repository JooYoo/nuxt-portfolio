---
title: React add global keyboard shortcut
time: 2021.12.19
keyword: React
description: React add global shortcut
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<br/>
<br />

# 🎯 Goal

Add Keyboard short globally in React WebApp. Press white-space to trigger a alert.

<br />

# 🛸 Techs

- React
- JavaScript

# 🦶🏻 Steps

## Step 0. the simple solution

```javascript
import './styles.css'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    window.addEventListener('keyup', onSpace)
    return () => {
      window.removeEventListener('keyup', onSpace)
    }
  }, [])

  const onSpace = (ev) => {
    if (ev.key === ' ') {
      console.log('pressed !!')
    }
  }

  return (
    <div className="App">
      <div>global shortcut</div>
    </div>
  )
}
```

<br />

to be continue ...
