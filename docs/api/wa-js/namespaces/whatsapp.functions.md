---
id: "whatsapp.functions"
title: "Namespace: functions"
sidebar_label: "functions"
custom_edit_url: null
---

[whatsapp](whatsapp.md).functions

## Interfaces

- [LinkPreviewResult](../interfaces/whatsapp.functions.LinkPreviewResult.md)
- [MsgFindQueryParams](../interfaces/whatsapp.functions.MsgFindQueryParams.md)
- [QueryGroupInviteResult](../interfaces/whatsapp.functions.QueryGroupInviteResult.md)
- [ReactionData](../interfaces/whatsapp.functions.ReactionData.md)
- [SimpleAckData](../interfaces/whatsapp.functions.SimpleAckData.md)
- [ThumbnailData](../interfaces/whatsapp.functions.ThumbnailData.md)

## Functions

### addAndSendMsgToChat

▸ **addAndSendMsgToChat**(`chat`, `message`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>, [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>]\>

**`whatsapp`** 75887

**`whatsapp`** 975887 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `message` | [`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md), `any`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>, [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>]\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/addAndSendMsgToChat.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/addAndSendMsgToChat.ts#L24)

___

### addParticipants

▸ **addParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

**`whatsapp`** 389389 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L23)

___

### addProduct

▸ **addProduct**(`product`, `imageWidth?`, `imageHeight?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

**`whatsapp`** 196519 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`ProductModel`](../classes/whatsapp.ProductModel.md) |
| `imageWidth?` | `number` |
| `imageHeight?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L26)

___

### blockContact

▸ **blockContact**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 80140

**`whatsapp`** 780140 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`ContactModel`](../classes/whatsapp.ContactModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/blockContact.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/blockContact.ts#L23)

___

### canMarkPlayed

▸ **canMarkPlayed**(`msg`): `boolean`

**`whatsapp`** 2.2146.9:64850

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L40)

___

### createBusinessCatalog

▸ **createBusinessCatalog**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 2.2144.10:35339

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L21)

___

### createMsgProtobuf

▸ **createMsgProtobuf**(`e`, `t?`): `Object`

**`whatsapp`** 6565

**`whatsapp`** 606565 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `t?` | `Object` |

#### Returns

`Object`

#### Defined in

[packages/wa-js/src/whatsapp/functions/createMsgProtobuf.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/createMsgProtobuf.ts#L23)

___

### createOrUpdateReactions

▸ **createOrUpdateReactions**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 7394

**`whatsapp`** 307394 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReactionData`](../interfaces/whatsapp.functions.ReactionData.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/createOrUpdateReactions.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/createOrUpdateReactions.ts#L33)

___

### deleteProducts

▸ **deleteProducts**(`productIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

**`whatsapp`** 196519 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `productIds` | `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L44)

___

### demoteParticipants

▸ **demoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

**`whatsapp`** 389389 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L47)

___

### editProduct

▸ **editProduct**(`product`, `imageWidth?`, `imageHeight?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

**`whatsapp`** 196519 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`ProductModel`](../classes/whatsapp.ProductModel.md) |
| `imageWidth?` | `number` |
| `imageHeight?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L35)

___

### encryptAndSendGroupMsg

