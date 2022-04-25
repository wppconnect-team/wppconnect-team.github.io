---
id: "whatsapp.MsgKey"
title: "Class: MsgKey"
sidebar_label: "MsgKey"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).MsgKey

**`whatsapp`** 65212

**`whatsapp`** 32219 >= 2.2204.13

## Constructors

### constructor

• **new MsgKey**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | { `from`: [`Wid`](whatsapp.Wid.md) ; `id`: `string` ; `participant?`: `any` ; `selfDir`: ``"in"`` \| ``"out"`` ; `to`: [`Wid`](whatsapp.Wid.md)  } \| { `fromMe`: `boolean` ; `id`: `string` ; `participant?`: `any` ; `remote`: [`Wid`](whatsapp.Wid.md)  } |

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L24)

## Properties

### \_serialized

• **\_serialized**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L40)

___

### fromMe

• **fromMe**: `boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L36)

___

### id

• **id**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L37)

___

### participant

• **participant**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L39)

___

### remote

• **remote**: [`Wid`](whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L38)

## Methods

### clone

▸ **clone**(): [`MsgKey`](whatsapp.MsgKey.md)

#### Returns

[`MsgKey`](whatsapp.MsgKey.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L42)

___

### equals

▸ **equals**(`key`): key is MsgKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `unknown` |

#### Returns

key is MsgKey

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L43)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L41)

___

### fromString

▸ `Static` **fromString**(`key`): [`MsgKey`](whatsapp.MsgKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`MsgKey`](whatsapp.MsgKey.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L45)

___

### newId

▸ `Static` **newId**(): `string`

**`whatsapp`** >= 2.2208.7

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MsgKey.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MsgKey.ts#L50)
