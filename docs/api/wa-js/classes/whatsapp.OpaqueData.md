---
id: "whatsapp.OpaqueData"
title: "Class: OpaqueData"
sidebar_label: "OpaqueData"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).OpaqueData

**`whatsapp`** 34949

## Hierarchy

- [`OpaqueDataBase`](whatsapp.OpaqueDataBase.md)

  ↳ **`OpaqueData`**

## Constructors

### constructor

• **new OpaqueData**()

#### Inherited from

[OpaqueDataBase](whatsapp.OpaqueDataBase.md).[constructor](whatsapp.OpaqueDataBase.md#constructor)

## Properties

### released

• **released**: `boolean`

#### Inherited from

[OpaqueDataBase](whatsapp.OpaqueDataBase.md).[released](whatsapp.OpaqueDataBase.md#released)

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L21)

## Methods

### autorelease

▸ **autorelease**(): `void`

#### Returns

`void`

#### Inherited from

[OpaqueDataBase](whatsapp.OpaqueDataBase.md).[autorelease](whatsapp.OpaqueDataBase.md#autorelease)

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L23)

___

### autoreleaseWhenPromiseCompletes

▸ **autoreleaseWhenPromiseCompletes**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\> |

#### Returns

`void`

#### Inherited from

[OpaqueDataBase](whatsapp.OpaqueDataBase.md).[autoreleaseWhenPromiseCompletes](whatsapp.OpaqueDataBase.md#autoreleasewhenpromisecompletes)

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L24)

___

### filepath

▸ **filepath**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L32)

___

### forceToBlob

▸ **forceToBlob**(): `Blob`

#### Returns

`Blob`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L39)

___

### formData

▸ **formData**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L37)

___

### getBase64

▸ **getBase64**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L31)

___

### isBlobEqual

▸ **isBlobEqual**(`e`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L40)

___

### retain

▸ **retain**(): `void`

#### Returns

`void`

#### Inherited from

[OpaqueDataBase](whatsapp.OpaqueDataBase.md).[retain](whatsapp.OpaqueDataBase.md#retain)

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L22)

___

### setWavFilepath

▸ **setWavFilepath**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L34)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L36)

___

### throwIfReleased

▸ **throwIfReleased**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Inherited from

[OpaqueDataBase](whatsapp.OpaqueDataBase.md).[throwIfReleased](whatsapp.OpaqueDataBase.md#throwifreleased)

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L25)

___

### type

▸ **type**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L38)

___

### url

▸ **url**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L30)

___

### validate

▸ **validate**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L35)

___

### wavFilepath

▸ **wavFilepath**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L33)

___

### createFromBase64Jpeg

▸ `Static` **createFromBase64Jpeg**(`base64`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`OpaqueData`](whatsapp.OpaqueData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `base64` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`OpaqueData`](whatsapp.OpaqueData.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L42)

___

### createFromData

▸ `Static` **createFromData**(`blob`, `type?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`OpaqueData`](whatsapp.OpaqueData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `BlobPart` |
| `type?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`OpaqueData`](whatsapp.OpaqueData.md)\>

#### Defined in

[packages/wa-js/src/whatsapp/misc/OpaqueData.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/OpaqueData.ts#L43)
