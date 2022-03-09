---
id: "conn"
title: "Namespace: conn"
sidebar_label: "conn"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [AuthCodeMultiDevice](../interfaces/conn.AuthCodeMultiDevice.md)
- [AuthCodeSingleDevice](../interfaces/conn.AuthCodeSingleDevice.md)
- [EventTypes](../interfaces/conn.EventTypes.md)

## Type aliases

### AuthCode

Ƭ **AuthCode**: [`AuthCodeSingleDevice`](../interfaces/conn.AuthCodeSingleDevice.md) \| [`AuthCodeMultiDevice`](../interfaces/conn.AuthCodeMultiDevice.md)

#### Defined in

[packages/wa-js/src/conn/types.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/types.ts#L34)

___

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L24)

## Events

### clearListeners

• **clearListeners**<`Name`\>(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`EventTypes`](../interfaces/conn.EventTypes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:111](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L111)

___

### listenerCount

• **listenerCount**<`Name`\>(`eventName?`): `number`

The number of listeners for the `eventName` or all events if not specified.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`EventTypes`](../interfaces/conn.EventTypes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:119](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L119)

___

### off

• **off**<`Name`\>(`eventName`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`EventTypes`](../interfaces/conn.EventTypes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/conn.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L99)

___

### on

• **on**<`Name`\>(`eventName`, `listener`): [`UnsubscribeFn`](conn.md#unsubscribefn)

Subscribe to one event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`EventTypes`](../interfaces/conn.EventTypes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/conn.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

[`UnsubscribeFn`](conn.md#unsubscribefn)

An unsubscribe method.

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L83)

___

### once

• **once**<`Name`\>(`eventName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/conn.EventTypes.md)[`Name`]\>

Subscribe to one or more events only once. It will be unsubscribed after the first event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends keyof [`EventTypes`](../interfaces/conn.EventTypes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/conn.EventTypes.md)[`Name`]\>

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L92)

## Functions

### getAuthCode

▸ **getAuthCode**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

Return the current auth code

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

#### Defined in

[packages/wa-js/src/conn/functions/getAuthCode.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/getAuthCode.ts#L28)

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/isAuthenticated.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/isAuthenticated.ts#L19)

___

### isIdle

▸ **isIdle**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/isIdle.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/isIdle.ts#L20)

___

### isMainLoaded

▸ **isMainLoaded**(): `boolean`

Check is main interface is loaded and authenticated

**`example`**
```javascript
const isMainLoaded = WPP.conn.isMainLoaded();
```

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/isMainLoaded.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/isMainLoaded.ts#L27)

___

### isMultiDevice

▸ **isMultiDevice**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/isMultiDevice.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/isMultiDevice.ts#L19)

___

### logout

▸ **logout**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/conn/functions/logout.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/logout.ts#L19)

___

### refreshQR

▸ **refreshQR**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

Refresh the current QRCode when is waiting for scan and return the current code

For legacy: It will wait for next code
For multidevice: It will generate a new one

**`example`**
```javascript
await WPP.conn.refreshQR();
```

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

#### Defined in

[packages/wa-js/src/conn/functions/refreshQR.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/refreshQR.ts#L33)

___

### setMultiDevice

▸ **setMultiDevice**(`md?`): `boolean`

**`example`**
```javascript
WPP.conn.setMultiDevice(true)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `md` | `boolean` | `true` | If it's true, WhatsApp WEB will switch to MD. If it's false, WhatsApp WEB will switch to Legacy. |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/setMultiDevice.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/setMultiDevice.ts#L26)
