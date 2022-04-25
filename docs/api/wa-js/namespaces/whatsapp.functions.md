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
- [SimpleAckData](../interfaces/whatsapp.functions.SimpleAckData.md)

## Functions

### addAndSendMsgToChat

▸ **addAndSendMsgToChat**(`chat`, `message`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>, [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>]\>

**`whatsapp`** 75887

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `message` | [`ModelPropertiesContructor`](whatsapp.md#modelpropertiescontructor)<[`MsgModel`](../classes/whatsapp.MsgModel.md), `any`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`MsgModel`](../classes/whatsapp.MsgModel.md)\>, [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMsgResult`](../enums/whatsapp.enums.SendMsgResult.md)\>]\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/addAndSendMsgToChat.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/addAndSendMsgToChat.ts#L22)

___

### addParticipants

▸ **addParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L21)

___

### addProduct

▸ **addProduct**(`product`, `imageWidth?`, `imageHeight?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`ProductModel`](../classes/whatsapp.ProductModel.md) |
| `imageWidth?` | `number` |
| `imageHeight?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L24)

___

### blockContact

▸ **blockContact**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 80140

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`ContactModel`](../classes/whatsapp.ContactModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/blockContact.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/blockContact.ts#L21)

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

[packages/wa-js/src/whatsapp/functions/markSeen.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L38)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `t?` | `Object` |

#### Returns

`Object`

#### Defined in

[packages/wa-js/src/whatsapp/functions/createMsgProtobuf.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/createMsgProtobuf.ts#L21)

___

### deleteProducts

▸ **deleteProducts**(`productIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

#### Parameters

| Name | Type |
| :------ | :------ |
| `productIds` | `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L38)

___

### demoteParticipants

▸ **demoteParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

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

### editProduct

▸ **editProduct**(`product`, `imageWidth?`, `imageHeight?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

#### Parameters

| Name | Type |
| :------ | :------ |
| `product` | [`ProductModel`](../classes/whatsapp.ProductModel.md) |
| `imageWidth?` | `number` |
| `imageHeight?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L31)

___

### fetchLinkPreview

▸ **fetchLinkPreview**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

**`whatsapp`** 19146

**`whatsapp`** 75820 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/fetchLinkPreview.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/fetchLinkPreview.ts#L36)

___

### findChat

▸ **findChat**(`wid`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`whatsapp`** 50101

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/findChat.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/findChat.ts#L22)

___

### findFirstWebLink

▸ **findFirstWebLink**(`message`): `undefined` \| `string`

**`whatsapp`** 29929

**`whatsapp`** 31042 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/findFirstWebLink.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/findFirstWebLink.ts#L22)

___

### getOrGenerate

▸ **getOrGenerate**(): `string`

**`whatsapp`** 98250

**`whatsapp`** 16413 >= 2.2204.13

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/getOrGenerate.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getOrGenerate.ts#L22)

___

### getStatus

▸ **getStatus**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

**`whatsapp`** 46898

**`whatsapp`** 51316 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/status.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/status.ts#L23)

___

### handleChatSimpleAck

▸ **handleChatSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 48309

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L40)

___

### handleGroupSimpleAck

▸ **handleGroupSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 84947

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L45)

___

### handleStatusSimpleAck

▸ **handleStatusSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 90756

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | [`SimpleAckData`](../interfaces/whatsapp.functions.SimpleAckData.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L35)

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

**`whatsapp`** 13194

**`whatsapp`** 9530 >= 2.2210.9

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L23)

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

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L29)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/markSeen.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/markSeen.ts#L33)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoMessage` | `Object` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/mediaTypeFromProtobuf.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/mediaTypeFromProtobuf.ts#L20)

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

### randomMessageId

▸ **randomMessageId**(): `string`

**`whatsapp`** 65212

**`whatsapp`** 15860 >= 2.2204.13

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/randomId.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/randomId.ts#L22)

