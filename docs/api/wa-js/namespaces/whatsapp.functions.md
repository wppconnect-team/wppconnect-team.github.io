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

▸ **createMsgProtobuf**(`e`, `t?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 6565

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`MsgModel`](../classes/whatsapp.MsgModel.md) |
| `t?` | `Object` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

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

**`whatsapp`** 75820

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| [`LinkPreviewResult`](../interfaces/whatsapp.functions.LinkPreviewResult.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/fetchLinkPreview.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/fetchLinkPreview.ts#L34)

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

**`whatsapp`** 31042

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/findFirstWebLink.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/findFirstWebLink.ts#L20)

___

### getOrGenerate

▸ **getOrGenerate**(): `string`

**`whatsapp`** 16413

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/getOrGenerate.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/getOrGenerate.ts#L20)

___

### getStatus

▸ **getStatus**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

**`whatsapp`** 51316

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: [`Wid`](../classes/whatsapp.Wid.md) ; `status`: `string`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/status.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/status.ts#L21)

___

### handleChatSimpleAck

▸ **handleChatSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 48309

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L23)

___

### handleGroupSimpleAck

▸ **handleGroupSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 84947

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L26)

___

### handleStatusSimpleAck

▸ **handleStatusSimpleAck**(`ackData`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

**`whatsapp`** 90756

#### Parameters

| Name | Type |
| :------ | :------ |
| `ackData` | `any` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/handleAck.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/handleAck.ts#L20)

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

**`whatsapp`** 13194

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/functions/isAuthenticated.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/isAuthenticated.ts#L20)

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

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/functions/randomId.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/randomId.ts#L20)

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

**`whatsapp`** 69722

#### Parameters

| Name | Type |
| :------ | :------ |
| `contact` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `biz`: `boolean` ; `bizInfo?`: { `verifiedName?`: { `isApi`: `boolean` ; `level`: `string` ; `name`: `string` ; `privacyMode`: `any` ; `serial`: `string`  }  } ; `disappearingMode?`: { `duration`: `number` ; `settingTimestamp`: `number`  } ; `wid`: [`Wid`](../classes/whatsapp.Wid.md)  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/sendQueryExists.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/sendQueryExists.ts#L21)

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

**`whatsapp`** 5018

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) |
| `previewBase64` | `string` |
| `pictureBase64` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/profilePic.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/profilePic.ts#L24)

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

**`whatsapp`** 51316

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `string` |
| `seqId?` | `number` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `status`: `number`  }\>

#### Defined in

[packages/wa-js/src/whatsapp/functions/status.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/functions/status.ts#L27)

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
