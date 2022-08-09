---
id: "chat.MessageButtonsOptions"
title: "Interface: MessageButtonsOptions"
sidebar_label: "MessageButtonsOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).MessageButtonsOptions

## Hierarchy

- **`MessageButtonsOptions`**

  ↳ [`DocumentMessageOptions`](chat.DocumentMessageOptions.md)

  ↳ [`ImageMessageOptions`](chat.ImageMessageOptions.md)

  ↳ [`VideoMessageOptions`](chat.VideoMessageOptions.md)

  ↳ [`LocationMessageOptions`](chat.LocationMessageOptions.md)

## Properties

### buttons

• `Optional` **buttons**: `MessageButtonsTypes`[]

List of buttons, with at least 1 option and a maximum of 3

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L52)

___

### footer

• `Optional` **footer**: `string`

Footer text for buttons

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L65)

___

### title

• `Optional` **title**: `string`

Title for buttons, only for text message

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L56)

___

### useTemplateButtons

• `Optional` **useTemplateButtons**: ``null`` \| `boolean`

Set to use template buttons instead of reply buttons.
@default: undefined - auto detect

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L61)
