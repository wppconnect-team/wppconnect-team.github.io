---
title: Installation
sidebar_position: 2
---

Wppconnect Server is a ready-to-use API, just download, install, and start using, simple as that.


## Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). 
You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installation

Install the dependencies and start the server.

```sh
yarn install
//or
npm install
```

## Install puppeteer dependencies:

```sh
sudo apt-get install -y libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
```

## Clone repository

```sh

git clone https://github.com/wppconnect-team/wppconnect-server.git && cd wppconnect-server

```

## Install Google Chrome

```sh

wget -c https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

sudo apt-get update

sudo apt-get install libappindicator1

sudo dpkg -i google-chrome-stable_current_amd64.deb

```

## Run Server

```sh
yarn dev
```

## Build Server

```sh
yarn build
```

---

# Configuration

This server use config.ts file to define some options, default values are:

```javascript
{
  /* secret key to genereta access token */
  "secretKey": "THISISMYSECURETOKEN",
  "host": "http://localhost",
  "port": "21465",
  // create userDataDir for each puppeteer instance for working with Multi Device
  "customUserDataDir": "./userDataDir/",
  // starts all sessions when starting the server.
  "startAllSession": true,
  // sets the maximum global listeners. 0 = infinity.
  "maxListeners": 15,
  "webhook": {
    "url": null,
    // automatically downloads files to upload to the webhook
    "autoDownload": true,
    //marks messages as read when the webhook returns ok
    "readMessage": false,
    //sends all unread messages to the webhook when the server starts
    "allUnreadOnStart": true
  },
  //functionality that archives conversations, runs when the server starts
  "archive": {
    "enable": true,
    //maximum interval between filings.
    "waitTime": 10,
    "daysToArchive": 45
  },
  "log": {
    "level": "error",
    "logger": [ "console", "file" ]
  },
  "createOptions": {
    "browserArgs": ["--no-sandbox"]
  }
}
```

# Secret Key

Your `secretKey` is inside the `config.json` file. You must change the default value to one that only you know.

<!-- ![Peek 2021-03-25 09-33](https://user-images.githubusercontent.com/40338524/112473515-3b310a80-8d4d-11eb-94bb-ff409c91d9b8.gif) -->

# Generate Token

To generate an access token, you must use your `SECRET_KEY`.

Using the route:

```shell
  curl -X POST --location "http://localhost:21465/api/mySession/eUsouSeCreTo/generate-token"
```

### Response:

```json
{
  "status": "Success",
  "session": "mySession",
  "token": "$2b$10$duQ5YYV6fojn5qFiFv.aEuY32_SnHgcmxdfxohnjG4EHJ5_Z6QWhe",
  "full": "wppconnect:$2b$10$duQ5YYV6fojn5qFiFv.aEuY32_SnHgcmxdfxohnjG4EHJ5_Z6QWhe"
}
```

# Using Token

Save the value of the "full" response. Then use this value to call the routes.

# Examples

```sh
#Starting Session
# /api/:session/start-session

curl -X POST --location "http://localhost:21465/api/mySession/start-session" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer \$2b\$10\$JcHd97xHN6ErBuiLd7Yu4.r6McvOvEZZDQTQwev2MRK_zQObUZZ9C"
```

```sh
#Get QrCode
# /api/:session/start-session
# when the session is starting if the method is called again it will return the base64 qrCode

curl -X POST --location "http://localhost:21465/api/mySession/start-session" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer \$2b\$10\$JcHd97xHN6ErBuiLd7Yu4.r6McvOvEZZDQTQwev2MRK_zQObUZZ9C"
```

```sh
#Send Message
# /api/:session/send-message
curl -X POST --location "http://localhost:21465/api/mySession/send-message" \
    -H "Content-Type: application/json; charset=utf-8" \
    -H "Accept: application/json" \
    -H "Authorization: Bearer \$2b\$10\$8aQFQxnWREtBEMZK_iHMe.u7NeoNkjL7s6NYai_83Pb31Ycss6Igm" \
    -d "{
          \"phone\": \"5511982743910\",
          \"message\": \"*Abner* Rodrigues\"
        }"
```

See the `routes file` for all the routes. [here](https://github.com/wppconnect-team/wppconnect-server/blob/main/src/routes/index.ts) and HTTP [file](https://github.com/wppconnect-team/wppconnect-server/blob/main/requests.http).

## Documentations
Access our documentation on [postman](https://documenter.getpostman.com/view/9139457/TzshF4jQ) 

Access our documentation on [Swagger](https://wppconnect.io/swagger/wppconnect-server)

Or Swagger UI in your server. Acess router: "IP:PORT/api-docs"
