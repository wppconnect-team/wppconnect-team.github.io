---
id: "util"
title: "Namespace: util"
sidebar_label: "util"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [WPPError](../classes/util.WPPError.md)

## Type aliases

### FunctionProperties

Ƭ **FunctionProperties**<`T`\>: `Pick`<`T`, [`FunctionPropertyNames`](util.md#functionpropertynames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L23)

___

### FunctionPropertyNames

Ƭ **FunctionPropertyNames**<`T`\>: { [K in keyof T]: T[K] extends Function ? K : never }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L19)

___

### IfEquals

Ƭ **IfEquals**<`X`, `Y`, `A`, `B`\>: <T\>() => `T` extends `X` ? ``1`` : ``2`` extends <T\>() => `T` extends `Y` ? ``1`` : ``2`` ? `A` : `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `X` | `X` |
| `Y` | `Y` |
| `A` | `X` |
| `B` | `never` |

#### Defined in

[packages/wa-js/src/util/types.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L31)

___

### NonFunctionProperties

Ƭ **NonFunctionProperties**<`T`\>: `Pick`<`T`, [`NonFunctionPropertyNames`](util.md#nonfunctionpropertynames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L29)

___

### NonFunctionPropertyNames

Ƭ **NonFunctionPropertyNames**<`T`\>: { [K in keyof T]: T[K] extends Function ? never : K }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L25)

___

### ReadonlyProperties

Ƭ **ReadonlyProperties**<`T`\>: `Pick`<`T`, [`ReadonlyPropertiesNames`](util.md#readonlypropertiesnames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L56)

___

### ReadonlyPropertiesNames

Ƭ **ReadonlyPropertiesNames**<`T`\>: { [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P\> }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L47)

___

### WritableProperties

Ƭ **WritableProperties**<`T`\>: `Pick`<`T`, [`WritablePropertiesNames`](util.md#writablepropertiesnames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L45)

___

### WritablePropertiesNames

Ƭ **WritablePropertiesNames**<`T`\>: { [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P\> }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L37)

## Functions

### blobToBase64

▸ **blobToBase64**(`blob`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `Blob` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/util/blobToBase64.ts:17](https://github.com/wppconnect-team/wa-js/blob/main/src/util/blobToBase64.ts#L17)

___

### convertToFile

▸ **convertToFile**(`data`, `mimetype?`, `filename?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `mimetype?` | `string` |
| `filename?` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`File`\>

#### Defined in

[packages/wa-js/src/util/convertToFile.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/util/convertToFile.ts#L22)

___

### createWid

▸ **createWid**(`id`): [`Wid`](../classes/whatsapp.Wid.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| { `_serialized`: `string`  } |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md) \| `undefined`

#### Defined in

[packages/wa-js/src/util/createWid.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/util/createWid.ts#L19)

___

### isBase64

▸ **isBase64**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/util/isBase64.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/util/isBase64.ts#L19)
