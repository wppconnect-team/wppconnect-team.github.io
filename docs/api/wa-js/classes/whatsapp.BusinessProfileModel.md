---
id: "whatsapp.BusinessProfileModel"
title: "Class: BusinessProfileModel"
sidebar_label: "BusinessProfileModel"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).BusinessProfileModel

**`whatsapp`** 48018

**`whatsapp`** 348018 >= 2.2222.8

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)<[`BusinessProfileCollection`](whatsapp.BusinessProfileCollection.md)\>

  ↳ **`BusinessProfileModel`**

## Constructors

### constructor

• **new BusinessProfileModel**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L60)

## Properties

### address

• `Optional` **address**: `any`

#### Inherited from

ModelProxy.address

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L39)

___

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### businessHours

• `Optional` **businessHours**: `any`

#### Inherited from

ModelProxy.businessHours

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L37)

___

### catalogStatus

• `Optional` **catalogStatus**: `any`

#### Inherited from

ModelProxy.catalogStatus

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L38)

___

### categories

• `Optional` **categories**: `any`

#### Inherited from

ModelProxy.categories

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L31)

___

### collection

• `Optional` **collection**: [`BusinessProfileCollection`](whatsapp.BusinessProfileCollection.md)

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### description

• `Optional` **description**: `any`

#### Inherited from

ModelProxy.description

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L30)

___

### email

• `Optional` **email**: `any`

#### Inherited from

ModelProxy.email

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L33)

___

### id

• **id**: [`Wid`](whatsapp.Wid.md)

#### Inherited from

ModelProxy.id

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L28)

___

### idClass

• **idClass**: typeof [`Wid`](whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L59)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### latitude

• `Optional` **latitude**: `any`

#### Inherited from

ModelProxy.latitude

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L35)

___

### longitude

• `Optional` **longitude**: `any`

#### Inherited from

ModelProxy.longitude

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L36)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:address` | `undefined` \| `number` |
| `change:businessHours` | `undefined` \| `number` |
| `change:catalogStatus` | `undefined` \| `number` |
| `change:categories` | `undefined` \| `number` |
| `change:description` | `undefined` \| `number` |
| `change:email` | `undefined` \| `number` |
| `change:id` | `number` |
| `change:latitude` | `undefined` \| `number` |
| `change:longitude` | `undefined` \| `number` |
| `change:profileOptions` | `undefined` \| `number` |
| `change:stale` | `undefined` \| `number` |
| `change:structuredAddress` | `undefined` \| `number` |
| `change:tag` | `undefined` \| `number` |
| `change:website` | `undefined` \| `number` |

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

[packages/wa-js/src/whatsapp/models/Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L64)

___

### profileOptions

• `Optional` **profileOptions**: `any`

#### Inherited from

ModelProxy.profileOptions

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L32)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L68)

___

### stale

• `Optional` **stale**: `any`

#### Inherited from

ModelProxy.stale

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L44)

___

### structuredAddress

• `Optional` **structuredAddress**: `any`

#### Inherited from

ModelProxy.structuredAddress

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L40)

___

### tag

• `Optional` **tag**: `any`

#### Inherited from

ModelProxy.tag

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L29)

___

### website

• `Optional` **website**: `any`

#### Inherited from

ModelProxy.website

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L34)

___

### Proxy

▪ `Static` **Proxy**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[Proxy](whatsapp.Model.md#proxy)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L56)

___

### allowedIds

▪ `Static` `Optional` **allowedIds**: `any`[]

#### Inherited from

[Model](whatsapp.Model.md).[allowedIds](whatsapp.Model.md#allowedids)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L60)

___

### idClass

▪ `Static` `Optional` **idClass**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[idClass](whatsapp.Model.md#idclass)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L58)

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

[packages/wa-js/src/whatsapp/models/Model.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L80)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[bind](whatsapp.Model.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L99)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[clear](whatsapp.Model.md#clear)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L90)

___

### decObservers

▸ **decObservers**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[decObservers](whatsapp.Model.md#decobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L76)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[delete](whatsapp.Model.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L92)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L120)

___

### get

▸ **get**<`T`\>(`attr`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)[`T`]

#### Inherited from

[Model](whatsapp.Model.md).[get](whatsapp.Model.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L82)

___

### getCollection

▸ **getCollection**(): [`BusinessProfileCollection`](whatsapp.BusinessProfileCollection.md)

#### Returns

[`BusinessProfileCollection`](whatsapp.BusinessProfileCollection.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L65)

___

### getDefault

▸ **getDefault**<`T`\>(`attr`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

`any`

#### Inherited from

[Model](whatsapp.Model.md).[getDefault](whatsapp.Model.md#getdefault)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L96)

___

### hasObservers

▸ **hasObservers**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasObservers](whatsapp.Model.md#hasobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L78)

___

### hasUnfiredChanges

▸ **hasUnfiredChanges**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasUnfiredChanges](whatsapp.Model.md#hasunfiredchanges)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:86](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L86)

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

[packages/wa-js/src/whatsapp/models/Model.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L74)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[initialize](whatsapp.Model.md#initialize)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L72)

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

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L93)

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L66)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L77)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L91)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L84)

___

### markStale

▸ **markStale**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/BusinessProfileModel.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/BusinessProfileModel.ts#L64)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L62)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L42)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L52)

___

### removeAllListeners

▸ **removeAllListeners**(): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Removes all listeners.

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L115)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[removeListener](whatsapp.Model.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:110](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L110)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[reset](whatsapp.Model.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:94](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L94)

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

[packages/wa-js/src/whatsapp/models/Model.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L84)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[stopListening](whatsapp.Model.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L70)

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

▸ **trigger**(`eventName`, ...`args`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L68)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`BusinessProfileModel`](whatsapp.BusinessProfileModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[unbind](whatsapp.Model.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L105)

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

[packages/wa-js/src/whatsapp/models/Model.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L88)

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

[packages/wa-js/src/whatsapp/models/Model.ts:100](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L100)
