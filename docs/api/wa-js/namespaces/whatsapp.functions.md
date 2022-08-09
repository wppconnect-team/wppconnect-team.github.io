---
id: "whatsapp.functions"
title: "Namespace: functions"
sidebar_label: "functions"
custom_edit_url: null
---

[whatsapp](whatsapp.md).functions

## Interfaces

- [GroupActionChange](../interfaces/whatsapp.functions.GroupActionChange.md)
- [LinkPreviewResult](../interfaces/whatsapp.functions.LinkPreviewResult.md)
- [MsgFindQueryParams](../interfaces/whatsapp.functions.MsgFindQueryParams.md)
- [QueryGroupInviteResult](../interfaces/whatsapp.functions.QueryGroupInviteResult.md)
- [ReactionData](../interfaces/whatsapp.functions.ReactionData.md)
- [SimpleAckData](../interfaces/whatsapp.functions.SimpleAckData.md)
- [ThumbnailData](../interfaces/whatsapp.functions.ThumbnailData.md)

## Functions

### addAndSendMsgToChat

▸ **addAndSendMsgToChat**(`chat`, `message`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>, [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>]\>

**`Whatsapp`**

75887

**`Whatsapp`**

975887 >= 2.2222.8

**`Whatsapp`**

623631 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `message` | [`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md), `any`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>, [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>]\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/addAndSendMsgToChat.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/addAndSendMsgToChat.ts#L25)

___

### addParticipants

▸ **addParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

89389

**`Whatsapp`**

389389 >= 2.2222.8

**`Whatsapp`**

815562 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L24)

___

### addProduct

▸ **addProduct**(`product`, `imageWidth?`, `imageHeight?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

96519

**`Whatsapp`**

196519 >= 2.2222.8

**`Whatsapp`**

895697 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`ProductModel`](../classes/whatsapp.ProductModel.md) |
| `imageWidth?` | `number` |
| `imageHeight?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L27)

___

### blockContact

▸ **blockContact**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

80140

**`Whatsapp`**

780140 >= 2.2222.8

**`Whatsapp`**

48826 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`ContactModel`](../classes/whatsapp.ContactModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/blockContact.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/blockContact.ts#L24)

___

### canMarkPlayed

▸ **canMarkPlayed**(`msg`): `boolean`

**`Whatsapp`**

2.2146.9:64850

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L45)

___

### createBusinessCatalog

▸ **createBusinessCatalog**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

2.2144.10:35339

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L21)

___

### createMsgProtobuf

▸ **createMsgProtobuf**(`e`, `t?`): `Object`

**`Whatsapp`**

6565

**`Whatsapp`**

606565 >= 2.2222.8

**`Whatsapp`**

615947 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `t?` | `Object` |

#### Returns

`Object`

#### Defined in

[packages/wa-js/src/whatsapp/functions/createMsgProtobuf.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/createMsgProtobuf.ts#L24)

___

### createOrUpdateReactions

▸ **createOrUpdateReactions**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

7394

**`Whatsapp`**

307394 >= 2.2222.8

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

**`Whatsapp`**

96519

**`Whatsapp`**

196519 >= 2.2222.8

**`Whatsapp`**

895697 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `productIds` | `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L47)

___

### demoteParticipants

▸ **demoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

89389

**`Whatsapp`**

389389 >= 2.2222.8

**`Whatsapp`**

815562 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L51)

___

### editProduct

▸ **editProduct**(`product`, `imageWidth?`, `imageHeight?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

96519

**`Whatsapp`**

196519 >= 2.2222.8

**`Whatsapp`**

895697 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`ProductModel`](../classes/whatsapp.ProductModel.md) |
| `imageWidth?` | `number` |
| `imageHeight?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L37)

___

### encodeMaybeMediaType

▸ **encodeMaybeMediaType**(`type`): `string` \| `undefined`

**`Whatsapp`**

