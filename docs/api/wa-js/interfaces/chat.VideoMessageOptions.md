---
id: "chat.VideoMessageOptions"
title: "Interface: VideoMessageOptions"
sidebar_label: "VideoMessageOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).VideoMessageOptions

## Hierarchy

- [`FileMessageOptions`](chat.FileMessageOptions.md)

- [`MessageButtonsOptions`](chat.MessageButtonsOptions.md)

  ↳ **`VideoMessageOptions`**

## Properties

### buttons

• `Optional` **buttons**: `MessageButtonsTypes`[]

List of buttons, with at least 1 option and a maximum of 3

#### Inherited from

[MessageButtonsOptions](chat.MessageButtonsOptions.md).[buttons](chat.MessageButtonsOptions.md#buttons)

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L50)

___

### caption

• `Optional` **caption**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[caption](chat.FileMessageOptions.md#caption)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L39)

___

### createChat

• `Optional` **createChat**: `boolean`

Create a new chat to a new contact

**`default`** false

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello new contact', {
  createChat: true
});
```

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[createChat](chat.FileMessageOptions.md#createchat)

#### Defined in

[packages/wa-js/src/chat/types.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L33)

___

### detectMentioned

• `Optional` **detectMentioned**: `boolean`

Automatic detect and add the mentioned contacts with @[number]

**`default`** true

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello @123 and @456', {
  detectMentioned: true
});
```

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[detectMentioned](chat.FileMessageOptions.md#detectmentioned)

#### Defined in

[packages/wa-js/src/chat/types.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L47)

___

### filename

• `Optional` **filename**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[filename](chat.FileMessageOptions.md#filename)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L40)

___

### footer

• `Optional` **footer**: `string`

Footer text for buttons

#### Inherited from

[MessageButtonsOptions](chat.MessageButtonsOptions.md).[footer](chat.MessageButtonsOptions.md#footer)

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L63)

___

### isGif

• `Optional` **isGif**: `boolean`

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L74)

___

### markIsRead

• `Optional` **markIsRead**: `boolean`

Automatically mark chat is read after send a message

**`default`** true

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Replying your message', {
  markIsRead: true
});
```

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[markIsRead](chat.FileMessageOptions.md#markisread)

#### Defined in

[packages/wa-js/src/chat/types.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L61)

___

### mentionedList

• `Optional` **mentionedList**: (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[]

Define a mentioned list for a message
This option work better with a message with mension

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Hello @123 and @456', {
  mentionedList: ['123@c.us', '456@c.us']
})
```

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[mentionedList](chat.FileMessageOptions.md#mentionedlist)

#### Defined in

[packages/wa-js/src/chat/types.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L79)

___

### messageId

• `Optional` **messageId**: `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[messageId](chat.FileMessageOptions.md#messageid)

#### Defined in

[packages/wa-js/src/chat/types.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L66)

___

### mimetype

• `Optional` **mimetype**: `string`

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[mimetype](chat.FileMessageOptions.md#mimetype)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L41)

___

### quotedMsg

• `Optional` **quotedMsg**: `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md) \| [`MsgModel`](../classes/whatsapp.MsgModel.md)

Quote a message, like a reply message

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'This is a reply', {
  quotedMsg: 'true_[number]@c.us_3EB0F435D95D32C4C638'
})
```

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[quotedMsg](chat.FileMessageOptions.md#quotedmsg)

#### Defined in

[packages/wa-js/src/chat/types.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L91)

___

### title

• `Optional` **title**: `string`

Title for buttons, only for text message

#### Inherited from

[MessageButtonsOptions](chat.MessageButtonsOptions.md).[title](chat.MessageButtonsOptions.md#title)

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L54)

___

### type

• **type**: ``"video"``

#### Overrides

[FileMessageOptions](chat.FileMessageOptions.md).[type](chat.FileMessageOptions.md#type)

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L73)

___

### useTemplateButtons

• `Optional` **useTemplateButtons**: `boolean`

Set to use template buttons instead of reply buttons.

**`default:`** undefined - auto detect

#### Inherited from

[MessageButtonsOptions](chat.MessageButtonsOptions.md).[useTemplateButtons](chat.MessageButtonsOptions.md#usetemplatebuttons)

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L59)

___

### waitForAck

• `Optional` **waitForAck**: `boolean`

Wait for send while the ACK of message is SENT(1)

**`default`** true

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'Wait for sent', {
  waitForAck: true
})
```

#### Inherited from

[FileMessageOptions](chat.FileMessageOptions.md).[waitForAck](chat.FileMessageOptions.md#waitforack)

#### Defined in

[packages/wa-js/src/chat/types.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L105)
