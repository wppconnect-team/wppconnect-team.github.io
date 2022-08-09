---
id: "webpack"
title: "Namespace: webpack"
sidebar_label: "webpack"
sidebar_position: 0
custom_edit_url: null
---

## Type Aliases

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

[packages/wa-js/src/webpack/index.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L41)

## Variables

### isInjected

• **isInjected**: `boolean` = `false`

Is setted true when the loader is injected

#### Defined in

[packages/wa-js/src/webpack/index.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L26)

___

### isReady

• **isReady**: `boolean` = `false`

Is setted true when the all webpack modules are fully loaded

#### Defined in

[packages/wa-js/src/webpack/index.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L31)

## Functions

### injectLoader

▸ **injectLoader**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/webpack/index.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L58)

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

[packages/wa-js/src/webpack/index.ts:125](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L125)

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

[packages/wa-js/src/webpack/index.ts:108](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L108)

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

[packages/wa-js/src/webpack/index.ts:202](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L202)

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

[packages/wa-js/src/webpack/index.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L33)

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

[packages/wa-js/src/webpack/index.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L37)

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

[packages/wa-js/src/webpack/index.ts:185](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L185)

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

[packages/wa-js/src/webpack/index.ts:145](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L145)

___

### webpackRequire

▸ **webpackRequire**<`T`\>(`moduleId`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`T`

#### Defined in

[packages/wa-js/src/webpack/index.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/webpack/index.ts#L43)