___

### removeParticipants

▸ **removeParticipants**(`group`, `participants`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 89389

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `participants` | [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/groupParticipants.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/groupParticipants.ts#L27)

___

### sendCallSignalingMsg

▸ **sendCallSignalingMsg**(`data`, `tagId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

**`whatsapp`** 56981

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.common` | `Object` |
| `data.common.call_id?` | `string` |
| `data.common.peer_jid` | [`Wid`](../classes/whatsapp.Wid.md) |
| `data.common.type?` | `string` |
| `data.payload` | [`string`, { `call-creator`: `string` ; `call-id`: `string` ; `count?`: `any`  }, ``null``] |
| `tagId?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendCallSignalingMsg.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendCallSignalingMsg.ts#L22)

___

### sendClear

▸ **sendClear**(`chat`, `keepStarred?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 83802

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |
| `keepStarred?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendClear.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendClear.ts#L21)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendDelete.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendDelete.ts#L21)

___

### sendExitGroup

▸ **sendExitGroup**(`group`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 5501

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`ChatModel`](../classes/whatsapp.ChatModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendExitGroup.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendExitGroup.ts#L21)

___

### sendJoinGroupViaInvite

▸ **sendJoinGroupViaInvite**(`code`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)\>

**`whatsapp`** 69586

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Wid`](../classes/whatsapp.Wid.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendJoinGroupViaInvite.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendJoinGroupViaInvite.ts#L21)

___

### sendProductToChat

▸ **sendProductToChat**(...`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 96519

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/products.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/products.ts#L41)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`QueryGroupInviteResult`](../interfaces/whatsapp.functions.QueryGroupInviteResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendQueryGroupInvite.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendQueryGroupInvite.ts#L48)

___

### sendRevokeGroupInviteCode

▸ **sendRevokeGroupInviteCode**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`whatsapp`** 69586

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendRevokeGroupInviteCode.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendRevokeGroupInviteCode.ts#L21)

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

[packages/wa-js/src/whatsapp/functions/setGroup.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setGroup.ts#L28)

___

### sendSetGroupProperty

▸ **sendSetGroupProperty**(`groupId`, `property`, `value`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 57490

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |
| `property` | [`GROUP_SETTING_TYPE`](../enums/whatsapp.enums.GROUP_SETTING_TYPE.md) |
| `value` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setGroup.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setGroup.ts#L36)

___

### sendSetGroupSubject

▸ **sendSetGroupSubject**(`groupId`, `subject`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 57490

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | [`Wid`](../classes/whatsapp.Wid.md) |
| `subject` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/setGroup.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/setGroup.ts#L22)

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | `any` |
| `message` | `any` |
| `options` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendTextMsgToChat.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendTextMsgToChat.ts#L20)

___

### setMyStatus

▸ **setMyStatus**(`status`, `seqId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number`  }\>

**`whatsapp`** 46898

**`whatsapp`** 51316 >= 2.2204.13

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `string` |
| `seqId?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/status.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/status.ts#L31)

___

### typeAttributeFromProtobuf

▸ **typeAttributeFromProtobuf**(`protoMessage`): `string`

**`whatsapp`** 93650

#### Parameters

| Name | Type |
| :------ | :------ |
| `protoMessage` | `Object` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/typeAttributeFromProtobuf.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/typeAttributeFromProtobuf.ts#L20)

___

### unblockContact

▸ **unblockContact**(`contact`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**`whatsapp`** 80140

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`ContactModel`](../classes/whatsapp.ContactModel.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/blockContact.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/blockContact.ts#L24)

___

### uploadProductImage

▸ **uploadProductImage**(`mediaBlob`, `filehash`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

**`whatsapp`** 78986

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaBlob` | [`OpaqueData`](../classes/whatsapp.OpaqueData.md) |
| `filehash` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/uploadProductImage.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/uploadProductImage.ts#L21)
