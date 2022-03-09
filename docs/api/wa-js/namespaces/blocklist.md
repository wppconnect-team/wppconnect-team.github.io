---
id: "blocklist"
title: "Namespace: blocklist"
sidebar_label: "blocklist"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [EventTypes](../interfaces/blocklist.EventTypes.md)

## Type aliases

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/wa-js/src/blocklist/eventEmitter.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/eventEmitter.ts#L22)

## Events

### clearListeners

• **clearListeners**<`Name`\>(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"sync"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/blocklist/eventEmitter.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/eventEmitter.ts#L73)

___

### listenerCount

• **listenerCount**<`Name`\>(`eventName?`): `number`

The number of listeners for the `eventName` or all events if not specified.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"sync"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/blocklist/eventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/eventEmitter.ts#L81)

___

### off

• **off**<`Name`\>(`eventName`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"sync"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/blocklist.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/blocklist/eventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/eventEmitter.ts#L61)

___

### on

• **on**<`Name`\>(`eventName`, `listener`): [`UnsubscribeFn`](blocklist.md#unsubscribefn)

Subscribe to one event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"sync"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/blocklist.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

[`UnsubscribeFn`](blocklist.md#unsubscribefn)

An unsubscribe method.

#### Defined in

[packages/wa-js/src/blocklist/eventEmitter.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/eventEmitter.ts#L45)

___

### once

• **once**<`Name`\>(`eventName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/blocklist.EventTypes.md)[`Name`]\>

Subscribe to one or more events only once. It will be unsubscribed after the first event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"sync"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/blocklist.EventTypes.md)[`Name`]\>

#### Defined in

[packages/wa-js/src/blocklist/eventEmitter.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/blocklist/eventEmitter.ts#L54)

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
