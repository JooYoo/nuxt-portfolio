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

<br/>

### Step 2. attach xcconfig to the project configuration

<WidgetsMdImage img-path="gotcha" img-name="swift-hide-api-key-2.png" ></WidgetsMdImage>

- Project -> Configurations -> Debug / Release Configuration Set
- They can be set up differently if necessary.

<br/>

### Step 3. add a new key-value-pair to `.plist`

<WidgetsMdImage img-path="gotcha" img-name="swift-hide-api-key-2.png" ></WidgetsMdImage>

- `API_KEY`: `$(API_KEY)`
- For SwiftUI there is no `.plist` file, add the key-value-pair at _Custom iOS Target Properties_ as above

<br/>

### Step 4. create a function to get API_KEY

```swift
func getKey() -> String{
    // get apiKey from Bundle
    let apiKey = Bundle.main.object(forInfoDictionaryKey: "API_KEY") as? String
    
    // check if key is ok
    guard let key = apiKey, !key.isEmpty else {
        print("API key does not exist")
        return ""
    }
    
    return key
}
```

<br/>