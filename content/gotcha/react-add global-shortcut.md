---
title: React add global keyboard shortcut
time: 2021.12.19
keyword: React
description: React add global shortcut
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<iframe src="https://codesandbox.io/embed/global-shortcut-45b3g?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:200px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="global shortcut"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br/>
<br />

# 🎯 Goal

Add Keyboard shortcut globally in React WebApp. Press white-space to trigger a alert.

<br />

# 🛸 Techs

- React
- JavaScript

<br />

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

- `useEffect`: React buildIn hook. It will be called when the component mount.
- `return`: it will run when current component unmount.
- `[]`: this hook will only be called once.
- `window.addEventListener('keyup', onSpace)`: JS buildIn event-listener for window. In this case, when key-white-space is pressed, then log.

<br />

## Step 1. create custom Hook

```javascript
import { useEffect } from 'react'

function useGlobalDOMEvents(props) {
  useEffect(() => {
    for (let [key, func] of Object.entries(props)) {
      window.addEventListener(key, func, false)
    }
    return () => {
      for (let [key, func] of Object.entries(props)) {
        window.removeEventListener(key, func, false)
      }
    }
  }, [])
}

export default useGlobalDOMEvents
```

- `useGlobalDOMEvents.js`
- define the custom Hook
- This hook contains a `useEffect()` which iterate the prop as Object.entries, to add the eventListener when the component mount, to remove the eventListener when the component unmount

```javascript
import './styles.css'
import useGlobalDOMEvents from './hooks/useGlobalDOMEvents'

export default function App() {
  useGlobalDOMEvents({
    keyup(ev) {
      if (ev.key === ' ') {
        console.log('pressed !!')
      }
    },
  })

  return (
    <div className="App">
      <div>global shortcut</div>
    </div>
  )
}
```

- `App.js`
- Custom Hook implementation
- `{ keyup(ev) }`: The type of eventListern as parameter of the custom Hook. In this case, _keyup_. Now we also have the ability to choose the shortcut key when we use the custom hook.

<br />
