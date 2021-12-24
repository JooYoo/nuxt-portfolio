---
title: React scroll to top
time: 2021.12.23
keyword: React
description: React scroll content to top
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

# 🚀 Demo

<iframe src="https://codesandbox.io/embed/react-scroll-to-top-0veb6?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:400px; border: 1px lightgray solid; border-radius: 10px; overflow:hidden; margin-top: 20px;"
     title="react scroll to top"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<br/>
<br/>

# 🎯 Goal

A scrolling button to take user back to top.

<br/>

# 🛸 Techs

- React

<br/>

# 🦶🏻 Steps

## Solution 1.

### Step 1. create ScrollTop Component

```javascript
import React, { useEffect, useState } from 'react'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button className="to-top-btn" onClick={scrollToTop}>
          ⇪
        </button>
      )}
    </>
  )
}

export default ScrollTop
```

- ScrollTop.js
- `scrollToTop`: take advantage of _window_ interface to setup the destination of scroll.
- `useEffect`: React buildIn hook, to add and remove scroll-event-listener.
- `toggleVisibility` + `setIsVisible`: scroll-button is displayed after scrolling to 500 pixels.

<br/>

### Step 2. adapt Styling

```css
.to-top-btn {
  position: fixed;
  right: 10px;
  bottom: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: hotpink;
  color: white;
  font-size: 20px;
}
```

- `fixed`: make the button float at the right-bottom.

<br/>

## Solution 2.
