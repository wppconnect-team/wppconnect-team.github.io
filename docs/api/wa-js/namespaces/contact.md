---
id: "contact"
title: "Namespace: contact"
sidebar_label: "contact"
sidebar_position: 0
custom_edit_url: null
---

## Chat Functions

### getProfilePictureUrl

▸ **getProfilePictureUrl**(`contactId`, `full?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| ``null`` \| `string`\>

Get the current text status

**`example`**
```javascript
const url = await WPP.contact.getProfilePicture('[number]@c.us');
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `contactId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) | `undefined` |
| `full` | `boolean` | `true` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| ``null`` \| `string`\>

#### Defined in

[packages/wa-js/src/contact/functions/getProfilePictureUrl.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/functions/getProfilePictureUrl.ts#L31)

___

### getStatus

▸ **getStatus**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusModel`](../classes/whatsapp.StatusModel.md)\>

Get the current text status

**`example`**
```javascript
await WPP.contact.getStatus('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusModel`](../classes/whatsapp.StatusModel.md)\>

#### Defined in

[packages/wa-js/src/contact/functions/getStatus.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/functions/getStatus.ts#L31)

___

### queryExists

▸ **queryExists**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`QueryExistsResult` \| ``null``\>

Check if the number exists and what is correct ID

This help to identify numbers with nine digit in Brazil

**`example`**
```javascript
const result = await WPP.contact.queryExists('[number]@c.us');
console.log(result.wid); // Correct ID
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`QueryExistsResult` \| ``null``\>

#### Defined in

[packages/wa-js/src/contact/functions/queryExists.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/functions/queryExists.ts#L55)
