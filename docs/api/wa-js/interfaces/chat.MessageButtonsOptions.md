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

## Properties

### buttons

• `Optional` **buttons**: { `id`: `string` ; `text`: `string`  }[]

List of buttons, with at least 1 option and a maximum of 3

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L24)

___

### footer

• `Optional` **footer**: `string`

Footer text for buttons

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L35)

___

### title

• `Optional` **title**: `string`

Title for buttons, only for text message

#### Defined in

[packages/wa-js/src/chat/functions/prepareMessageButtons.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareMessageButtons.ts#L31)
