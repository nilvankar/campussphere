# CampusSphere

- [installation](#installation)
-[vite](#vite) 
-[react](#react)
-[node](#node)
-[express](#express)
-[mongodb](#mongodb)

# installation


# vite
A front-end build tool that aims to provide a faster and leaner development experience for modern web projects.
------why
->A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

->A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
Vite support multi javascript libraries such as Vue.js,Angular,React and Vanila
Also it support Typescript feature.
```javascript
// create new project
npm create vite@latest
// install package press y
?Project name:react-app
?Select Framework:react
?Select a Variant:javascript

cd react-app

npm install 
//  npm i ---shorter syntax
npm run dev //start development server

```
vite run on 5173 port

# react
-React is a javascript library that allows us to build single page application where only one index.html file and everything else is handle by App component and its custom component.
React latest version is 18
popularity-40%
Install from [react-install](https://legacy.reactjs.org/)

# node
Node.js is a runtime enviornment of javascript to write javascript code in server side rather than client side(browsers).
Latest version:20
npm (node package manager) is a default package manager that used to install dependencies in project
```javascript
// to run javascript code open terminal and type 
nodemon .\file_path\
```
# express
->Express js is a web framework built on top of nodejs to build robust apis 
Latest-version:4.18.2
express download [install express](#https://www.npmjs.com/package/express)
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
In the above simple express code first iport express from express package then app=express() class assign to app and port=3000 where listen method is called return a callback function that log port with a message "hello world" comming from get method ('/) route.

# mongodb
Mongodb is a no-sql document based database 
It stores data in form of json (array of object with each entity unique id_)
Advantages:
No strict schemas
full cloud based so no additional downloads
Mongodb atlas a cloud service that provide 500mb of free storage to developers.
JSON(javascript object notation ) a type of data interchange format that stores array of objects
From mongodb official website [mongodb install](#https://www.mongodb.com/)
```javascript

```