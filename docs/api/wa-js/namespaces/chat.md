---
id: "chat"
title: "Namespace: chat"
sidebar_label: "chat"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [AudioMessageOptions](../interfaces/chat.AudioMessageOptions.md)
- [AutoDetectMessageOptions](../interfaces/chat.AutoDetectMessageOptions.md)
- [DeleteMessageReturn](../interfaces/chat.DeleteMessageReturn.md)
- [DocumentMessageOptions](../interfaces/chat.DocumentMessageOptions.md)
- [FileMessageOptions](../interfaces/chat.FileMessageOptions.md)
- [GetMessagesOptions](../interfaces/chat.GetMessagesOptions.md)
- [ImageMessageOptions](../interfaces/chat.ImageMessageOptions.md)
- [LinkPreviewOptions](../interfaces/chat.LinkPreviewOptions.md)
- [ListMessageOptions](../interfaces/chat.ListMessageOptions.md)
- [LocationMessageOptions](../interfaces/chat.LocationMessageOptions.md)
- [MessageButtonsOptions](../interfaces/chat.MessageButtonsOptions.md)
- [SendMessageOptions](../interfaces/chat.SendMessageOptions.md)
- [SendMessageReturn](../interfaces/chat.SendMessageReturn.md)
- [StarMessageReturn](../interfaces/chat.StarMessageReturn.md)
- [StickerMessageOptions](../interfaces/chat.StickerMessageOptions.md)
- [VCardContact](../interfaces/chat.VCardContact.md)
- [VideoMessageOptions](../interfaces/chat.VideoMessageOptions.md)

## Chat Functions