▸ **encryptAndSendGroupMsg**(`message`, `protobuf`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 51974

**`whatsapp`** 951974 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `protobuf` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/encryptAndSendGroupMsg.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/encryptAndSendGroupMsg.ts#L24)

___

### encryptAndSendMsg

▸ **encryptAndSendMsg**(`message`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 95547

**`whatsapp`** 695547 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/encryptAndSendMsg.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/encryptAndSendMsg.ts#L24)

___

### fetchLinkPreview

▸ **fetchLinkPreview**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

**`whatsapp`** 19146

**`whatsapp`** 75820 >= 2.2204.13

**`whatsapp`** 519146 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/fetchLinkPreview.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/fetchLinkPreview.ts#L37)

___

### findChat

▸ **findChat**(`wid`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`whatsapp`** 50101

**`whatsapp`** 650101 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/findChat.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/findChat.ts#L24)

___

### findFirstWebLink

▸ **findFirstWebLink**(`message`): `undefined` \| `string`

**`whatsapp`** 29929

**`whatsapp`** 31042 >= 2.2204.13

**`whatsapp`** 829929 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/findFirstWebLink.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/findFirstWebLink.ts#L23)

___

### genMinimalLinkPreview

▸ **genMinimalLinkPreview**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

**`whatsapp`** 92375

**`whatsapp`** 692375 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.anchor` | `undefined` |
| `data.domain?` | `string` |
| `data.href` | `string` |
| `data.index` | `number` |
| `data.input` | `string` |
| `data.isHttp` | `boolean` |
| `data.params?` | `string` |
| `data.path?` | `string` |
| `data.port?` | `number` |
| `data.scheme` | `string` |
| `data.suspiciousCharacters?` | `string` |
| `data.url` | `string` |
| `data.username?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/genMinimalLinkPreview.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/genMinimalLinkPreview.ts#L24)

___

### generateVideoThumbsAndDuration

▸ **generateVideoThumbsAndDuration**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `duration`: `number` ; `thumbs`: { `fullHeight`: `number` ; `fullWidth`: `number` ; `height`: `number` ; `url`: `string` ; `width`: `number`  }[]  }\>

**`whatsapp`** 51428

**`whatsapp`** 551428 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.debugHint` | `string` |
| `data.file` | `Blob` |
| `data.maxDimensions` | `number`[] |
| `data.throwOnBlack` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `duration`: `number` ; `thumbs`: { `fullHeight`: `number` ; `fullWidth`: `number` ; `height`: `number` ; `url`: `string` ; `width`: `number`  }[]  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/generateVideoThumbsAndDuration.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/generateVideoThumbsAndDuration.ts#L23)

___

### getFanOutList

▸ **getFanOutList**(`param`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)[]\>

**`whatsapp`** 16104

**`whatsapp`** 416104 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.wids` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)[]\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/getFanOutList.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getFanOutList.ts#L24)

___

### getGroupSenderKeyList

▸ **getGroupSenderKeyList**(`wid`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `rotateKey`: `boolean` ; `skDistribList`: [`Wid`](../classes/whatsapp.Wid.md)[] ; `skList`: [`Wid`](../classes/whatsapp.Wid.md)[]  }\>

**`whatsapp`** 43201

**`whatsapp`** 543201 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `rotateKey`: `boolean` ; `skDistribList`: [`Wid`](../classes/whatsapp.Wid.md)[] ; `skList`: [`Wid`](../classes/whatsapp.Wid.md)[]  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/getGroupSenderKeyList.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getGroupSenderKeyList.ts#L24)

___

### getOrGenerate

▸ **getOrGenerate**(): `string`

**`whatsapp`** 98250

**`whatsapp`** 16413 >= 2.2204.13

**`whatsapp`** 66333 >= 2.2218.4

**`whatsapp`** 266333 >= 2.2222.8

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/getOrGenerate.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getOrGenerate.ts#L24)

___

### getStatus

▸ **getStatus**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

**`whatsapp`** 46898

**`whatsapp`** 51316 >= 2.2204.13

**`whatsapp`** 546898 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/status.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/status.ts#L24)

___

### handleChatSimpleAck

▸ **handleChatSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 48309

**`deprecated`**

**`whatsapp`** 648309 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L48)

___

### handleChatSimpleReceipt

▸ **handleChatSimpleReceipt**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 48309

**`whatsapp`** 648309 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L71)

___

### handleGroupSimpleAck

▸ **handleGroupSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 84947

**`deprecated`**

**`whatsapp`** 284947 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L57)

___

### handleGroupSimpleReceipt

▸ **handleGroupSimpleReceipt**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 84947

**`whatsapp`** 284947 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L78)

