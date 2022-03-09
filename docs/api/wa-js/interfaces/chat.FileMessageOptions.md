---
id: "chat.FileMessageOptions"
title: "Interface: FileMessageOptions"
sidebar_label: "FileMessageOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).FileMessageOptions

## Hierarchy

- [`SendMessageOptions`](chat.SendMessageOptions.md)

  ↳ **`FileMessageOptions`**

  ↳↳ [`AudioMessageOptions`](chat.AudioMessageOptions.md)

  ↳↳ [`AutoDetectMessageOptions`](chat.AutoDetectMessageOptions.md)

  ↳↳ [`DocumentMessageOptions`](chat.DocumentMessageOptions.md)

  ↳↳ [`ImageMessageOptions`](chat.ImageMessageOptions.md)

  ↳↳ [`StickerMessageOptions`](chat.StickerMessageOptions.md)

  ↳↳ [`VideoMessageOptions`](chat.VideoMessageOptions.md)

## Properties

### caption

• `Optional` **caption**: `string`

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

[SendMessageOptions](chat.SendMessageOptions.md).[createChat](chat.SendMessageOptions.md#createchat)

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

[SendMessageOptions](chat.SendMessageOptions.md).[detectMentioned](chat.SendMessageOptions.md#detectmentioned)

#### Defined in

[packages/wa-js/src/chat/types.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L47)

___

### filename

• `Optional` **filename**: `string`

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L40)

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

[SendMessageOptions](chat.SendMessageOptions.md).[markIsRead](chat.SendMessageOptions.md#markisread)

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

[SendMessageOptions](chat.SendMessageOptions.md).[mentionedList](chat.SendMessageOptions.md#mentionedlist)

#### Defined in

[packages/wa-js/src/chat/types.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L79)

___

### messageId

• `Optional` **messageId**: `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[messageId](chat.SendMessageOptions.md#messageid)

#### Defined in

[packages/wa-js/src/chat/types.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L66)

___

### mimetype

• `Optional` **mimetype**: `string`

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

[SendMessageOptions](chat.SendMessageOptions.md).[quotedMsg](chat.SendMessageOptions.md#quotedmsg)

#### Defined in

[packages/wa-js/src/chat/types.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L91)

___

### type

• **type**: `string`

#### Defined in

[packages/wa-js/src/chat/functions/sendFileMessage.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendFileMessage.ts#L38)

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

[SendMessageOptions](chat.SendMessageOptions.md).[waitForAck](chat.SendMessageOptions.md#waitforack)

#### Defined in

[packages/wa-js/src/chat/types.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L105)