- [canMute](chat.md#canmute)
- [clear](chat.md#clear)
- [delete](chat.md#delete)
- [find](chat.md#find)
- [get](chat.md#get)
- [markIsComposing](chat.md#markiscomposing)
- [markIsPaused](chat.md#markispaused)
- [markIsRead](chat.md#markisread)
- [markIsRecording](chat.md#markisrecording)
- [markIsUnread](chat.md#markisunread)
- [mute](chat.md#mute)
- [openChatAt](chat.md#openchatat)
- [openChatBottom](chat.md#openchatbottom)
- [openChatFromUnread](chat.md#openchatfromunread)
- [unmute](chat.md#unmute)

## Message Functions

- [deleteMessage](chat.md#deletemessage)
- [downloadMedia](chat.md#downloadmedia)
- [generateMessageID](chat.md#generatemessageid)
- [getMessageById](chat.md#getmessagebyid)
- [getMessages](chat.md#getmessages)
- [sendFileMessage](chat.md#sendfilemessage)
- [sendListMessage](chat.md#sendlistmessage)
- [sendLocationMessage](chat.md#sendlocationmessage)
- [sendRawMessage](chat.md#sendrawmessage)
- [sendReactionToMessage](chat.md#sendreactiontomessage)
- [sendTextMessage](chat.md#sendtextmessage)
- [sendVCardContactMessage](chat.md#sendvcardcontactmessage)
- [starMessage](chat.md#starmessage)

## Type aliases

### AllMessageOptions

Ƭ **AllMessageOptions**: [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) & [`LinkPreviewOptions`](../interfaces/chat.LinkPreviewOptions.md) & [`MessageButtonsOptions`](../interfaces/chat.MessageButtonsOptions.md) & `Partial`<[`ListMessageOptions`](../interfaces/chat.ListMessageOptions.md)\>

#### Defined in

[packages/wa-js/src/chat/defaultSendMessageOptions.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/defaultSendMessageOptions.ts#L24)

___

### RawMessage

Ƭ **RawMessage**: [`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>

#### Defined in

[packages/wa-js/src/chat/types.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L114)

___

### TextMessageOptions

Ƭ **TextMessageOptions**: [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) & [`MessageButtonsOptions`](../interfaces/chat.MessageButtonsOptions.md) & [`LinkPreviewOptions`](../interfaces/chat.LinkPreviewOptions.md)

#### Defined in

[packages/wa-js/src/chat/functions/sendTextMessage.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendTextMessage.ts#L27)

## Variables

### defaultSendMessageOptions

• `Const` **defaultSendMessageOptions**: [`AllMessageOptions`](chat.md#allmessageoptions)

#### Defined in

[packages/wa-js/src/chat/defaultSendMessageOptions.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/defaultSendMessageOptions.ts#L29)

## Chat Functions

### canMute

▸ **canMute**(`chatId`): `boolean`

Check if is possible to mute this chat

**`example`**
```javascript
const canMute = WPP.chat.canMute('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/chat/functions/canMute.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/canMute.ts#L30)

___

### clear

▸ **clear**(`chatId`, `keepStarred?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `keepStarred`: `boolean` ; `status`: `number` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Clear a chat message

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) | `undefined` |
| `keepStarred` | `boolean` | `true` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `keepStarred`: `boolean` ; `status`: `number` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/clear.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/clear.ts#L26)

___

### delete

▸ **delete**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Delete a chat

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/delete.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/delete.ts#L26)

___

### find

▸ **find**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

Find a chat by id

This create a new chat if no one was found

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/find.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/find.ts#L28)

___

### get

▸ **get**(`chatId`): [`ChatModel`](../classes/whatsapp.ChatModel.md) \| `undefined`

Find a chat by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`ChatModel`](../classes/whatsapp.ChatModel.md) \| `undefined`

#### Defined in

[packages/wa-js/src/chat/functions/get.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/get.ts#L25)

___

### markIsComposing

▸ **markIsComposing**(`chatId`, `duration?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Mark a chat to composing state
and keep sending "is writting a message"

**`example`**
```javascript
// Mark is composing
WPP.chat.markIsComposing('[number]@c.us');

// Mark is composing for 5 seconds
WPP.chat.markIsComposing('[number]@c.us', 5000);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `duration?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/chat/functions/markIsComposing.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/markIsComposing.ts#L35)

___

### markIsPaused

▸ **markIsPaused**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Mark a chat is paused state

**`example`**
```javascript
// Mark as recording
WPP.chat.markIsPaused('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/chat/functions/markIsPaused.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/markIsPaused.ts#L30)

___

### markIsRead

▸ **markIsRead**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `unreadCount`: `number` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md) = chat.id }\>

Mark a chat as read and send SEEN event

**`example`**
```javascript
// Some messages
WPP.chat.markIsRead('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `unreadCount`: `number` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md) = chat.id }\>

#### Defined in

[packages/wa-js/src/chat/functions/markIsRead.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/markIsRead.ts#L31)

___

### markIsRecording

▸ **markIsRecording**(`chatId`, `duration?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Mark a chat to recording state
and keep sending "is recording"

**`example`**
```javascript
// Mark is recording
WPP.chat.markIsRecording('[number]@c.us');

// Mark is recording for 5 seconds
WPP.chat.markIsRecording('[number]@c.us', 5000);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `duration?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/chat/functions/markIsRecording.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/markIsRecording.ts#L35)

___

### markIsUnread

▸ **markIsUnread**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `wid`: [`Wid`](../classes/whatsapp.Wid.md) = chat.id }\>

Mark a chat as unread

**`example`**
```javascript
// Some messages
WPP.chat.markIsUnread('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `wid`: [`Wid`](../classes/whatsapp.Wid.md) = chat.id }\>

#### Defined in

[packages/wa-js/src/chat/functions/markIsUnread.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/markIsUnread.ts#L31)

___

### mute

▸ **mute**(`chatId`, `time`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `expiration`: `number` = chat.mute.expiration; `isMuted`: `boolean` = chat.mute.isMuted; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Mute a chat, you can use duration or expiration
For expiration, use unix timestamp (seconds only)
For duration, use seconds

**`example`**
```javascript
// Mute for 60 seconds
WPP.chat.mute('[number]@c.us', {duration: 60});

// Mute util 2021-01-01
WPP.chat.mute('[number]@c.us', {expiration: 1641006000});

// or using date
const expiration = new Date('2022-01-01 00:00:00');
WPP.chat.mute('[number]@c.us', {expiration: expiration});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `time` | { `expiration`: `number` \| [`Date`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )  } \| { `duration`: `number`  } |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `expiration`: `number` = chat.mute.expiration; `isMuted`: `boolean` = chat.mute.isMuted; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/mute.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/mute.ts#L41)

___

### openChatAt

▸ **openChatAt**(`chatId`, `messageId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Open the chat in the WhatsApp interface in a specific message

**`example`**
```javascript
await WPP.chat.openChatAt('[number]@c.us', <message_id>);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `messageId` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/chat/functions/openChatAt.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/openChatAt.ts#L31)

___

### openChatBottom

▸ **openChatBottom**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Open the chat in the WhatsApp interface in bottom position

**`example`**
```javascript
await WPP.chat.openChatBottom('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/chat/functions/openChatBottom.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/openChatBottom.ts#L30)

___

### openChatFromUnread

▸ **openChatFromUnread**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Open the chat in the WhatsApp interface from first unread message

**`example`**
```javascript
await WPP.chat.openChatFromUnread('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/chat/functions/openChatFromUnread.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/openChatFromUnread.ts#L30)

___

### unmute

▸ **unmute**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Unmute a chat

**`example`**
```javascript
WPP.chat.unmute('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/chat/functions/unmute.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/unmute.ts#L30)

___

## Message Functions

### deleteMessage

▸ **deleteMessage**(`chatId`, `id`, `deleteMediaInDevice`, `revoke`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteMessageReturn`](../interfaces/chat.DeleteMessageReturn.md)\>

Delete a message

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `id` | `string` |
| `deleteMediaInDevice` | `boolean` |
| `revoke` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteMessageReturn`](../interfaces/chat.DeleteMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/deleteMessage.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/deleteMessage.ts#L34)

▸ **deleteMessage**(`chatId`, `ids`, `deleteMediaInDevice`, `revoke`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteMessageReturn`](../interfaces/chat.DeleteMessageReturn.md)[]\>

Delete a list of messages

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `ids` | `string`[] |
| `deleteMediaInDevice` | `boolean` |
| `revoke` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteMessageReturn`](../interfaces/chat.DeleteMessageReturn.md)[]\>

#### Defined in

[packages/wa-js/src/chat/functions/deleteMessage.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/deleteMessage.ts#L45)

___

### downloadMedia

▸ **downloadMedia**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Blob`\>

Download the blob of a media message

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Blob`\>

#### Defined in

[packages/wa-js/src/chat/functions/downloadMedia.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/downloadMedia.ts#L26)

___

### generateMessageID

▸ **generateMessageID**(`chat`): [`MsgKey`](../classes/whatsapp.MsgKey.md)

Generate a new message ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`MsgKey`](../classes/whatsapp.MsgKey.md)

#### Defined in

[packages/wa-js/src/chat/functions/generateMessageID.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/generateMessageID.ts#L26)

___

### getMessageById

▸ **getMessageById**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>

Get message by a single ID or array of IDs

**`example`**
```javascript
// Single message
WPP.chat.getMessageById('true_[number]@c.us_ABCDEF');

// List of messages
WPP.chat.getMessageById(['true_[number]@c.us_ABCDEF', 'false_[number]@c.us_789456']);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>

List of raw messages

#### Defined in

[packages/wa-js/src/chat/functions/getMessageById.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/getMessageById.ts#L40)

▸ **getMessageById**(`ids`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | (`string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)[]\>

#### Defined in

[packages/wa-js/src/chat/functions/getMessageById.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/getMessageById.ts#L41)

___

### getMessages

▸ **getMessages**(`chatId`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RawMessage`](chat.md#rawmessage)[]\>

Fetch messages from a chat

**`example`**
```javascript
// Some messages
WPP.chat.getMessages('[number]@c.us', {
  count: 20,
});

// All messages
WPP.chat.getMessages('[number]@c.us', {
  count: -1,
});

// 20 messages before specific message
WPP.chat.getMessages('[number]@c.us', {
  count: 20,
  direction: 'before',
  id: '<full message id>'
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `options` | [`GetMessagesOptions`](../interfaces/chat.GetMessagesOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`RawMessage`](chat.md#rawmessage)[]\>

List of raw messages

#### Defined in

[packages/wa-js/src/chat/functions/getMessages.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/getMessages.ts#L54)

___

### sendFileMessage

▸ **sendFileMessage**(`chatId`, `content`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a file message, that can be an audio, document, image, sticker or video

**`example`**
```javascript
// Single document
WPP.chat.sendFileMessage(
 '[number]@c.us',
 'data:image/jpeg;base64,<a long base64 file...>',
 {
   type: 'document',
   caption: 'My document', // Optional
   filename: 'myfile.doc', // Optional
   mimetype: 'application/msword' // Optional
 }
);

// Image with view once
WPP.chat.sendFileMessage(
 '[number]@c.us',
 'data:image/jpeg;base64,<a long base64 file...>',
 {
   type: 'image',
   caption: 'My image', // Optional
   isViewOnce: true
 }
);

// PTT audio
WPP.chat.sendFileMessage(
 '[number]@c.us',
 'data:audio/mp3;base64,<a long base64 file...>',
 {
   type: 'audio',
   isPtt: true // false for common audio
 }
);

// Image with view buttons
WPP.chat.sendFileMessage(
 '[number]@c.us',
 'data:image/jpeg;base64,<a long base64 file...>',
 {
   type: 'image',
   caption: 'My image'
   buttons: [
     {
       id: 'your custom id 1',
       text: 'Some text'
     },
     {
       id: 'another id 2',
       text: 'Another text'
     }
   ],
   footer: 'Footer text' // Optional
 }
);

// Image as Sticker
WPP.chat.sendFileMessage(
  '[number]@c.us',
  'data:image/png;base64,<a long base64 file...>',
  {
    type: 'sticker'
  }
);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `content` | `any` |
| `options` | [`AudioMessageOptions`](../interfaces/chat.AudioMessageOptions.md) \| [`AutoDetectMessageOptions`](../interfaces/chat.AutoDetectMessageOptions.md) \| [`DocumentMessageOptions`](../interfaces/chat.DocumentMessageOptions.md) \| [`ImageMessageOptions`](../interfaces/chat.ImageMessageOptions.md) \| [`VideoMessageOptions`](../interfaces/chat.VideoMessageOptions.md) \| [`StickerMessageOptions`](../interfaces/chat.StickerMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

The result

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:149](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L149)

___

### sendListMessage

▸ **sendListMessage**(`chatId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a list message

**`example`**
```javascript
WPP.chat.sendListMessage('[number]@c.us', {
  buttonText: 'Click Me!', //required
  description: "Hello it's list message", //required
  title: 'Hello user', //optional
  footer: 'Click and choose one', //optional
  sections: [{
    title: 'Section 1',
    rows: [{
      rowId: 'rowid1',
      title: 'Row 1',
      description: "Hello it's description 1",
    },{
      rowId: 'rowid2',
      title: 'Row 2',
      description: "Hello it's description 2",
    }]
  }]
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `options` | [`ListMessageOptions`](../interfaces/chat.ListMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendListMessage.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L70)

___

### sendLocationMessage

▸ **sendLocationMessage**(`chatId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a location message

**`example`**
```javascript
// full example
WPP.chat.sendLocationMessage('[number]@c.us', {
 lat: -22.95201,
 lng: -43.2102601,
 name: 'Cristo Rendentor', // optional
 address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ', // optional
 url: 'https://santuariocristoredentor.com.br/' // optional
});

// minimal
WPP.chat.sendLocationMessage('[number]@c.us', {
 lat: -22.95201,
 lng: -43.2102601,
});

// name and address
WPP.chat.sendLocationMessage('[number]@c.us', {
 lat: -22.95201,
 lng: -43.2102601,
 name: 'Cristo Rendentor',
 address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ'
});

// with buttons
WPP.chat.sendLocationMessage('[number]@c.us', {
 lat: -22.95201,
 lng: -43.2102601,
 name: 'Cristo Rendentor',
 address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ',
 buttons: [
     {
         url: 'https://example.test/',
         text: 'URL example'
     },
     {
         phoneNumber: '+55 12 3456 7777',
         text: 'Phone Number'
     },
     {
         id: 'id1',
         text: 'First'
     },
     {
         id: 'id2',
         text: 'Second'
     },
     {
         id: 'other',
         text: 'Other'
     }
 ],
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `options` | [`LocationMessageOptions`](../interfaces/chat.LocationMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L114)

___

### sendRawMessage

▸ **sendRawMessage**(`chatId`, `rawMessage`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a raw message

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `rawMessage` | [`RawMessage`](chat.md#rawmessage) |
| `options` | [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendRawMessage.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendRawMessage.ts#L36)

___

### sendReactionToMessage

▸ **sendReactionToMessage**(`messageId`, `reaction`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `sendMsgResult`: `string`  }\>

Send a reaction to a message

Full Emoji List: https://unicode.org/emoji/charts/full-emoji-list.html

**`example`**
```javascript
// to react a message
WPP.chat.sendReactionMessage('[message_id]', '🤯');

// to remove
WPP.chat.sendReactionMessage('[message_id]', false);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md) \| [`MsgModel`](../classes/whatsapp.MsgModel.md) \| `Stringable` |
| `reaction` | ``null`` \| `string` \| ``false`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `sendMsgResult`: `string`  }\>

#### Defined in

[packages/wa-js/src/chat/functions/sendReactionToMessage.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendReactionToMessage.ts#L38)

___

### sendTextMessage

▸ **sendTextMessage**(`chatId`, `content`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a text message

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `content` | `any` |
| `options` | [`TextMessageOptions`](chat.md#textmessageoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendTextMessage.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendTextMessage.ts#L36)

___

### sendVCardContactMessage

▸ **sendVCardContactMessage**(`chatId`, `contacts`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a VCard as message

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `contacts` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| [`VCardContact`](../interfaces/chat.VCardContact.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md) \| [`VCardContact`](../interfaces/chat.VCardContact.md))[] |
| `options` | [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendVCardContactMessage.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendVCardContactMessage.ts#L44)

___

### starMessage

▸ **starMessage**(`id`, `star`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StarMessageReturn`](../interfaces/chat.StarMessageReturn.md)\>

Star/Unstar a message

**`example`**
```javascript
// star a message
WPP.chat.starMessage('<message id>');

// unstar a message
WPP.chat.starMessage('<message id>', false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `star` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StarMessageReturn`](../interfaces/chat.StarMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/starMessage.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/starMessage.ts#L43)

▸ **starMessage**(`ids`, `star`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StarMessageReturn`](../interfaces/chat.StarMessageReturn.md)[]\>

Star/Unstar messages

**`example`**
```javascript
// star messages
WPP.chat.starMessage(['<message id>', '<message id>']);

// unstar messages
WPP.chat.starMessage(['<message id>', '<message id>'], false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |
| `star` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StarMessageReturn`](../interfaces/chat.StarMessageReturn.md)[]\>

#### Defined in

[packages/wa-js/src/chat/functions/starMessage.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/starMessage.ts#L60)
