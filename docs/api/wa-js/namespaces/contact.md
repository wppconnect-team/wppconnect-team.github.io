---
id: "contact"
title: "Namespace: contact"
sidebar_label: "contact"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [EventTypes](../interfaces/contact.EventTypes.md)

## Chat Functions

- [getStatus](contact.md#getstatus)
- [queryExists](contact.md#queryexists)

## Type aliases

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/wa-js/src/contact/eventEmitter.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/eventEmitter.ts#L22)

## Events

### clearListeners

• **clearListeners**<`Name`\>(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/contact/eventEmitter.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/eventEmitter.ts#L72)

___

### listenerCount

• **listenerCount**<`Name`\>(`eventName?`): `number`

The number of listeners for the `eventName` or all events if not specified.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/contact/eventEmitter.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/eventEmitter.ts#L80)

___

### off

• **off**<`Name`\>(`eventName`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/contact.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/contact/eventEmitter.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/eventEmitter.ts#L60)

___

### on

• **on**<`Name`\>(`eventName`, `listener`): [`UnsubscribeFn`](contact.md#unsubscribefn)

Subscribe to one event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/contact.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

[`UnsubscribeFn`](contact.md#unsubscribefn)

An unsubscribe method.

#### Defined in

[packages/wa-js/src/contact/eventEmitter.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/eventEmitter.ts#L44)

___

### once

• **once**<`Name`\>(`eventName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/contact.EventTypes.md)[`Name`]\>

Subscribe to one or more events only once. It will be unsubscribed after the first event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/contact.EventTypes.md)[`Name`]\>

#### Defined in

[packages/wa-js/src/contact/eventEmitter.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/contact/eventEmitter.ts#L53)

## Chat Functions

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
