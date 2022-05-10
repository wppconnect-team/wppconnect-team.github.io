---
id: "whatsapp.MediaPrep.MediaPrep"
title: "Class: MediaPrep"
sidebar_label: "MediaPrep"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).[MediaPrep](../namespaces/whatsapp.MediaPrep.md).MediaPrep

## Constructors

### constructor

• **new MediaPrep**(`type`, `p`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`OUTWARD_TYPES`](../enums/whatsapp.enums.OUTWARD_TYPES.md) |
| `p` | `any` |

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaPrep.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaPrep.ts#L41)

## Methods

### sendToChat

▸ **sendToChat**(`e`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`ChatModel`](whatsapp.ChatModel.md) |
| `options` | `Object` |
| `options.caption?` | `string` |
| `options.ctwaContext?` | `any` |
| `options.footer?` | `string` |
| `options.forwardedFromWeb?` | `boolean` |
| `options.forwardingScore?` | `any` |
| `options.isForwarded?` | `boolean` |
| `options.isViewOnce?` | `boolean` |
| `options.mentionedJidList?` | `any` |
| `options.multicast?` | `any` |
| `options.productMsgOptions?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`MsgModel`](whatsapp.MsgModel.md), `any`\> |
| `options.quotedMsg?` | [`MsgModel`](whatsapp.MsgModel.md) |
| `options.type?` | ``null`` \| `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaPrep.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaPrep.ts#L43)

___

### waitForPrep

▸ **waitForPrep**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MediaDataModel`](whatsapp.MediaDataModel.md)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MediaDataModel`](whatsapp.MediaDataModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaPrep.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaPrep.ts#L60)
