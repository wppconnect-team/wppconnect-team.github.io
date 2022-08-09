---
id: "contact"
title: "Namespace: contact"
sidebar_label: "contact"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ContactListOptions](../interfaces/contact.ContactListOptions.md)

## Chat Functions

- [getProfilePictureUrl](contact.md#getprofilepictureurl)
- [getStatus](contact.md#getstatus)
- [queryExists](contact.md#queryexists)

## Contact Functions

- [list](contact.md#list)

## Chat Functions

### getProfilePictureUrl

▸ **getProfilePictureUrl**(`contactId`, `full?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| ``null`` \| `string`\>

Get the current text status

**`Example`**

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

▸ **getStatus**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| `string`\>

Get the current text status

**`Example`**

```javascript
await WPP.contact.getStatus('[number]@c.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<``null`` \| `string`\>

#### Defined in

[packages/wa-js/src/contact/functions/getStatus.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/functions/getStatus.ts#L32)

___

### queryExists

▸ **queryExists**(`contactId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`QueryExistsResult` \| ``null``\>

Check if the number exists and what is correct ID

This help to identify numbers with nine digit in Brazil

**`Example`**

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

___

## Contact Functions

### list

▸ **list**(`options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ContactModel`](../classes/whatsapp.ContactModel.md)[]\>

Return a list of contacts

**`Example`**

```javascript
// All contacts
const contats = await WPP.contact.list();

// Only my contacts
const contacts = await WPP.contact.list({onlyMyContacts: true});

// Only with label Text
const contacts = await WPP.contact.list({withLabels: ['Test']});

// Only with label id
const contacts = await WPP.contact.list({withLabels: ['1']});

// Only with label with one of text or id
const contacts = await WPP.contact.list({withLabels: ['Alfa','5']});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ContactListOptions`](../interfaces/contact.ContactListOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ContactModel`](../classes/whatsapp.ContactModel.md)[]\>

#### Defined in

[packages/wa-js/src/contact/functions/list.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/functions/list.ts#L47)