___

### handleStatusSimpleAck

▸ **handleStatusSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 90756

**`deprecated`**

**`whatsapp`** 590756 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L39)

___

### handleStatusSimpleReceipt

▸ **handleStatusSimpleReceipt**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 90756

**`whatsapp`** 590756 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L64)

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

**`whatsapp`** 13194

**`whatsapp`** 9530 >= 2.2210.9

**`whatsapp`** 909530 >= 2.2222.8

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L24)

___

### isLegacyWebdBackend

▸ **isLegacyWebdBackend**(): `boolean`

**`whatsapp`** 88555

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isMDBackend.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isMDBackend.ts#L23)

___

### isLoggedIn

▸ **isLoggedIn**(): `boolean`

**`whatsapp`** 13194 >= 2.2208.11

**`whatsapp`** 9530 >= 2.2210.9

**`whatsapp`** 909530 >= 2.2222.8

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L31)

___

### isMDBackend

▸ **isMDBackend**(): `boolean`

**`whatsapp`** 88555

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isMDBackend.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isMDBackend.ts#L20)

___

### markPlayed

▸ **markPlayed**(`msg`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 30734

**`whatsapp`** 730734 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L35)

___

### markUnread

▸ **markUnread**(`chat`, `whenAvailable`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`whatsapp`** 9609

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `whenAvailable` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L21)

___

### mediaTypeFromProtobuf

▸ **mediaTypeFromProtobuf**(`protoMessage`): `string`

**`whatsapp`** 95318

**`whatsapp`** 58853 >= 2.2218.4

**`whatsapp`** 458853 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoMessage` | `Object` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/mediaTypeFromProtobuf.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/mediaTypeFromProtobuf.ts#L23)

___

### msgFindQuery

▸ **msgFindQuery**(`direction`, `params`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>[]\>

**`whatsapp`** 76581

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | ``"after"`` \| ``"before"`` |
| `params` | [`MsgFindQueryParams`](../interfaces/whatsapp.functions.MsgFindQueryParams.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>[]\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/msgFindQuery.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/msgFindQuery.ts#L31)

___

### promoteParticipants

▸ **promoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

**`whatsapp`** 389389 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L39)

___

### randomMessageId

▸ **randomMessageId**(): `string`

**`whatsapp`** 65212

**`whatsapp`** 15860 >= 2.2204.13

**`whatsapp`** 465212 >= 2.2222.8

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/randomId.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/randomId.ts#L23)

___

### removeParticipants

▸ **removeParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

**`whatsapp`** 389389 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L31)

___

### sendAddParticipants

▸ **sendAddParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `[key: `${number}@c.us`]`: `number`; `participants?`: { `[key: `${number}@c.us`]`: { `code`: `string` ; `invite_code`: `string` \| ``null`` ; `invite_code_exp`: `string` \| ``null``  };  }[] ; `status`: `number`  }\>

**`whatsapp`** 437722 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`Wid`](../classes/whatsapp.Wid.md) |
| `participants` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `[key: `${number}@c.us`]`: `number`; `participants?`: { `[key: `${number}@c.us`]`: { `code`: `string` ; `invite_code`: `string` \| ``null`` ; `invite_code_exp`: `string` \| ``null``  };  }[] ; `status`: `number`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendGroupParticipants.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendGroupParticipants.ts#L23)

___

### sendCallSignalingMsg

▸ **sendCallSignalingMsg**(`data`, `tagId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `payload`: `any` ; `status`: ``200``  }\>

**`whatsapp`** 56981

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.common` | `Object` |
| `data.common.call_id?` | `string` |
| `data.common.peer_jid` | `string` |
| `data.common.type?` | `string` |
| `data.payload` | [`string`, { `call-creator`: `string` ; `call-id`: `string` ; `count?`: `any`  }, ``null``] |
| `tagId?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `payload`: `any` ; `status`: ``200``  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendCallSignalingMsg.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendCallSignalingMsg.ts#L20)

