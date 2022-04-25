---
id: "whatsapp.Wid"
title: "Class: Wid"
sidebar_label: "Wid"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).Wid

**`whatsapp`** 89867

**`whatsapp`** 39546 >= 2.2204.13

## Constructors

### constructor

• **new Wid**(`id`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `options?` | `Object` |
| `options.intentionallyUsePrivateConstructor` | `boolean` |

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L22)

## Properties

### \_serialized

• **\_serialized**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L27)

___

### agent

• `Optional` **agent**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L29)

___

### device

• `Optional` **device**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L31)

___

### server

• **server**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L61)

___

### user

• **user**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L69)

## Methods

### canBeWid

▸ **canBeWid**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L71)

___

### equals

▸ **equals**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L33)

___

### getDeviceId

▸ **getDeviceId**(): `number`

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L35)

___

### getSignalAddress

▸ **getSignalAddress**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L37)

___

### isBroadcast

▸ **isBroadcast**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L39)

___

### isCompanion

▸ **isCompanion**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L41)

___

### isGreaterThan

▸ **isGreaterThan**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L43)

___

### isGroup

▸ **isGroup**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L45)

___

### isGroupCall

▸ **isGroupCall**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L47)

___

### isLessThan

▸ **isLessThan**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L49)

___

### isOfficialBizAccount

▸ **isOfficialBizAccount**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L51)

___

### isPSA

▸ **isPSA**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L53)

___

### isServer

▸ **isServer**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L55)

___

### isStatusV3

▸ **isStatusV3**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L57)

___

### isUser

▸ **isUser**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L59)

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L65)

___

### toJid

▸ **toJid**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L63)

___

### toString

▸ **toString**(`option?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `option?` | `Object` |
| `option.formatFull?` | `boolean` |
| `option.legacy?` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L67)

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` \| [`Wid`](whatsapp.Wid.md) |
| `b` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L73)

___

### isBroadcast

▸ `Static` **isBroadcast**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L75)

___

### isGreaterThan

▸ `Static` **isGreaterThan**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` \| [`Wid`](whatsapp.Wid.md) |
| `b` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L77)

___

### isGroup

▸ `Static` **isGroup**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L79)

___

### isGroupCall

▸ `Static` **isGroupCall**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L81)

___

### isLessThan

▸ `Static` **isLessThan**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` \| [`Wid`](whatsapp.Wid.md) |
| `b` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L83)

___

### isOfficialBizAccount

▸ `Static` **isOfficialBizAccount**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L85)

___

### isPSA

▸ `Static` **isPSA**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L87)

___

### isServer

▸ `Static` **isServer**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L89)

___

### isStatusV3

▸ `Static` **isStatusV3**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L91)

___

### isUser

▸ `Static` **isUser**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L93)

___

### isWid

▸ `Static` **isWid**(`wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:95](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L95)

___

### isXWid

▸ `Static` **isXWid**(`server`, `wid`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `string` |
| `wid` | `string` \| [`Wid`](whatsapp.Wid.md) |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:97](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L97)

___

### user

▸ `Static` **user**(`wid`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Wid.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Wid.ts#L99)