760210

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string` \| `undefined`

#### Defined in

[packages/wa-js/src/whatsapp/functions/encodeMaybeMediaType.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/encodeMaybeMediaType.ts#L22)

___

### encryptAndSendGroupMsg

▸ **encryptAndSendGroupMsg**(`message`, `protobuf`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

51974

**`Whatsapp`**

951974 >= 2.2222.8

**`Whatsapp`**

677020 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `protobuf` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/encryptAndSendGroupMsg.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/encryptAndSendGroupMsg.ts#L25)

___

### encryptAndSendMsg

▸ **encryptAndSendMsg**(`message`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

95547

**`Whatsapp`**

695547 >= 2.2222.8

**`Whatsapp`**

925080 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/encryptAndSendMsg.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/encryptAndSendMsg.ts#L25)

___

### fetchLinkPreview

▸ **fetchLinkPreview**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

**`Whatsapp`**

19146

**`Whatsapp`**

75820 >= 2.2204.13

**`Whatsapp`**

519146 >= 2.2222.8

**`Whatsapp`**

632590 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/fetchLinkPreview.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/fetchLinkPreview.ts#L38)

___

### findChat

▸ **findChat**(`wid`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`Whatsapp`**

50101

**`Whatsapp`**

650101 >= 2.2222.8

**`Whatsapp`**

211739 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/findChat.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/findChat.ts#L25)

___

### findFirstWebLink

▸ **findFirstWebLink**(`message`): `undefined` \| `string`

**`Whatsapp`**

29929

**`Whatsapp`**

31042 >= 2.2204.13

**`Whatsapp`**

829929 >= 2.2222.8

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

**`Whatsapp`**

92375

**`Whatsapp`**

692375 >= 2.2222.8

**`Whatsapp`**

321120 >= 2.2228.4

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

[packages/wa-js/src/whatsapp/functions/genMinimalLinkPreview.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/genMinimalLinkPreview.ts#L25)

___

### generateVideoThumbsAndDuration

▸ **generateVideoThumbsAndDuration**(`data`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `duration`: `number` ; `thumbs`: { `fullHeight`: `number` ; `fullWidth`: `number` ; `height`: `number` ; `url`: `string` ; `width`: `number`  }[]  }\>

**`Whatsapp`**

51428

**`Whatsapp`**

551428 >= 2.2222.8

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

**`Whatsapp`**

16104

**`Whatsapp`**

416104 >= 2.2222.8

**`Whatsapp`**

963388 >= 2.2224.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.wids` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)[]\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/getFanOutList.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getFanOutList.ts#L25)

___

### getGroupSenderKeyList

▸ **getGroupSenderKeyList**(`wid`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `rotateKey`: `boolean` ; `skDistribList`: [`Wid`](../classes/whatsapp.Wid.md)[] ; `skList`: [`Wid`](../classes/whatsapp.Wid.md)[]  }\>

**`Whatsapp`**

43201

**`Whatsapp`**

543201 >= 2.2222.8

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

**`Whatsapp`**

98250

**`Whatsapp`**

16413 >= 2.2204.13

**`Whatsapp`**

66333 >= 2.2218.4

**`Whatsapp`**

266333 >= 2.2222.8

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/getOrGenerate.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getOrGenerate.ts#L24)

___

### getStatus

▸ **getStatus**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

**`Whatsapp`**

46898

**`Whatsapp`**

51316 >= 2.2204.13

**`Whatsapp`**

546898 >= 2.2222.8

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

**`Whatsapp`**

48309

**`Deprecated`**

**`Whatsapp`**

648309 >= 2.2222.8

**`Whatsapp`**

471873 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L50)

___

### handleChatSimpleReceipt

▸ **handleChatSimpleReceipt**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

48309

**`Whatsapp`**

648309 >= 2.2222.8

**`Whatsapp`**

471873 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L76)

___

### handleGroupSimpleAck

▸ **handleGroupSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

84947

**`Deprecated`**

**`Whatsapp`**

284947 >= 2.2222.8

**`Whatsapp`**

359554 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L60)

___

### handleGroupSimpleReceipt

▸ **handleGroupSimpleReceipt**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

84947

**`Whatsapp`**

284947 >= 2.2222.8

**`Whatsapp`**

359554 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L84)

___

### handleStatusSimpleAck

▸ **handleStatusSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

90756

**`Deprecated`**

**`Whatsapp`**

590756 >= 2.2222.8

**`Whatsapp`**

585294 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L40)

___

### handleStatusSimpleReceipt

▸ **handleStatusSimpleReceipt**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

90756

**`Whatsapp`**

590756 >= 2.2222.8

**`Whatsapp`**

585294 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L68)

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

**`Whatsapp`**

13194

**`Whatsapp`**

9530 >= 2.2210.9

**`Whatsapp`**

909530 >= 2.2222.8

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L24)

___

### isLegacyWebdBackend

▸ **isLegacyWebdBackend**(): `boolean`

**`Whatsapp`**

88555

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isMDBackend.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isMDBackend.ts#L23)

___

### isLoggedIn

▸ **isLoggedIn**(): `boolean`

**`Whatsapp`**

13194 >= 2.2208.11

**`Whatsapp`**

9530 >= 2.2210.9

**`Whatsapp`**

909530 >= 2.2222.8

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L31)

___

### isMDBackend

▸ **isMDBackend**(): `boolean`

**`Whatsapp`**

88555

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isMDBackend.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isMDBackend.ts#L20)

___

### markForgetSenderKey

