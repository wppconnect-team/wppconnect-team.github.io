---
id: "webpack"
title: "Namespace: webpack"
sidebar_label: "webpack"
sidebar_position: 0
custom_edit_url: null
---

## Type aliases

### SearchModuleCondition

Ƭ **SearchModuleCondition**: (`module`: `any`, `moduleId`: `string`) => `boolean`

#### Type declaration

▸ (`module`, `moduleId`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `any` |
| `moduleId` | `string` |

##### Returns

`boolean`

#### Defined in

[packages/wa-js/src/webpack.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L47)

## Variables

### isInjected

• **isInjected**: `boolean` = `false`

Is setted true when the loader is injected

#### Defined in

[packages/wa-js/src/webpack.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L32)

___

### isReady

• **isReady**: `boolean` = `false`

Is setted true when the all webpack modules are fully loaded

#### Defined in

[packages/wa-js/src/webpack.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L37)

___

### webpackRequire

• **webpackRequire**: <T\>(`moduleId`: `string`) => `T` & { `m`: { `[key: string]`: `any`;  } ; `e`: (`id`: `string`) => [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> ; `u`: (`id`: `string`) => `string`  }

#### Defined in

[packages/wa-js/src/webpack.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L49)

## Functions

### injectLoader

▸ **injectLoader**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/webpack.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L64)

___

### isReactComponent

▸ **isReactComponent**(`moduleId`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/wa-js/src/webpack.ts:131](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L131)

___

### moduleSource

▸ **moduleSource**(`moduleId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/webpack.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L114)

___

### modules

▸ **modules**(`condition?`, `reverse?`): `Object`

Return the webpack module from a search function

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `condition?` | [`SearchModuleCondition`](webpack.md#searchmodulecondition) | `undefined` | Function for compare the modules |
| `reverse` | `boolean` | `false` | Search in reverse order |

#### Returns

`Object`

#### Defined in

[packages/wa-js/src/webpack.ts:208](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L208)

___

### onInjected

▸ **onInjected**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/webpack.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L39)

___

### onReady

▸ **onReady**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/webpack.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L43)

___

### search

▸ **search**<`T`\>(`condition`, `reverse?`): `T` \| ``null``

Return the webpack module from a search function

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `condition` | [`SearchModuleCondition`](webpack.md#searchmodulecondition) | `undefined` | Function for compare the modules |
| `reverse` | `boolean` | `false` | Search in reverse order |

#### Returns

`T` \| ``null``

#### Defined in

[packages/wa-js/src/webpack.ts:191](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L191)

___

### searchId

▸ **searchId**(`condition`, `reverse?`): `string` \| ``null``

Return the webpack module id from a search function

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `condition` | [`SearchModuleCondition`](webpack.md#searchmodulecondition) | `undefined` | Function for compare the modules |
| `reverse` | `boolean` | `false` | Search in reverse order |

#### Returns

`string` \| ``null``

#### Defined in

[packages/wa-js/src/webpack.ts:151](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack.ts#L151)
