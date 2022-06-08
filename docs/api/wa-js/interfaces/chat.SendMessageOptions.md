---
id: "chat.SendMessageOptions"
title: "Interface: SendMessageOptions"
sidebar_label: "SendMessageOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).SendMessageOptions

## Hierarchy

- **`SendMessageOptions`**

  ↳ [`FileMessageOptions`](chat.FileMessageOptions.md)

  ↳ [`ListMessageOptions`](chat.ListMessageOptions.md)

  ↳ [`LocationMessageOptions`](chat.LocationMessageOptions.md)

## Properties

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

#### Defined in

[packages/wa-js/src/chat/types.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L47)

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

#### Defined in

[packages/wa-js/src/chat/types.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L79)

___

### messageId

• `Optional` **messageId**: `string` \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

#### Defined in

[packages/wa-js/src/chat/types.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L66)

___

### quotedMsg

• `Optional` **quotedMsg**: `string` \| [`MsgModel`](../classes/whatsapp.MsgModel.md) \| [`MsgKey`](../classes/whatsapp.MsgKey.md)

Quote a message, like a reply message

**`example`**
```javascript
WPP.chat.sendTextMessage('[number]@c.us', 'This is a reply', {
  quotedMsg: 'true_[number]@c.us_3EB0F435D95D32C4C638'
})
```

#### Defined in

[packages/wa-js/src/chat/types.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L91)

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

#### Defined in

[packages/wa-js/src/chat/types.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L105)
