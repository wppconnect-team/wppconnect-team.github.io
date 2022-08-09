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

## Type Aliases

### AuthCode

Ƭ **AuthCode**: [`AuthCodeSingleDevice`](../interfaces/conn.AuthCodeSingleDevice.md) \| [`AuthCodeMultiDevice`](../interfaces/conn.AuthCodeMultiDevice.md)

#### Defined in

[packages/wa-js/src/conn/types.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/types.ts#L34)

## Functions

### getAuthCode

▸ **getAuthCode**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

Return the current auth code

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

[return description]

#### Defined in

[packages/wa-js/src/conn/functions/getAuthCode.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/getAuthCode.ts#L28)

___

### getMyDeviceId

▸ **getMyDeviceId**(): [`Wid`](../classes/whatsapp.Wid.md) \| `undefined`

Return the current logged user ID with device id

**`Example`**

```javascript
const wid = WPP.conn.getMyDeviceId();
console.log(wid.toString()); // Output: 123:4@c.us
```

#### Returns

[`Wid`](../classes/whatsapp.Wid.md) \| `undefined`

#### Defined in

[packages/wa-js/src/conn/functions/getMyDeviceId.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/getMyDeviceId.ts#L28)

___

### getMyUserId

▸ **getMyUserId**(): [`Wid`](../classes/whatsapp.Wid.md) \| `undefined`

Return the current logged user ID without device id

**`Example`**

```javascript
const wid = WPP.conn.getMyUserId();
console.log(wid.toString()); // Output: 123@c.us
```

#### Returns

[`Wid`](../classes/whatsapp.Wid.md) \| `undefined`

#### Defined in

[packages/wa-js/src/conn/functions/getMyUserId.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/getMyUserId.ts#L28)

___

### getPlatform

▸ **getPlatform**(): `any`

Check what's device platform is connected

**`Example`**

```javascript
const getPlatform = WPP.conn.getPlatform();
```

#### Returns

`any`

android | iphone | wp

#### Defined in

[packages/wa-js/src/conn/functions/getPlatform.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/getPlatform.ts#L28)

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

Check is main interface is authenticated and loaded, bot not synced

**`Example`**

```javascript
const isMainLoaded = WPP.conn.isMainLoaded();
```

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/isMainLoaded.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/isMainLoaded.ts#L27)

___

### isMainReady

▸ **isMainReady**(): `boolean`

Check is main interface is authenticated, loaded and synced

**`Example`**

```javascript
const isMainReady = WPP.conn.isMainReady();
```

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/isMainReady.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/isMainReady.ts#L33)

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

**`Example`**

```javascript
await WPP.conn.refreshQR();
```

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`AuthCode`](conn.md#authcode) \| ``null``\>

#### Defined in

[packages/wa-js/src/conn/functions/refreshQR.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/refreshQR.ts#L33)

___

### setKeepAlive

▸ **setKeepAlive**(`enable?`): `boolean`

Set keep alive state, that will force the focused and online state

**`Example`**

```javascript
// To enable
await WPP.conn.setKeepAlive();

// To disable
await WPP.conn.setKeepAlive(false);
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enable` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/conn/functions/setKeepAlive.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/functions/setKeepAlive.ts#L32)

___

### setMultiDevice

▸ **setMultiDevice**(`md?`): `boolean`

**`Example`**

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
