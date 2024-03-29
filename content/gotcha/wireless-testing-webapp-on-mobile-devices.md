---
title: Wireless testing WebApp on Mobile devices
time: 2020.11.29
keyword: trick
description: how to test WebApp on mobile devices
---

<WidgetsMdHeader :title="title" :time="time"></WidgetsMdHeader>

## 🎯 Goal

A WebApp is developed at a local PC. How to debug the WebApp on the phone?

<br/>

## 🦶🏻 Steps

### Step 0: prepare devices

- PC
- Mobile device
- vs code
- vs code extention: Live Server

### Step 1: find IP address of the PC

- Get the computer IP address: `> ipconfig`
- It seems something like this in Terminal `IPv4 Address. . . . . . : 192.168.x.x`

### Step 2: run the WebApp locally

- Start the WebApp locally via _VS Code Live Server_.
- Go ahead to the address based on _live Server_, e.g. `http://192.168.x.x:5500/`
- start _Chrome DevTool_, input the address `chrome://inspet`

### Step 3: run the WebApp on mobile devices

- Connect the mobile devices to the same network as the dev-pc
- Input the same ip-address on your moble devices browser last step `http://192.168.x.x:5500/`
- Because the WebApp is already running via _Live Server_ by PC locally. When another mobile device visit the same address should also see the WebApp.

<br/>
