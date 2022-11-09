# Framestore Task

## Requirements Analysis

### Functional Requirements

1. Used Twitter & Youtube feeds of Framestore to display
2. Each card is displayed with Feed info (Image, title, description) and site it came from with Logo
3. Click of each card will take to specific post on the medium platform.

### System Requirements

1. Feed: Unified API that has all feed information from various platforms. Used wall.io private API for this need.
2. Proxy Server: Wall.io doesn't support client side request due to security concerns. Need to run a proxy server to hit wall.io API and serve results.
3. Support Responsive/Mobile
4. Auto Scroll support: On scroll load the components.
5. Loading state, Error state and functioning Scenarios.

## Getting Started with App

This app contains two parts:

1. Create React App - Where the Frontend runs
2. Proxy-Server (folder /proxyServer): It will fetch live feeds of social media posts.

Frontend - React, CRA
Backend - ExpressJS

## Start Server

Need to start two server to run the app.

1. Front End

- Setup
  - Install dependencies: `npm install`
- Run
  - Start Landing server: `npm start`, browse at http://localhost:3000

2. Proxy server

- Setup
  - Move to : `/proxyServer` folder
- Run
  - Start server: `node app`, which runs on http://localhost:8080

## Links

Using wall.io tool to access all the social media posts.

https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e
https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/

## Things I wanted to do if I have more time

1. Bonus features
2. Auto-Scroll implementation - viewing more feeds on scroll.
