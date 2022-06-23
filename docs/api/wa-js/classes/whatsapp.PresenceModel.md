---
id: "whatsapp.PresenceModel"
title: "Class: PresenceModel"
sidebar_label: "PresenceModel"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).PresenceModel

**`whatsapp`** 30000

**`whatsapp`** 330000 >= 2.2222.8

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)

  ↳ **`PresenceModel`**

## Constructors

### constructor

• **new PresenceModel**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`PresenceModel`](whatsapp.PresenceModel.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L62)

## Properties

### allowedIds

• `Optional` **allowedIds**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L60)

___

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### chatActive

• **chatActive**: `boolean`

#### Inherited from

ModelProxy.chatActive

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L38)

___

### chatstate

• `Optional` **chatstate**: [`ChatstateModel`](whatsapp.ChatstateModel.md)

#### Inherited from

ModelProxy.chatstate

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L41)

___

### chatstates

• **chatstates**: [`ChatstateCollection`](whatsapp.ChatstateCollection.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L61)

___

### collection

• `Optional` **collection**: `undefined`

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### forceDisplay

• **forceDisplay**: `boolean`

#### Inherited from

ModelProxy.forceDisplay

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L37)

___

### forceDisplayTimer

• `Optional` **forceDisplayTimer**: `any`

#### Inherited from

ModelProxy.forceDisplayTimer

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L40)

___

### hasData

• **hasData**: `boolean`

#### Inherited from

ModelProxy.hasData

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L34)

___

### id

• **id**: [`Wid`](whatsapp.Wid.md)

#### Inherited from

ModelProxy.id

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L29)

___

### idClass

• **idClass**: typeof [`Wid`](whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L59)

___

### isGroup

• `Readonly` **isGroup**: `boolean`

#### Inherited from

ModelProxy.isGroup

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L45)

___

### isOnline

• **isOnline**: `boolean`

#### Inherited from

ModelProxy.isOnline

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L33)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### isSubscribed

• **isSubscribed**: `boolean`

#### Inherited from

ModelProxy.isSubscribed

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L35)

___

### isUser

• `Readonly` **isUser**: `boolean`

#### Inherited from

ModelProxy.isUser

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L46)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:chatActive` | `number` |
| `change:chatstate` | `undefined` \| `number` |
| `change:forceDisplay` | `number` |
| `change:forceDisplayTimer` | `undefined` \| `number` |
| `change:hasData` | `number` |
| `change:id` | `number` |
| `change:isGroup` | `number` |
| `change:isOnline` | `number` |
| `change:isSubscribed` | `number` |
| `change:isUser` | `number` |
| `change:withholdDisplayStage` | `undefined` \| `number` |
| `change:withholdDisplayTimer` | `undefined` \| `number` |

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

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L68)

___

### withholdDisplayStage

• `Optional` **withholdDisplayStage**: `any`

#### Inherited from

ModelProxy.withholdDisplayStage

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L36)

___

### withholdDisplayTimer

• `Optional` **withholdDisplayTimer**: `any`

#### Inherited from

ModelProxy.withholdDisplayTimer

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L39)

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

▸ **bind**(`eventName`, `listener`, `context?`): [`PresenceModel`](whatsapp.PresenceModel.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

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

▸ **emit**(`eventName`, ...`args`): [`PresenceModel`](whatsapp.PresenceModel.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L120)

___

### get

▸ **get**<`T`\>(`attr`): [`PresenceModel`](whatsapp.PresenceModel.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`PresenceModel`](whatsapp.PresenceModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)[`T`]

#### Inherited from

[Model](whatsapp.Model.md).[get](whatsapp.Model.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L82)

___

### getCollection

▸ **getCollection**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/PresenceModel.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/PresenceModel.ts#L66)

___

### getDefault

▸ **getDefault**<`T`\>(`attr`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`PresenceModel`](whatsapp.PresenceModel.md) |

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

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`PresenceModel`](whatsapp.PresenceModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L77)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`PresenceModel`](whatsapp.PresenceModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L91)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`PresenceModel`](whatsapp.PresenceModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L84)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`PresenceModel`](whatsapp.PresenceModel.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L62)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`PresenceModel`](whatsapp.PresenceModel.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L42)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`PresenceModel`](whatsapp.PresenceModel.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L52)

___

### removeAllListeners

▸ **removeAllListeners**(): [`PresenceModel`](whatsapp.PresenceModel.md)

Removes all listeners.

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L115)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`PresenceModel`](whatsapp.PresenceModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

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

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`PresenceModel`](whatsapp.PresenceModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

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

▸ **trigger**(`eventName`, ...`args`): [`PresenceModel`](whatsapp.PresenceModel.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L68)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`PresenceModel`](whatsapp.PresenceModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`PresenceModel`](whatsapp.PresenceModel.md)

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
