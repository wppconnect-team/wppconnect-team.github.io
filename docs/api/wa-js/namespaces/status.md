---
id: "status"
title: "Namespace: status"
sidebar_label: "status"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [EventTypes](../interfaces/status.EventTypes.md)
- [SendStatusOptions](../interfaces/status.SendStatusOptions.md)
- [TextStatusOptions](../interfaces/status.TextStatusOptions.md)

## Type aliases

### AllStatusOptions

Ƭ **AllStatusOptions**: [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md) & [`TextStatusOptions`](../interfaces/status.TextStatusOptions.md)

#### Defined in

[packages/wa-js/src/status/defaultSendStatusOptions.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/status/defaultSendStatusOptions.ts#L20)

___

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/wa-js/src/status/eventEmitter.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/status/eventEmitter.ts#L22)

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

[packages/wa-js/src/status/eventEmitter.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/status/eventEmitter.ts#L73)

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

[packages/wa-js/src/status/eventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/status/eventEmitter.ts#L81)

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
| `listener` | (`eventData`: [`EventTypes`](../interfaces/status.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/status/eventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/status/eventEmitter.ts#L61)

___

### on

• **on**<`Name`\>(`eventName`, `listener`): [`UnsubscribeFn`](status.md#unsubscribefn)

Subscribe to one event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"sync"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/status.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

[`UnsubscribeFn`](status.md#unsubscribefn)

An unsubscribe method.

#### Defined in

[packages/wa-js/src/status/eventEmitter.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/status/eventEmitter.ts#L45)

___

### once

• **once**<`Name`\>(`eventName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/status.EventTypes.md)[`Name`]\>

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

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/status.EventTypes.md)[`Name`]\>

#### Defined in

[packages/wa-js/src/status/eventEmitter.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/status/eventEmitter.ts#L54)

## Variables

### defaultSendStatusOptions

• `Const` **defaultSendStatusOptions**: [`AllStatusOptions`](status.md#allstatusoptions)

#### Defined in

[packages/wa-js/src/status/defaultSendStatusOptions.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/status/defaultSendStatusOptions.ts#L22)

## Functions

### get

▸ **get**(`chatId`): [`StatusV3Model`](../classes/whatsapp.StatusV3Model.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`StatusV3Model`](../classes/whatsapp.StatusV3Model.md) \| `undefined`

#### Defined in

[packages/wa-js/src/status/functions/get.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/get.ts#L20)

___

### getMyStatus

▸ **getMyStatus**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](../classes/whatsapp.StatusV3Model.md)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](../classes/whatsapp.StatusV3Model.md)\>

#### Defined in

[packages/wa-js/src/status/functions/getMyStatus.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/getMyStatus.ts#L19)

___

### sendRawStatus

▸ **sendRawStatus**(`message`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`RawMessage`](chat.md#rawmessage) |
| `options` | [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/status/functions/sendRawStatus.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendRawStatus.ts#L25)

___

### sendTextStatus

▸ **sendTextStatus**(`content`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Send a text message to status stories

**`example`**
```javascript
WPP.status.sendTextStatus(`Bootstrap primary color: #0275d8`, { backgroundColor: '#0275d8', font: 2});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options` | [`TextStatusOptions`](../interfaces/status.TextStatusOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/status/functions/sendTextStatus.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendTextStatus.ts#L38)
