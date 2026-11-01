---
title: Primeiros passos
sidebar_position: 1
description: Conecte sua primeira sessão e envie uma mensagem com WPPConnect.
---

# Sua primeira conexão começa aqui.

Crie uma integração com WhatsApp usando a biblioteca WPPConnect para Node.js. Siga os passos para instalar o pacote, conectar uma sessão e receber suas primeiras mensagens.

## 01. Instale a biblioteca

Adicione WPPConnect ao seu projeto Node.js:

```bash
npm install @wppconnect-team/wppconnect
```

[Confira os requisitos e a configuração do ambiente](/pt-BR/docs/tutorial/basics/installation).

## 02. Conecte uma sessão

Crie um cliente e escaneie o QR code exibido no terminal com sua conta do WhatsApp.

```javascript
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({ session: 'my-session' }).then((client) => {
  client.onMessage((message) => {
    if (message.body === 'ping') {
      client.sendText(message.from, 'pong');
    }
  });
});
```

[Aprenda a criar e configurar um cliente](/pt-BR/docs/tutorial/basics/creating-client).

## 03. Crie seu fluxo

- [Receba mensagens](/pt-BR/docs/tutorial/basics/receiving-messages) e responda aos eventos recebidos.
- [Explore as funções básicas](/pt-BR/docs/tutorial/basics/basic-functions) de mensagens, contatos e grupos.
- [Configure os logs](/pt-BR/docs/tutorial/basics/configuring-logger) para acompanhar sua integração.

:::tip Prefere uma API HTTP?
Use [WPPConnect Server](/pt-BR/docs/projects/wppserver/introduction) para integrar outras linguagens usando endpoints REST e webhooks.
:::

## Construa com a comunidade

Tire dúvidas no [Discord](https://discord.gg/JU5JGGKGNG), acompanhe tutoriais no [YouTube](https://www.youtube.com/c/wppconnect) ou contribua no [GitHub](https://github.com/wppconnect-team/wppconnect).

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
