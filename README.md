# Framestore Task

## Requirements covered

1. Used Twitter & youtube feeds to display
2. Used wall.io as proxy to combine and request various social media posts from Framestore.

## Getting Started with App

This app contains two parts:

1. Create React App - Where the Frontend runs
2. Proxy-Server (folder /proxyServer): It will fetch live feeds of social media posts.

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

## Need of Proxy Server

Using wall.io tool to access all the social media posts.

https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e
https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