___

### sendClear

▸ **sendClear**(`chat`, `keepStarred?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 83802

**`whatsapp`** 483802 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `keepStarred?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendClear.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendClear.ts#L23)

___

### sendCreateGroup

▸ **sendCreateGroup**(`groupName`, `participants`, `ephemeral?`, `dogfooding?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `gid`: [`Wid`](../classes/whatsapp.Wid.md) ; `participants`: { `[key: string]`: { `code`: `string`  };  }[] ; `status`: `number`  }\>

**`whatsapp`** 79583

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | `string` |
| `participants` | [`Wid`](../classes/whatsapp.Wid.md)[] |
| `ephemeral?` | `number` |
| `dogfooding?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `gid`: [`Wid`](../classes/whatsapp.Wid.md) ; `participants`: { `[key: string]`: { `code`: `string`  };  }[] ; `status`: `number`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendCreateGroup.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendCreateGroup.ts#L21)

___

### sendDelete

▸ **sendDelete**(`chat`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 20052

**`whatsapp`** 920052 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendDelete.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendDelete.ts#L23)

___

### sendDemoteParticipants

▸ **sendDemoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 437722 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`Wid`](../classes/whatsapp.Wid.md) |
| `participants` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendGroupParticipants.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendGroupParticipants.ts#L57)

___

### sendExitGroup

▸ **sendExitGroup**(`group`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 5501

**`whatsapp`** 605501 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendExitGroup.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendExitGroup.ts#L23)

___

### sendJoinGroupViaInvite

▸ **sendJoinGroupViaInvite**(`code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)\>

**`whatsapp`** 69586

**`whatsapp`** 769586 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendJoinGroupViaInvite.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendJoinGroupViaInvite.ts#L23)

___

### sendProductToChat

▸ **sendProductToChat**(...`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

**`whatsapp`** 196519 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L49)

___

### sendPromoteParticipants

▸ **sendPromoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 437722 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`Wid`](../classes/whatsapp.Wid.md) |
| `participants` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendGroupParticipants.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendGroupParticipants.ts#L49)

___

### sendQueryExists

▸ **sendQueryExists**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `biz`: `boolean` ; `bizInfo?`: { `verifiedName?`: { `isApi`: `boolean` ; `level`: `string` ; `name`: `string` ; `privacyMode`: `any` ; `serial`: `string`  }  } ; `disappearingMode?`: { `duration`: `number` ; `settingTimestamp`: `number`  } ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

**`whatsapp`** 57547

**`whatsapp`** 69722 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `biz`: `boolean` ; `bizInfo?`: { `verifiedName?`: { `isApi`: `boolean` ; `level`: `string` ; `name`: `string` ; `privacyMode`: `any` ; `serial`: `string`  }  } ; `disappearingMode?`: { `duration`: `number` ; `settingTimestamp`: `number`  } ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendQueryExists.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendQueryExists.ts#L23)

___

### sendQueryGroupInvite

▸ **sendQueryGroupInvite**(`inviteCode`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`QueryGroupInviteResult`](../interfaces/whatsapp.functions.QueryGroupInviteResult.md)\>

**`whatsapp`** 10790

**`whatsapp`** 810790 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`QueryGroupInviteResult`](../interfaces/whatsapp.functions.QueryGroupInviteResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendQueryGroupInvite.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendQueryGroupInvite.ts#L50)

___

### sendReactionToMsg

▸ **sendReactionToMsg**(`msg`, `reactionText`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`whatsapp`** 21357

**`whatsapp`** 621357 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `reactionText` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendReactionToMsg.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendReactionToMsg.ts#L23)

___

### sendRemoveParticipants

▸ **sendRemoveParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 437722 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`Wid`](../classes/whatsapp.Wid.md) |
| `participants` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendGroupParticipants.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendGroupParticipants.ts#L41)

___

### sendRevokeGroupInviteCode

▸ **sendRevokeGroupInviteCode**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`whatsapp`** 69586

**`whatsapp`** 769586 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendRevokeGroupInviteCode.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendRevokeGroupInviteCode.ts#L23)

___

### sendSeen

▸ **sendSeen**(`chat`, `whenAvailable`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`whatsapp`** 9609

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `whenAvailable` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L27)

___

### sendSetGroupDescription

▸ **sendSetGroupDescription**(`groupId`, `description`, `tagId`, `previousTagId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 57490

**`whatsapp`** 357490 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |
| `description` | `string` |
| `tagId` | `string` |
| `previousTagId?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setGroup.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setGroup.ts#L32)

___

### sendSetGroupProperty

▸ **sendSetGroupProperty**(`groupId`, `property`, `value`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 57490

**`whatsapp`** 357490 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |
| `property` | [`GROUP_SETTING_TYPE`](../enums/whatsapp.enums.GROUP_SETTING_TYPE.md) |
| `value` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setGroup.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setGroup.ts#L42)

___

### sendSetGroupSubject

▸ **sendSetGroupSubject**(`groupId`, `subject`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 57490

**`whatsapp`** 357490 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |
| `subject` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setGroup.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setGroup.ts#L24)

___

### sendSetPicture

▸ **sendSetPicture**(`chat`, `previewBase64`, `pictureBase64`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

This function can be used to define a group picture or self profile

**`whatsapp`** 78426

**`whatsapp`** 5018 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) |
| `previewBase64` | `string` |
| `pictureBase64` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/profilePic.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/profilePic.ts#L25)

___

### sendTextMsgToChat

▸ **sendTextMsgToChat**(`chat`, `message`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`whatsapp`** 5524

**`whatsapp`** 105524 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | `any` |
| `message` | `any` |
| `options` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendTextMsgToChat.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendTextMsgToChat.ts#L22)

___

### setArchive

▸ **setArchive**(`chat`, `archive`, `id?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 59992

**`whatsapp`** 259992 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `archive` | `boolean` |
| `id?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setArchive.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setArchive.ts#L24)

___

### setMyStatus

▸ **setMyStatus**(`status`, `seqId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number`  }\>

**`whatsapp`** 46898

**`whatsapp`** 51316 >= 2.2204.13

**`whatsapp`** 546898 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `string` |
| `seqId?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/status.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/status.ts#L33)

___

### setPin

▸ **setPin**(`chat`, `pin`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 10236

**`whatsapp`** 510236 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `pin` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setPin.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setPin.ts#L24)

___

### typeAttributeFromProtobuf

▸ **typeAttributeFromProtobuf**(`protoMessage`): `string`

**`whatsapp`** 93650

**`whatsapp`** 193650 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoMessage` | `Object` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/typeAttributeFromProtobuf.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/typeAttributeFromProtobuf.ts#L22)

___

### unblockContact

▸ **unblockContact**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 80140

**`whatsapp`** 780140 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`ContactModel`](../classes/whatsapp.ContactModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/blockContact.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/blockContact.ts#L28)

___

### uploadProductImage

▸ **uploadProductImage**(`mediaBlob`, `filehash`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`whatsapp`** 78986

**`whatsapp`** 778986 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaBlob` | [`OpaqueData`](../classes/whatsapp.OpaqueData.md) |
| `filehash` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/uploadProductImage.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/uploadProductImage.ts#L23)

___

### uploadThumbnail

▸ **uploadThumbnail**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `filehash`: `string` ; `kind`: `string` ; `mediaEntry`: [`MediaEntry`](../classes/whatsapp.MediaEntry.md)  }\>

**`whatsapp`** 74460

**`whatsapp`** 474460 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ThumbnailData`](../interfaces/whatsapp.functions.ThumbnailData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `filehash`: `string` ; `kind`: `string` ; `mediaEntry`: [`MediaEntry`](../classes/whatsapp.MediaEntry.md)  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/uploadThumbnail.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/uploadThumbnail.ts#L39)
