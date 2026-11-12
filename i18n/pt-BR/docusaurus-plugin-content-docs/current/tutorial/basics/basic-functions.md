---
sidebar_position: 5
description: Exemplos do SDK WPPConnect para enviar texto, contatos e arquivos, responder mensagens e sinalizar leitura em Node.js.
---

# Envio de mensagens e mídia com o SDK WPPConnect

Os exemplos usam um cliente já conectado. Para consultar parâmetros e retornos, abra a [referência do cliente Whatsapp](https://wppconnect.io/wppconnect/classes/Whatsapp.html).

## Índice

- [Conversas](#conversas)
  - [sendContactVcard](#sendcontactvcard)
  - [sendContactVcardList](#sendcontactvcardlist)
  - [sendText](#sendtext)
  - [sendLocation](#sendlocation)
  - [sendLinkPreview](#sendlinkpreview)
  - [sendImage](#sendimage)
  - [sendFile](#sendfile)
  - [sendFileFromBase64](#sendfilefrombase64)
  - [sendImageAsStickerGif](#sendimageasstickergif)
  - [sendImageAsSticker](#sendimageassticker)
  - [sendMentioned](#sendmentioned)
  - [reply](#reply)
  - [reply with mention](#reply-with-mention)
  - [sendMessageOptions](#sendmessageoptions)
  - [sendVideoAsGif](#sendvideoasgif)
  - [forwardMessages](#forwardmessages)
  - [sendSeen](#sendseen)
  - [startTyping](#starttyping)
  - [stopTyping](#stoptyping)
  - [setChatState](#setchatstate)

## Conversas

> O identificador `chatId` pode ser `<phoneNumber>@c.us` ou `<phoneNumber>-<groupId>@g.us`

### sendContactVcard

Envie um contato como cartão vCard.

```javascript
await client
  .sendContactVcard('000000000000@c.us', '111111111111@c.us', 'Name of contact')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendContactVcardList

Envie vários contatos como uma lista de cartões vCard.

```javascript
await client
  .sendContactVcardList('000000000000@c.us', [
    '111111111111@c.us',
    '222222222222@c.us',
  ])
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendText

Envie uma mensagem de texto.

```javascript
await client
  .sendText('000000000000@c.us', '👋 Hello from wppconnect!')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendLocation

Envie latitude e longitude para a conversa.

```javascript
await client
  .sendLocation('000000000000@c.us', '-13.6561589', '-69.7309264', 'Brasil')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendLinkPreview

Envie um link com prévia e uma mensagem opcional.

```javascript
await client
  .sendLinkPreview(
    '000000000000@c.us',
    'https://www.youtube.com/watch?v=V1bFr2SWP1I',
    'Kamakawiwo ole'
  )
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendImage

Envie uma imagem de um arquivo local ou de uma URL HTTP.

```javascript
await client
  .sendImage(
    '000000000000@c.us',
    'path/to/img.jpg',
    'image-name',
    'Caption text'
  )
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendFile

Informe o caminho ou a URL do arquivo. O SDK identifica o tipo MIME.

```javascript
await client
  .sendFile(
    '000000000000@c.us',
    'path/to/file.pdf',
    'file_name',
    'See my file in pdf'
  )
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendFileFromBase64

Envie o arquivo codificado em base64.

> Inclua o tipo MIME no parâmetro base64.

```javascript
await client
  .sendFileFromBase64(
    '000000000000@c.us',
    base64PDF,
    'file_name.pdf',
    'See my file in pdf'
  )
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendImageAsStickerGif

Envie uma figurinha animada a partir de uma imagem GIF ou WebP. O exemplo usa um arquivo local.

```javascript
await client
  .sendImageAsStickerGif('000000000000@c.us', './image.gif')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendImageAsSticker

Envie uma imagem PNG, JPG ou WebP como figurinha.

```javascript
await client
  .sendImageAsSticker('000000000000@c.us', './image.jpg')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
```

### sendMentioned

Envie uma mensagem mencionando um contato.

```javascript
await client.sendMentioned(
  '000000000000@c.us',
  'Hello @5218113130740 and @5218243160777!',
  ['5218113130740', '5218243160777']
);
```

### reply

Responda a uma mensagem pelo identificador.

```javascript
await client.reply(
  '000000000000@c.us',
  'This is a reply!',
  message.id.toString()
);
```

### reply with mention

Responda à mensagem e mencione um contato.

```javascript
await client.reply(
  '000000000000@c.us',
  'Hello @5218113130740 and @5218243160777! This is a reply with mention!',
  message.id.toString(),
  ['5218113130740', '5218243160777']
);
```

### sendMessageOptions

Defina as opções de envio da mensagem.

```javascript
await client
    .sendMessageOptions(
      '000000000000@c.us',
      'This is a reply!',
       {
          quotedMessageId: reply,
        }
    )
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });

```

### sendVideoAsGif

Envie o vídeo como GIF.

```javascript
await client.sendVideoAsGif(
  '000000000000@c.us',
  'path/to/video.mp4',
  'video.gif',
  'Gif image file'
);
```

### forwardMessages

Encaminhe mensagens para outra conversa.

```javascript
await client.forwardMessages(
  '000000000000@c.us',
  [message.id.toString()],
  true
);
```

### sendSeen

Marque as mensagens da conversa como lidas.

```javascript
await client.sendSeen('000000000000@c.us');
```

### startTyping

Exiba o indicador de digitação.

```javascript
await client.startTyping('000000000000@c.us');
```

### stopTyping

Encerre o indicador de digitação.

```javascript
await client.stopTyping('000000000000@c.us');
```

### setChatState

Defina o estado da conversa com 0 para digitação, 1 para gravação ou 2 para pausa.

```javascript
await client.setChatState('000000000000@c.us', 0 | 1 | 2);
```
