---
id: "whatsapp.LabelItemModel"
title: "Class: LabelItemModel"
sidebar_label: "LabelItemModel"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).LabelItemModel

**`whatsapp`** 24137

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)

  ↳ **`LabelItemModel`**

## Constructors

### constructor

• **new LabelItemModel**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`LabelItemModel`](whatsapp.LabelItemModel.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/LabelItemModel.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/LabelItemModel.ts#L44)

## Properties

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### collection

• `Optional` **collection**: `undefined`

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L64)

___

### id

• `Optional` **id**: `any`

#### Inherited from

ModelProxy.id

#### Defined in

[packages/wa-js/src/whatsapp/models/LabelItemModel.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/LabelItemModel.ts#L26)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### labelId

• `Optional` **labelId**: `any`

#### Inherited from

ModelProxy.labelId

#### Defined in

[packages/wa-js/src/whatsapp/models/LabelItemModel.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/LabelItemModel.ts#L29)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:id` | `undefined` \| `number` |
| `change:labelId` | `undefined` \| `number` |
| `change:parentId` | `undefined` \| `number` |
| `change:parentType` | `undefined` \| `number` |
| `change:stale` | `undefined` \| `number` |

#### Inherited from

ModelProxy.mirrorMask

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L29)

___

### parent

• `Optional` **parent**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[parent](whatsapp.Model.md#parent)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L62)

___

### parentId

• `Optional` **parentId**: `any`

#### Inherited from

ModelProxy.parentId

#### Defined in

[packages/wa-js/src/whatsapp/models/LabelItemModel.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/LabelItemModel.ts#L28)

___

### parentType

• `Optional` **parentType**: `any`

#### Inherited from

ModelProxy.parentType

#### Defined in

[packages/wa-js/src/whatsapp/models/LabelItemModel.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/LabelItemModel.ts#L27)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### stale

• `Optional` **stale**: `any`

#### Inherited from

ModelProxy.stale

#### Defined in

[packages/wa-js/src/whatsapp/models/LabelItemModel.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/LabelItemModel.ts#L33)

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

▸ **bind**(`eventName`, `listener`, `context?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[bind](whatsapp.Model.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:98](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L98)

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

### emit

▸ **emit**(`eventName`, ...`args`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:119](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L119)

___

### get

▸ **get**<`T`\>(`attr`): [`LabelItemModel`](whatsapp.LabelItemModel.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`LabelItemModel`](whatsapp.LabelItemModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)[`T`]

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
| `T` | extends keyof [`LabelItemModel`](whatsapp.LabelItemModel.md) |

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

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[initialize](whatsapp.Model.md#initialize)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L70)

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

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L92)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L76)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L83)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L61)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L41)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L51)

___

### removeAllListeners

▸ **removeAllListeners**(): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Removes all listeners.

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L114)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[removeListener](whatsapp.Model.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:109](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L109)

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

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[stopListening](whatsapp.Model.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L69)

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

▸ **trigger**(`eventName`, ...`args`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`LabelItemModel`](whatsapp.LabelItemModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`LabelItemModel`](whatsapp.LabelItemModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[unbind](whatsapp.Model.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:104](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L104)

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
