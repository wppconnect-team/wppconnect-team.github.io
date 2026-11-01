---
title: Getting started
sidebar_position: 1
description: Connect your first session and send a message with WPPConnect.
---

# Your first connection starts here.

Build a WhatsApp integration with the WPPConnect Node.js library. Follow the steps below to install the package, connect a session, and handle your first messages.

## 01. Install the library

Add WPPConnect to your Node.js project:

```bash
npm install @wppconnect-team/wppconnect
```

[Check installation requirements and environment setup](./basics/installation.md).

## 02. Connect a session

Create a client, then scan the QR code shown in your terminal with your WhatsApp account.

```javascript
const wppconnect = require("@wppconnect-team/wppconnect");

wppconnect.create({ session: "my-session" }).then((client) => {
  client.onMessage((message) => {
    if (message.body === "ping") {
      client.sendText(message.from, "pong");
    }
  });
});
```

[Learn how to create and configure a client](./basics/creating-client.md).

## 03. Build your workflow

- [Receive messages](./basics/receiving-messages.md) and respond to incoming events.
- [Explore basic functions](./basics/basic-functions.md) for messages, contacts, and groups.
- [Configure logging](./basics/configuring-logger.md) to follow what your integration is doing.

:::tip Prefer an HTTP API?
Use [WPPConnect Server](../projects/wppserver/introduction.md) to integrate with other languages through REST endpoints and webhooks.
:::

## Build with the community

Ask questions on [Discord](https://discord.gg/JU5JGGKGNG), follow tutorials on [YouTube](https://www.youtube.com/c/wppconnect), or contribute on [GitHub](https://github.com/wppconnect-team/wppconnect).

## License

Copyright 2021 WPPConnect Team

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
