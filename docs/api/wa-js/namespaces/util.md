---
id: "util"
title: "Namespace: util"
sidebar_label: "util"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [WPPError](../classes/util.WPPError.md)

## Type Aliases

### FunctionProperties

Ƭ **FunctionProperties**<`T`\>: `Pick`<`T`, [`FunctionPropertyNames`](util.md#functionpropertynames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L30)

___

### FunctionPropertyNames

Ƭ **FunctionPropertyNames**<`T`\>: { [K in keyof T]: T[K] extends Function ? K : never }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L26)

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

[packages/wa-js/src/util/types.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L38)

___

### InferArgs

Ƭ **InferArgs**<`T`\>: `T` extends (...`t`: [...(infer Arg)]) => `any` ? `Arg` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L19)

___

### InferReturn

Ƭ **InferReturn**<`T`\>: `T` extends (...`t`: [...(infer Arg)]) => infer Res ? `Res` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L22)

___

### NonFunctionProperties

Ƭ **NonFunctionProperties**<`T`\>: `Pick`<`T`, [`NonFunctionPropertyNames`](util.md#nonfunctionpropertynames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L36)

___

### NonFunctionPropertyNames

Ƭ **NonFunctionPropertyNames**<`T`\>: { [K in keyof T]: T[K] extends Function ? never : K }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L32)

___

### ReadonlyProperties

Ƭ **ReadonlyProperties**<`T`\>: `Pick`<`T`, [`ReadonlyPropertiesNames`](util.md#readonlypropertiesnames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L63)

___

### ReadonlyPropertiesNames

Ƭ **ReadonlyPropertiesNames**<`T`\>: { [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P\> }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L54)

___

### WritableProperties

Ƭ **WritableProperties**<`T`\>: `Pick`<`T`, [`WritablePropertiesNames`](util.md#writablepropertiesnames)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L52)

___

### WritablePropertiesNames

Ƭ **WritablePropertiesNames**<`T`\>: { [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P\> }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/wa-js/src/util/types.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/util/types.ts#L44)

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

### downloadImage

▸ **downloadImage**(`url`, `type?`, `quality?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `data`: `string` ; `height`: `number` ; `width`: `number`  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `type` | `string` | `'image/jpeg'` |
| `quality` | `any` | `0.85` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `data`: `string` ; `height`: `number` ; `width`: `number`  }\>

#### Defined in

[packages/wa-js/src/util/downloadImage.ts:17](https://github.com/wppconnect-team/wa-js/blob/main/src/util/downloadImage.ts#L17)

___

### fetchDataFromPNG

▸ **fetchDataFromPNG**(`url`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )\>

#### Defined in

[packages/wa-js/src/util/fetchDataFromPNG.ts:17](https://github.com/wppconnect-team/wa-js/blob/main/src/util/fetchDataFromPNG.ts#L17)

___

### getVideoInfoFromBuffer

▸ **getVideoInfoFromBuffer**(`arrayBuffer`): `Object`

Get the video file duration

**`See`**

 - https://gist.github.com/Elements-/cf063254730cd754599e#gistcomment-3241210
 - https://gist.github.com/OllieJones/5ffb011fa3a11964154975582360391c

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayBuffer` | [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `duration` | `number` |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[packages/wa-js/src/util/getVideoInfoFromBuffer.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/util/getVideoInfoFromBuffer.ts#L22)

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

___

### resizeImage

▸ **resizeImage**(`blob`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Blob` \| `File`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `Blob` |
| `options` | `Options` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`Blob` \| `File`\>

#### Defined in

[packages/wa-js/src/util/resizeImage.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/util/resizeImage.ts#L19)

___

### wrapFunction

▸ **wrapFunction**<`TFunc`\>(`func`, `callback`): (...`args`: [`InferArgs`](util.md#inferargs)<`TFunc`\>) => [`InferReturn`](util.md#inferreturn)<`TFunc`\>

Wrap a function with the callback

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TFunc` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `TFunc` |
| `callback` | (`func`: `TFunc`, ...`args`: [`InferArgs`](util.md#inferargs)<`TFunc`\>) => [`InferReturn`](util.md#inferreturn)<`TFunc`\> |

#### Returns

`fn`

▸ (...`args`): [`InferReturn`](util.md#inferreturn)<`TFunc`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`InferArgs`](util.md#inferargs)<`TFunc`\> |

##### Returns

[`InferReturn`](util.md#inferreturn)<`TFunc`\>

#### Defined in

[packages/wa-js/src/util/wrapFunction.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/util/wrapFunction.ts#L22)
