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
- [ChatListOptions](../interfaces/chat.ChatListOptions.md)
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

- [archive](chat.md#archive)
- [canMute](chat.md#canmute)
- [clear](chat.md#clear)
- [delete](chat.md#delete)
- [find](chat.md#find)
- [get](chat.md#get)
- [getLastSeen](chat.md#getlastseen)
- [list](chat.md#list)
- [markIsComposing](chat.md#markiscomposing)
- [markIsPaused](chat.md#markispaused)
- [markIsRead](chat.md#markisread)
- [markIsRecording](chat.md#markisrecording)
- [markIsUnread](chat.md#markisunread)
- [mute](chat.md#mute)
- [openChatAt](chat.md#openchatat)
- [openChatBottom](chat.md#openchatbottom)
- [openChatFromUnread](chat.md#openchatfromunread)
- [pin](chat.md#pin)
- [unarchive](chat.md#unarchive)
- [unmute](chat.md#unmute)
- [unpin](chat.md#unpin)

## Message Functions

- [deleteMessage](chat.md#deletemessage)
- [downloadMedia](chat.md#downloadmedia)
- [generateMessageID](chat.md#generatemessageid)
- [getMessageById](chat.md#getmessagebyid)
- [getMessages](chat.md#getmessages)
- [sendCreatePollMessage](chat.md#sendcreatepollmessage)
- [sendFileMessage](chat.md#sendfilemessage)
- [sendListMessage](chat.md#sendlistmessage)
- [sendLocationMessage](chat.md#sendlocationmessage)
- [sendRawMessage](chat.md#sendrawmessage)
- [sendReactionToMessage](chat.md#sendreactiontomessage)
- [sendTextMessage](chat.md#sendtextmessage)
- [sendVCardContactMessage](chat.md#sendvcardcontactmessage)
- [starMessage](chat.md#starmessage)

## Type Aliases

### AllMessageOptions

Ƭ **AllMessageOptions**: [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) & [`LinkPreviewOptions`](../interfaces/chat.LinkPreviewOptions.md) & [`MessageButtonsOptions`](../interfaces/chat.MessageButtonsOptions.md) & `Partial`<[`ListMessageOptions`](../interfaces/chat.ListMessageOptions.md)\>

#### Defined in

[packages/wa-js/src/chat/defaultSendMessageOptions.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/defaultSendMessageOptions.ts#L24)

___

### PoolMessageOptions

Ƭ **PoolMessageOptions**: [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md)

#### Defined in

[packages/wa-js/src/chat/functions/sendCreatePollMessage.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendCreatePollMessage.ts#L25)

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

### archive

▸ **archive**(`chatId`, `archive?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `archive`: `boolean` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Archive a chat

**`Example`**

```javascript
// Archive a chat
WPP.chat.archive('[number]@c.us');

// Unarchive a chat
WPP.chat.archive('[number]@c.us', false);
// or
WPP.chat.unarchive('[number]@c.us');
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) | `undefined` |
| `archive` | `boolean` | `true` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `archive`: `boolean` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/archive.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/archive.ts#L37)

___

### canMute

▸ **canMute**(`chatId`): `boolean`

Check if is possible to mute this chat

**`Example`**

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

### getLastSeen

▸ **getLastSeen**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number` \| `boolean`\>

Get timestamp of last seen

**`Example`**

```javascript
WPP.chat.getLastSeen('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number` \| `boolean`\>

#### Defined in

[packages/wa-js/src/chat/functions/getLastSeen.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/getLastSeen.ts#L28)

___

### list

▸ **list**(`options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)[]\>

Return a list of chats

**`Example`**

```javascript
// All chats
const chats = await WPP.chat.list();

// Only users chats
const chats = await WPP.chat.list({onlyUsers: true});

// Only groups chats
const chats = await WPP.chat.list({onlyGroups: true});

// Only with label Text
const chats = await WPP.chat.list({withLabels: ['Test']});

// Only with label id
const chats = await WPP.chat.list({withLabels: ['1']});

// Only with label with one of text or id
const chats = await WPP.chat.list({withLabels: ['Alfa','5']});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ChatListOptions`](../interfaces/chat.ChatListOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)[]\>

#### Defined in

[packages/wa-js/src/chat/functions/list.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/list.ts#L52)

___

### markIsComposing

▸ **markIsComposing**(`chatId`, `duration?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Mark a chat to composing state
and keep sending "is writting a message"

**`Example`**

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

**`Example`**

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

**`Example`**

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

**`Example`**

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

**`Example`**

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

**`Example`**

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

**`Example`**

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

**`Example`**

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

**`Example`**

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

### pin

▸ **pin**(`chatId`, `pin?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pin`: `boolean` = pin; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Pin a chat

**`Example`**

```javascript
// Pin a chat
WPP.chat.pin('[number]@c.us');

// Unpin a chat
WPP.chat.pin('[number]@c.us', false);
// or
WPP.chat.unpin('[number]@c.us');
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) | `undefined` |
| `pin` | `boolean` | `true` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pin`: `boolean` = pin; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/pin.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/pin.ts#L37)

___

### unarchive

▸ **unarchive**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `archive`: `boolean` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Unarchive a chat

**`Alias`**

archive

**`Example`**

```javascript
// Unarchive a chat
WPP.chat.unarchive('[number]@c.us');

// Alias for
WPP.chat.archive('[number]@c.us', false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `archive`: `boolean` ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/archive.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/archive.ts#L75)

___

### unmute

▸ **unmute**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Unmute a chat

**`Example`**

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

### unpin

▸ **unpin**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pin`: `boolean` = pin; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

Unpin a chat

**`Alias`**

pin

**`Example`**

```javascript
// Unpin a chat
WPP.chat.unpin('[number]@c.us');

// Alias for
WPP.chat.pin('[number]@c.us', false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `pin`: `boolean` = pin; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/chat/functions/pin.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/pin.ts#L73)

___

## Message Functions

### deleteMessage

▸ **deleteMessage**(`chatId`, `id`, `deleteMediaInDevice`, `revoke`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteMessageReturn`](../interfaces/chat.DeleteMessageReturn.md)\>

Delete a message

**`Example`**

```javascript
// Delete a message
WPP.chat.deleteMessage('[number]@callback.us', 'msgid');
// Delete a list of messages
WPP.chat.deleteMessage('[number]@callback.us', ['msgid1', 'msgid2]);
// Delete a message and delete media
WPP.chat.deleteMessage('[number]@callback.us', 'msgid', true);
// Revoke a message
WPP.chat.deleteMessage('[number]@callback.us', 'msgid', true, true);
```

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

[packages/wa-js/src/chat/functions/deleteMessage.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/deleteMessage.ts#L47)

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

[packages/wa-js/src/chat/functions/deleteMessage.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/deleteMessage.ts#L58)

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

**`Example`**

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

**`Example`**

```javascript
// Some messages
WPP.chat.getMessages('[number]@c.us', {
  count: 20,
});

// All messages
WPP.chat.getMessages('[number]@c.us', {
  count: -1,
});

// Last 20 unread messages
WPP.chat.getMessages('[number]@c.us', {
  count: 20,
  onlyUnread: true,
});

// All unread messages
WPP.chat.getMessages('[number]@c.us', {
  count: -1,
  onlyUnread: true,
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

[packages/wa-js/src/chat/functions/getMessages.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/getMessages.ts#L67)

___

### sendCreatePollMessage

▸ **sendCreatePollMessage**(`chatId`, `name`, `choices`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a create poll message

Note: This only works for groups

**`Example`**

```javascript
// Single pool
WPP.chat.sendCreatePollMessage(
 '[number]@g.us',
 'A poll name',
 ['Option 1', 'Option 2', 'Option 3']
);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `name` | `string` |
| `choices` | `string`[] |
| `options` | [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendCreatePollMessage.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendCreatePollMessage.ts#L44)

___

### sendFileMessage

▸ **sendFileMessage**(`chatId`, `content`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a file message, that can be an audio, document, image, sticker or video

**`Example`**

```javascript
// Single document
WPP.chat.sendFileMessage(
 '[number]@c.us',
 'data:application/msword;base64,<a long base64 file...>',
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
| `options` | [`AutoDetectMessageOptions`](../interfaces/chat.AutoDetectMessageOptions.md) \| [`AudioMessageOptions`](../interfaces/chat.AudioMessageOptions.md) \| [`DocumentMessageOptions`](../interfaces/chat.DocumentMessageOptions.md) \| [`ImageMessageOptions`](../interfaces/chat.ImageMessageOptions.md) \| [`StickerMessageOptions`](../interfaces/chat.StickerMessageOptions.md) \| [`VideoMessageOptions`](../interfaces/chat.VideoMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

The result

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:153](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L153)

___

### sendListMessage

▸ **sendListMessage**(`chatId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a list message

**`Example`**

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

[packages/wa-js/src/chat/functions/sendListMessage.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendListMessage.ts#L73)

___

### sendLocationMessage

▸ **sendLocationMessage**(`chatId`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a location message

**`Example`**

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

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L117)

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

**`Example`**

```javascript
// to react a message
WPP.chat.sendReactionMessage('[message_id]', '🤯');

// to remove
WPP.chat.sendReactionMessage('[message_id]', false);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageId` | `string` \| [`MsgModel`](../classes/whatsapp.MsgModel.md) \| `Stringable` \| [`MsgKey`](../classes/whatsapp.MsgKey.md) |
| `reaction` | ``null`` \| `string` \| ``false`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `sendMsgResult`: `string`  }\>

#### Defined in

[packages/wa-js/src/chat/functions/sendReactionToMessage.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendReactionToMessage.ts#L38)

___

### sendTextMessage

▸ **sendTextMessage**(`chatId`, `content`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a text message

**`Example`**

```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello new contact', {
  createChat: true
});

// With Buttons
WPP.chat.sendTextMessage('[number]@c.us', 'Hello', {
  useTemplateButtons: true, // False for legacy
  buttons: [
    {
      url: 'https://wppconnect.io/',
      text: 'WPPConnect Site'
    },
    {
      phoneNumber: '+55 11 22334455',
      text: 'Call me'
    },
    {
      id: 'your custom id 1',
      text: 'Some text'
    },
    {
      id: 'another id 2',
      text: 'Another text'
    }
  ],
  title: 'Title text', // Optional
  footer: 'Footer text' // Optional
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `content` | `any` |
| `options` | [`TextMessageOptions`](chat.md#textmessageoptions) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendTextMessage.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendTextMessage.ts#L67)

___

### sendVCardContactMessage

▸ **sendVCardContactMessage**(`chatId`, `contacts`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

Send a VCard as message

**`Example`**

```javascript
// single contact
WPP.chat.sendVCardContactMessage('[number]@c.us', {
  id: '123456@c.us',
  name: 'The Contact Name'
});

// multiple contacts
WPP.chat.sendVCardContactMessage('[number]@c.us', [
  {
    id: '123456@c.us',
    name: 'The Contact Name'
  },
  {
    id: '456789@c.us',
    name: 'Another Contact'
  },
]);

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `any` |
| `contacts` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| [`VCardContact`](../interfaces/chat.VCardContact.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md) \| [`VCardContact`](../interfaces/chat.VCardContact.md))[] |
| `options` | [`SendMessageOptions`](../interfaces/chat.SendMessageOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/chat/functions/sendVCardContactMessage.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendVCardContactMessage.ts#L64)

___

### starMessage

▸ **starMessage**(`id`, `star`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StarMessageReturn`](../interfaces/chat.StarMessageReturn.md)\>

Star/Unstar a message

**`Example`**

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

**`Example`**

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
