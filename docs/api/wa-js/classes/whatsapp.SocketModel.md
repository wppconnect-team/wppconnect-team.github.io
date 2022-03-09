---
id: "whatsapp.SocketModel"
title: "Class: SocketModel"
sidebar_label: "SocketModel"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).SocketModel

**`whatsapp`** 65044

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)

  ↳ **`SocketModel`**

## Constructors

### constructor

• **new SocketModel**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`SocketModel`](whatsapp.SocketModel.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L72)

## Properties

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### backoffGeneration

• **backoffGeneration**: `number`

#### Inherited from

ModelProxy.backoffGeneration

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L32)

___

### canSend

• `Optional` **canSend**: `any`

#### Inherited from

ModelProxy.canSend

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L36)

___

### cancelHash

• `Optional` **cancelHash**: `any`

#### Inherited from

ModelProxy.cancelHash

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L39)

___

### collection

• `Optional` **collection**: `undefined`

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L64)

___

### conflictPromise

• `Optional` **conflictPromise**: `any`

#### Inherited from

ModelProxy.conflictPromise

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L50)

___

### doubleAckHash

• `Optional` **doubleAckHash**: `any`

#### Inherited from

ModelProxy.doubleAckHash

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L40)

___

### hasSynced

• `Optional` **hasSynced**: `any`

#### Inherited from

ModelProxy.hasSynced

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L33)

___

### isIncognito

• `Optional` **isIncognito**: `any`

#### Inherited from

ModelProxy.isIncognito

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L47)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### lastPhoneMessage

• `Optional` **lastPhoneMessage**: `any`

#### Inherited from

ModelProxy.lastPhoneMessage

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L58)

___

### launchGeneration

• **launchGeneration**: `number`

#### Inherited from

ModelProxy.launchGeneration

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L31)

___

### launched

• `Optional` **launched**: `any`

#### Inherited from

ModelProxy.launched

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L55)

___

### logoutMutex

• **logoutMutex**: `number`

#### Inherited from

ModelProxy.logoutMutex

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L52)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:backoffGeneration` | `number` |
| `change:canSend` | `undefined` \| `number` |
| `change:cancelHash` | `undefined` \| `number` |
| `change:conflictPromise` | `undefined` \| `number` |
| `change:doubleAckHash` | `undefined` \| `number` |
| `change:hasSynced` | `undefined` \| `number` |
| `change:isIncognito` | `undefined` \| `number` |
| `change:lastPhoneMessage` | `undefined` \| `number` |
| `change:launchGeneration` | `number` |
| `change:launched` | `undefined` \| `number` |
| `change:logoutMutex` | `number` |
| `change:mustExitLoop` | `undefined` \| `number` |
| `change:pendingPhoneReqs` | `number` |
| `change:phoneWatchdog` | `undefined` \| `number` |
| `change:pokeable` | `undefined` \| `number` |
| `change:refWatcher` | `undefined` \| `number` |
| `change:resumePromise` | `undefined` \| `number` |
| `change:retryTimestamp` | `undefined` \| `number` |
| `change:runPromise` | `undefined` \| `number` |
| `change:sendHash` | `undefined` \| `number` |
| `change:sendQueue` | `undefined` \| `number` |
| `change:sequence` | `number` |
| `change:shortTagBase` | `undefined` \| `number` |
| `change:shouldForceReconnect` | `number` |
| `change:shouldUpgradeToMDIntern` | `number` |
| `change:shouldUpgradeToMDPord` | `number` |
| `change:socket` | `undefined` \| `number` |
| `change:socketPreload` | `undefined` \| `number` |
| `change:socketWatcher` | `undefined` \| `number` |
| `change:state` | `number` |
| `change:stream` | `number` |
| `change:streamPromise` | `undefined` \| `number` |
| `change:syncTag` | `undefined` \| `number` |

#### Inherited from

ModelProxy.mirrorMask

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L29)

___

### mustExitLoop

• `Optional` **mustExitLoop**: `any`

#### Inherited from

ModelProxy.mustExitLoop

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L56)

___

### parent

• `Optional` **parent**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[parent](whatsapp.Model.md#parent)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L62)

___

### pendingPhoneReqs

• **pendingPhoneReqs**: `number`

#### Inherited from

ModelProxy.pendingPhoneReqs

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L46)

___

### phoneWatchdog

• `Optional` **phoneWatchdog**: `any`

#### Inherited from

ModelProxy.phoneWatchdog

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L45)

___

### pokeable

• `Optional` **pokeable**: `any`

#### Inherited from

ModelProxy.pokeable

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L54)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### refWatcher

• `Optional` **refWatcher**: `any`

#### Inherited from

ModelProxy.refWatcher

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L44)

___

### resumePromise

• `Optional` **resumePromise**: `any`

#### Inherited from

ModelProxy.resumePromise

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L51)

___

### retryTimestamp

• `Optional` **retryTimestamp**: `any`

#### Inherited from

ModelProxy.retryTimestamp

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L53)

___

### runPromise

• `Optional` **runPromise**: `any`

#### Inherited from

ModelProxy.runPromise

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L48)

___

### sendHash

• `Optional` **sendHash**: `any`

#### Inherited from

ModelProxy.sendHash

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L38)

___

### sendQueue

• `Optional` **sendQueue**: `any`

#### Inherited from

ModelProxy.sendQueue

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L37)

___

### sequence

• **sequence**: `number`

#### Inherited from

ModelProxy.sequence

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L41)

___

### shortTagBase

• `Optional` **shortTagBase**: `any`

#### Inherited from

ModelProxy.shortTagBase

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L42)

___

### shouldForceReconnect

• **shouldForceReconnect**: `boolean`

#### Inherited from

ModelProxy.shouldForceReconnect

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L59)

___

### shouldUpgradeToMDIntern

• **shouldUpgradeToMDIntern**: `boolean`

#### Inherited from

ModelProxy.shouldUpgradeToMDIntern

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L60)

___

### shouldUpgradeToMDPord

• **shouldUpgradeToMDPord**: `boolean`

#### Inherited from

ModelProxy.shouldUpgradeToMDPord

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L61)

___

### socket

• `Optional` **socket**: `any`

#### Inherited from

ModelProxy.socket

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L30)

___

### socketPreload

• `Optional` **socketPreload**: `any`

#### Inherited from

ModelProxy.socketPreload

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L29)

___

### socketWatcher

• `Optional` **socketWatcher**: `any`

#### Inherited from

ModelProxy.socketWatcher

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L43)

___

### state

• **state**: `string`

#### Inherited from

ModelProxy.state

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L34)

___

### stream

• **stream**: `string`

#### Inherited from

ModelProxy.stream

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L35)

___

### streamPromise

• `Optional` **streamPromise**: `any`

#### Inherited from

ModelProxy.streamPromise

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L49)

___

### syncTag

• `Optional` **syncTag**: `any`

#### Inherited from

ModelProxy.syncTag

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L57)

___

### Proxy

▪ `Static` **Proxy**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[Proxy](whatsapp.Model.md#proxy)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L54)

___

### allowedIds

▪ `Static` `Optional` **allowedIds**: `any`[]

#### Inherited from

[Model](whatsapp.Model.md).[allowedIds](whatsapp.Model.md#allowedids)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L58)

___

### idClass

▪ `Static` `Optional` **idClass**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[idClass](whatsapp.Model.md#idclass)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L56)

## Methods

### addChild

▸ **addChild**(`id`, `context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `context` | `Object` |

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[addChild](whatsapp.Model.md#addchild)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L78)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`SocketModel`](whatsapp.SocketModel.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[bind](whatsapp.Model.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L96)

___

### canRequestBeSent

▸ **canRequestBeSent**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:128](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L128)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[clear](whatsapp.Model.md#clear)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L88)

___

### clearCredentials

▸ **clearCredentials**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:121](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L121)

