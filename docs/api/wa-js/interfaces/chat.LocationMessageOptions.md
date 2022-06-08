---
id: "chat.LocationMessageOptions"
title: "Interface: LocationMessageOptions"
sidebar_label: "LocationMessageOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).LocationMessageOptions

## Hierarchy

- [`SendMessageOptions`](chat.SendMessageOptions.md)

- [`MessageButtonsOptions`](chat.MessageButtonsOptions.md)

  ↳ **`LocationMessageOptions`**

## Properties

### address

• `Optional` **address**: `string`

The full address of place

#### Defined in

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L43)

___

### buttons

• `Optional` **buttons**: `MessageButtonsTypes`[]

List of buttons, with at least 1 option and a maximum of 3

#### Inherited from

[MessageButtonsOptions](chat.MessageButtonsOptions.md).[buttons](chat.MessageButtonsOptions.md#buttons)

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L50)

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

### footer

• `Optional` **footer**: `string`

Footer text for buttons

#### Inherited from

[MessageButtonsOptions](chat.MessageButtonsOptions.md).[footer](chat.MessageButtonsOptions.md#footer)

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L63)

___

### lat

• **lat**: `string` \| `number`

latitude in degrees

#### Defined in

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L35)

___

### lng

• **lng**: `string` \| `number`

longitude in degrees

#### Defined in

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L39)

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

### name

• `Optional` **name**: `string`

Name of the place

#### Defined in

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L47)

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

#### Inherited from

[SendMessageOptions](chat.SendMessageOptions.md).[quotedMsg](chat.SendMessageOptions.md#quotedmsg)

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

### url

• `Optional` **url**: `string`

URL to open when click on the address/name

#### Defined in

[packages/wa-js/src/chat/functions/sendLocationMessage.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/sendLocationMessage.ts#L51)

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

[SendMessageOptions](chat.SendMessageOptions.md).[waitForAck](chat.SendMessageOptions.md#waitforack)

#### Defined in

[packages/wa-js/src/chat/types.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/types.ts#L105)