▸ **markForgetSenderKey**(`wid`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

43201

**`Whatsapp`**

543201 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |
| `participants` | [`Wid`](../classes/whatsapp.Wid.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/getGroupSenderKeyList.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getGroupSenderKeyList.ts#L34)

___

### markPlayed

▸ **markPlayed**(`msg`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

30734

**`Whatsapp`**

730734 >= 2.2222.8

**`Whatsapp`**

242050 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L40)

___

### markUnread

▸ **markUnread**(`chat`, `whenAvailable`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`Whatsapp`**

9609

**`Whatsapp`**

561498 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `whenAvailable` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L23)

___

### mediaTypeFromProtobuf

▸ **mediaTypeFromProtobuf**(`protoMessage`): `string` \| ``null``

**`Whatsapp`**

95318

**`Whatsapp`**

58853 >= 2.2218.4

**`Whatsapp`**

458853 >= 2.2222.8

**`Whatsapp`**

760210 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoMessage` | `Object` |

#### Returns

`string` \| ``null``

#### Defined in

[packages/wa-js/src/whatsapp/functions/mediaTypeFromProtobuf.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/mediaTypeFromProtobuf.ts#L24)

___

### msgFindQuery

▸ **msgFindQuery**(`direction`, `params`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>[]\>

**`Whatsapp`**

76581

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

**`Whatsapp`**

89389

**`Whatsapp`**

389389 >= 2.2222.8

**`Whatsapp`**

815562 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L42)

___

### randomHex

▸ **randomHex**(`size`): `string`

**`Whatsapp`**

832678

**`Whatsapp`**

787614 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/randomHex.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/randomHex.ts#L23)

___

### randomMessageId

▸ **randomMessageId**(): `string`

**`Whatsapp`**

65212

**`Whatsapp`**

15860 >= 2.2204.13

**`Whatsapp`**

465212 >= 2.2222.8

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/randomId.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/randomId.ts#L23)

___

### removeParticipants

▸ **removeParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

89389

**`Whatsapp`**

389389 >= 2.2222.8

**`Whatsapp`**

815562 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L33)

___

### sendAddParticipants

▸ **sendAddParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `[key: `${number}@c.us`]`: `number`; `participants?`: { `[key: `${number}@c.us`]`: { `code`: `string` ; `invite_code`: `string` \| ``null`` ; `invite_code_exp`: `string` \| ``null``  };  }[] ; `status`: `number`  }\>

**`Whatsapp`**

437722 >= 2.2222.8

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

**`Whatsapp`**

56981

**`Whatsapp`**

383674 >= 2.2228.4

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

[packages/wa-js/src/whatsapp/functions/sendCallSignalingMsg.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendCallSignalingMsg.ts#L22)

___

### sendClear

▸ **sendClear**(`chat`, `keepStarred?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

83802

**`Whatsapp`**

483802 >= 2.2222.8

**`Whatsapp`**

382019 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `keepStarred?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendClear.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendClear.ts#L24)

___

### sendCreateGroup

▸ **sendCreateGroup**(`groupName`, `participants`, `ephemeral?`, `dogfooding?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `gid`: [`Wid`](../classes/whatsapp.Wid.md) ; `participants`: { `[key: string]`: { `code`: `string`  };  }[] ; `status`: `number`  }\>

**`Whatsapp`**

79583

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

**`Whatsapp`**

20052

**`Whatsapp`**

920052 >= 2.2222.8

**`Whatsapp`**

43125 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendDelete.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendDelete.ts#L24)

___

### sendDemoteParticipants

▸ **sendDemoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

437722 >= 2.2222.8

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

**`Whatsapp`**

5501

**`Whatsapp`**

605501 >= 2.2222.8

**`Whatsapp`**

525510 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendExitGroup.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendExitGroup.ts#L24)

___

### sendJoinGroupViaInvite

▸ **sendJoinGroupViaInvite**(`code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)\>

**`Whatsapp`**

69586

**`Whatsapp`**

769586 >= 2.2222.8

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

**`Whatsapp`**

96519

**`Whatsapp`**

196519 >= 2.2222.8

**`Whatsapp`**

895697 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L53)

___

### sendPromoteParticipants

▸ **sendPromoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

437722 >= 2.2222.8

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

**`Whatsapp`**

57547

**`Whatsapp`**

69722 >= 2.2204.13

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

**`Whatsapp`**

10790

**`Whatsapp`**

810790 >= 2.2222.8

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

**`Whatsapp`**

21357

**`Whatsapp`**

621357 >= 2.2222.8

**`Whatsapp`**

805687 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `reactionText` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendReactionToMsg.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendReactionToMsg.ts#L24)

___

### sendRemoveParticipants

▸ **sendRemoveParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

437722 >= 2.2222.8

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

**`Whatsapp`**

69586

**`Whatsapp`**

769586 >= 2.2222.8

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

**`Whatsapp`**

9609

**`Whatsapp`**

561498 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `whenAvailable` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L31)

___

### sendSetGroupDescription

▸ **sendSetGroupDescription**(`groupId`, `description`, `tagId`, `previousTagId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

57490

**`Whatsapp`**

357490 >= 2.2222.8

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

**`Whatsapp`**

57490

**`Whatsapp`**

357490 >= 2.2222.8

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

**`Whatsapp`**

57490

**`Whatsapp`**

357490 >= 2.2222.8

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

▸ **sendSetPicture**(`chat`, `previewBase64`, `pictureBase64`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `_duplicate`: `boolean` ; `eurl`: `string` ; `status`: `number` ; `tag`: `string` ; `token`: `string`  }\>

This function can be used to define a group picture or self profile

**`Whatsapp`**

78426

**`Whatsapp`**

5018 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) |
| `previewBase64` | `string` |
| `pictureBase64` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `_duplicate`: `boolean` ; `eurl`: `string` ; `status`: `number` ; `tag`: `string` ; `token`: `string`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/profilePic.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/profilePic.ts#L25)

___

### sendTextMsgToChat

▸ **sendTextMsgToChat**(`chat`, `message`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`Whatsapp`**

5524

**`Whatsapp`**

105524 >= 2.2222.8

**`Whatsapp`**

781845 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | `any` |
| `message` | `any` |
| `options` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendTextMsgToChat.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendTextMsgToChat.ts#L23)

___

### setArchive

▸ **setArchive**(`chat`, `archive`, `id?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

59992

**`Whatsapp`**

259992 >= 2.2222.8

**`Whatsapp`**

503153 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `archive` | `boolean` |
| `id?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setArchive.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setArchive.ts#L25)

___

### setMyStatus

▸ **setMyStatus**(`status`, `seqId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number`  }\>

**`Whatsapp`**

46898

**`Whatsapp`**

51316 >= 2.2204.13

**`Whatsapp`**

546898 >= 2.2222.8

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

**`Whatsapp`**

10236

**`Whatsapp`**

510236 >= 2.2222.8

**`Whatsapp`**

742348 >= 2.2228.4

**`Whatsapp`**

456180 >= 2.2230.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `pin` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setPin.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setPin.ts#L26)

___

### typeAttributeFromProtobuf

▸ **typeAttributeFromProtobuf**(`protoMessage`): `string`

**`Whatsapp`**

93650

**`Whatsapp`**

193650 >= 2.2222.8

**`Whatsapp`**

985947 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoMessage` | `Object` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/typeAttributeFromProtobuf.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/typeAttributeFromProtobuf.ts#L23)

___

### unblockContact

▸ **unblockContact**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`Whatsapp`**

80140

**`Whatsapp`**

780140 >= 2.2222.8

**`Whatsapp`**

48826 >= 2.2228.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`ContactModel`](../classes/whatsapp.ContactModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/blockContact.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/blockContact.ts#L30)

___

### updateDBForGroupAction

▸ **updateDBForGroupAction**(`meta`, `action`): `any`

**`Whatsapp`**

970041

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | `Object` |
| `meta.actions` | [`GroupActionChange`](../interfaces/whatsapp.functions.GroupActionChange.md)[] |
| `meta.author` | [`Wid`](../classes/whatsapp.Wid.md) |
| `meta.chatId` | [`Wid`](../classes/whatsapp.Wid.md) |
| `meta.externalId` | `string` |
| `meta.offline` | ``null`` |
| `meta.pushname` | `string` |
| `meta.ts` | `number` |
| `action` | [`GroupActionChange`](../interfaces/whatsapp.functions.GroupActionChange.md) |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/functions/updateDBForGroupAction.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/updateDBForGroupAction.ts#L33)

___

### updateParticipants

▸ **updateParticipants**(`params`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`Whatsapp`**

951974 >= 2.2222.8

**`Whatsapp`**

318615 >= 2.2224.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.group` | [`Wid`](../classes/whatsapp.Wid.md) |
| `params.isOffline` | `boolean` |
| `params.participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |
| `params.version` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/updateParticipants.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/updateParticipants.ts#L25)

___

### uploadProductImage

▸ **uploadProductImage**(`mediaBlob`, `filehash`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`Whatsapp`**

78986

**`Whatsapp`**

778986 >= 2.2222.8

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

**`Whatsapp`**

74460

**`Whatsapp`**

474460 >= 2.2222.8

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ThumbnailData`](../interfaces/whatsapp.functions.ThumbnailData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `filehash`: `string` ; `kind`: `string` ; `mediaEntry`: [`MediaEntry`](../classes/whatsapp.MediaEntry.md)  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/uploadThumbnail.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/uploadThumbnail.ts#L39)