___

### clearCredentialsAndStoredData

▸ **clearCredentialsAndStoredData**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L87)

___

### clearSendHash

▸ **clearSendHash**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:101](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L101)

___

### clearState

▸ **clearState**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:122](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L122)

___

### decObservers

▸ **decObservers**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[decObservers](whatsapp.Model.md#decobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L74)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[delete](whatsapp.Model.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L90)

___

### deprecatedVersion

▸ **deprecatedVersion**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:127](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L127)

___

### destroyStorage

▸ **destroyStorage**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L88)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`SocketModel`](whatsapp.SocketModel.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L117)

___

### exitLoop

▸ **exitLoop**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:86](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L86)

___

### flushQueue

▸ **flushQueue**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L99)

___

### get

▸ **get**<`T`\>(`attr`): [`SocketModel`](whatsapp.SocketModel.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SocketModel`](whatsapp.SocketModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)[`T`]

#### Inherited from

[Model](whatsapp.Model.md).[get](whatsapp.Model.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L80)

___

### getDefault

▸ **getDefault**<`T`\>(`attr`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SocketModel`](whatsapp.SocketModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

`any`

#### Inherited from

[Model](whatsapp.Model.md).[getDefault](whatsapp.Model.md#getdefault)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:94](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L94)

___

### hasObservers

▸ **hasObservers**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasObservers](whatsapp.Model.md#hasobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L76)

___

### hasUnfiredChanges

▸ **hasUnfiredChanges**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasUnfiredChanges](whatsapp.Model.md#hasunfiredchanges)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L84)

___

### incObservers

▸ **incObservers**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[incObservers](whatsapp.Model.md#incobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L72)

___

### initConn

▸ **initConn**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:110](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L110)

___

### initialize

▸ **initialize**(): `any`

#### Returns

`any`

#### Inherited from

[Model](whatsapp.Model.md).[initialize](whatsapp.Model.md#initialize)

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L77)

___

### isListening

▸ **isListening**(`eventName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[isListening](whatsapp.Model.md#islistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### launch

▸ **launch**(`e?`, `t?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `number` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L83)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`SocketModel`](whatsapp.SocketModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L74)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`SocketModel`](whatsapp.SocketModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L88)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`SocketModel`](whatsapp.SocketModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L81)

