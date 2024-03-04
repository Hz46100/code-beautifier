# Code Beautification Demo

## Introduction

This application is built upon Node.js, Express, and js-beautify technologies, offering interactive front-end and back-end code beautification capabilities. Users can input JavaScript code into a text area on the front-end page; upon clicking the "Beautify" button, the front-end transmits the code to the back-end server using AJAX technology. The back-end then processes the code using js-beautify and returns the beautified code to the front-end for display. Additionally, the application supports copying the beautified code to the clipboard and downloading it as a `.js` file.

### File Structure Overview

```
├── package.json
├── public
│   ├── index.html
│   └── client.js
└── server.js
```

### How to Run

#### 1. Install Dependencies

Run the following commands in the project root directory:

```sh
npm init -y
npm install express js-beautify axios body-parser
```

#### 2. Start the Back-end Service

Execute the following command to start the back-end server:

```sh
node server.js
```

#### 3. Access the Front-end Page

After successfully starting the service, open your browser and navigate to `http://localhost:3000` to experience the code beautification functionality.