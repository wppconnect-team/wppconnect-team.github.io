---
id: "blocklist"
title: "Namespace: blocklist"
sidebar_label: "blocklist"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### all

▸ **all**(): [`Wid`](../classes/whatsapp.Wid.md)[]

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)[]

#### Defined in

[packages/wa-js/src/blocklist/functions/all.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/functions/all.ts#L19)

___

### blockContact

▸ **blockContact**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`BlocklistResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`BlocklistResult`\>

#### Defined in

[packages/wa-js/src/blocklist/functions/blockContact.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/functions/blockContact.ts#L22)

___

### isBlocked

▸ **isBlocked**(`chatId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/blocklist/functions/isBlocked.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/functions/isBlocked.ts#L20)

___

### unblockContact

▸ **unblockContact**(`chatId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`BlocklistResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`BlocklistResult`\>

#### Defined in

[packages/wa-js/src/blocklist/functions/unblockContact.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/functions/unblockContact.ts#L22)