___

### logout

▸ **logout**(`sendLogout?`, `reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendLogout?` | `boolean` |
| `reason?` | [`LogoutReason`](../enums/whatsapp.enums.LogoutReason.md) |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L89)

___

### lookForAndHandleChallenge

▸ **lookForAndHandleChallenge**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L114)

___

### manageRef

▸ **manageRef**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:111](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L111)

___

### maybeResendRequestEventually

▸ **maybeResendRequestEventually**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:123](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L123)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`SocketModel`](whatsapp.SocketModel.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L59)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`SocketModel`](whatsapp.SocketModel.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L39)

___

### on5xx

▸ **on5xx**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:106](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L106)

___

### onActivity

▸ **onActivity**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:95](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L95)

___

### onCriticalSyncDone

▸ **onCriticalSyncDone**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:116](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L116)

___

### onMessage

▸ **onMessage**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:107](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L107)

___

### onPhoneWatchdogActivated

▸ **onPhoneWatchdogActivated**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L96)

___

### onPhoneWatchdogDeactivated

▸ **onPhoneWatchdogDeactivated**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:98](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L98)

___

### onPhoneWatchdogFed

▸ **onPhoneWatchdogFed**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:97](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L97)

___

### onRefCycle

▸ **onRefCycle**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:94](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L94)

___

### onStateChange

▸ **onStateChange**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L92)

___

### onStreamChange

▸ **onStreamChange**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L93)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`SocketModel`](whatsapp.SocketModel.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L49)

___

### openSocket

▸ **openSocket**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:109](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L109)

___

### openStream

▸ **openStream**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L117)

___

### phoneTimedOut

▸ **phoneTimedOut**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:100](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L100)

___

### poke

▸ **poke**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L84)

___

### preload

▸ **preload**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L78)

___

### queryReceivedActions

▸ **queryReceivedActions**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:118](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L118)

___

### registerHandler

▸ **registerHandler**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L91)

___

### removeAllListeners

▸ **removeAllListeners**(): [`SocketModel`](whatsapp.SocketModel.md)

Removes all listeners.

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L112)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`SocketModel`](whatsapp.SocketModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[removeListener](whatsapp.Model.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:107](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L107)

___

### requestSync

▸ **requestSync**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L112)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[reset](whatsapp.Model.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L92)

___

### run

▸ **run**(`e?`, `t?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:108](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L108)

___

### runResume

▸ **runResume**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:119](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L119)

___

### send

▸ **send**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L79)

___

### send2

▸ **send2**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L80)

___

### sendBasic

▸ **sendBasic**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:102](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L102)

___

### sendCurrentLogout

▸ **sendCurrentLogout**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:124](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L124)

___

### sendEphemeral

▸ **sendEphemeral**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:103](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L103)

___

### sendEphemeral2

▸ **sendEphemeral2**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:104](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L104)

___

### sendEphemeralIgnore

▸ **sendEphemeralIgnore**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L105)

___

### sendRemainingLogouts

▸ **sendRemainingLogouts**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:125](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L125)

___

### serialize

▸ **serialize**(): `Props`

#### Returns

`Props`

#### Inherited from

ModelProxy.serialize

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L35)

___

### set

▸ **set**(...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`any`

#### Inherited from

[Model](whatsapp.Model.md).[set](whatsapp.Model.md#set)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L82)

___

### setPokeable

▸ **setPokeable**(`e?`, `t?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `number` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L120)

___

### shortTag

▸ **shortTag**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L81)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`SocketModel`](whatsapp.SocketModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[stopListening](whatsapp.Model.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

___

### summary

▸ **summary**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L90)

___

### tag

▸ **tag**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L82)

___

### takeover

▸ **takeover**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L85)

___

### throwOnClose

▸ **throwOnClose**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L115)

___

### toJSON

▸ **toJSON**(): `Props`

#### Returns

`Props`

#### Inherited from

ModelProxy.toJSON

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L33)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`SocketModel`](whatsapp.SocketModel.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L65)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`SocketModel`](whatsapp.SocketModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`SocketModel`](whatsapp.SocketModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[unbind](whatsapp.Model.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:102](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L102)

___

### unset

▸ **unset**(`ids`, `t?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Stringable` \| `Stringable`[] |
| `t?` | `any` |

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[unset](whatsapp.Model.md#unset)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:86](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L86)

___

### updateImmediately

▸ **updateImmediately**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:126](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L126)

___

### waitForSyncInfo

▸ **waitForSyncInfo**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/SocketModel.ts:113](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/SocketModel.ts#L113)

___

### isIdType

▸ `Static` **isIdType**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[isIdType](whatsapp.Model.md#isidtype)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:98](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L98)
