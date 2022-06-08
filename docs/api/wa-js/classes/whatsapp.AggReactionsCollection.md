---
id: "whatsapp.AggReactionsCollection"
title: "Class: AggReactionsCollection"
sidebar_label: "AggReactionsCollection"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).AggReactionsCollection

**`whatsapp`** 81130

## Hierarchy

- [`Collection`](whatsapp.Collection.md)<[`AggReactionsModel`](whatsapp.AggReactionsModel.md)\>

  ↳ **`AggReactionsCollection`**

## Constructors

### constructor

• **new AggReactionsCollection**(`e?`, `t?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `Object` |
| `t.parent` | `any` |

#### Inherited from

[Collection](whatsapp.Collection.md).[constructor](whatsapp.Collection.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L51)

## Properties

### findFirst

• **findFirst**: <S\>(`predicate`: (`this`: `void`, `value`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md), `index`: `number`, `obj`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]) => value is S, `thisArg?`: `any`) => `undefined` \| `S`(`predicate`: (`value`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md), `index`: `number`, `obj`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]) => `unknown`, `thisArg?`: `any`) => `undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Type declaration

▸ <`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`AggReactionsModel`](whatsapp.AggReactionsModel.md)<`S`\> |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md), `index`: `number`, `obj`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

##### Returns

`undefined` \| `S`

▸ (`predicate`, `thisArg?`): `undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md), `index`: `number`, `obj`: [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]) => `unknown` |
| `thisArg?` | `any` |

##### Returns

`undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[findFirst](whatsapp.Collection.md#findfirst)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L83)

___

### modelClass

• **modelClass**: [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[modelClass](whatsapp.Collection.md#modelclass)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L49)

___

### model

▪ `Static` **model**: [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Overrides

[Collection](whatsapp.Collection.md).[model](whatsapp.Collection.md#model)

#### Defined in

[packages/wa-js/src/whatsapp/collections/AggReactionsCollection.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/AggReactionsCollection.ts#L23)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Inherited from

Collection.length

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L53)

## Methods

### add

▸ **add**(`value`, `options?`): [`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[] \| [`WritableProperties`](../namespaces/util.md#writableproperties)<[`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]\> |
| `options?` | `Option` |

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[add](whatsapp.Collection.md#add)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L55)

___

### assertGet

▸ **assertGet**(`e`): [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[assertGet](whatsapp.Collection.md#assertget)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L71)

___

### at

▸ **at**(`position`): `undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[at](whatsapp.Collection.md#at)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L73)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[bind](whatsapp.Collection.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:98](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L98)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[emit](whatsapp.Collection.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:119](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L119)

___

### get

▸ **get**(`e`): `undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

`undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[get](whatsapp.Collection.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L69)

___

### getModelsArray

▸ **getModelsArray**(): [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[getModelsArray](whatsapp.Collection.md#getmodelsarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L93)

___

### head

▸ **head**(): `undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Returns

`undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[head](whatsapp.Collection.md#head)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L87)

___

### includes

▸ **includes**(`model`, `position?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`AggReactionsModel`](whatsapp.AggReactionsModel.md) |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

[Collection](whatsapp.Collection.md).[includes](whatsapp.Collection.md#includes)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L81)

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

[Collection](whatsapp.Collection.md).[isListening](whatsapp.Collection.md#islistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L92)

___

### isModel

▸ **isModel**(`model`): model is AggReactionsModel

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `any` |

#### Returns

model is AggReactionsModel

#### Inherited from

[Collection](whatsapp.Collection.md).[isModel](whatsapp.Collection.md#ismodel)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L79)

___

### last

▸ **last**(): `undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Returns

`undefined` \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[last](whatsapp.Collection.md#last)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L89)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[listenTo](whatsapp.Collection.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L76)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[listenToAndRun](whatsapp.Collection.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[listenToOnce](whatsapp.Collection.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L83)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[off](whatsapp.Collection.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L61)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[on](whatsapp.Collection.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L41)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[once](whatsapp.Collection.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L51)

___

### remove

▸ **remove**(`value`, `options?`): [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[] |
| `options?` | `Object` |
| `options.index?` | `boolean` |
| `options.silent?` | `boolean` |

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[remove](whatsapp.Collection.md#remove)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L59)

___

### removeAllListeners

▸ **removeAllListeners**(): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Removes all listeners.

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[removeAllListeners](whatsapp.Collection.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L114)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[removeListener](whatsapp.Collection.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:109](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L109)

___

### reorder

▸ **reorder**(`e`, `t`): [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `number` |
| `t` | `number` |

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[reorder](whatsapp.Collection.md#reorder)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:95](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L95)

___

### reorderMutate

▸ **reorderMutate**(`e`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `t` | `any` |

#### Returns

`void`

#### Inherited from

[Collection](whatsapp.Collection.md).[reorderMutate](whatsapp.Collection.md#reordermutate)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L67)

___

### replaceId

▸ **replaceId**(`e`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `t` | `any` |

#### Returns

`void`

#### Inherited from

[Collection](whatsapp.Collection.md).[replaceId](whatsapp.Collection.md#replaceid)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L65)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Collection](whatsapp.Collection.md).[reset](whatsapp.Collection.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L61)

___

### serialize

▸ **serialize**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Collection](whatsapp.Collection.md).[serialize](whatsapp.Collection.md#serialize)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L75)

___

### set

▸ **set**(`value`, `options?`): [`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[] |
| `options?` | `Option` |

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md) \| [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[set](whatsapp.Collection.md#set)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L57)

___

### sort

▸ **sort**(`options?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.silent?` | `boolean` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[sort](whatsapp.Collection.md#sort)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L63)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[stopListening](whatsapp.Collection.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L69)

___

### toArray

▸ **toArray**(): [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[toArray](whatsapp.Collection.md#toarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L91)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Collection](whatsapp.Collection.md).[toJSON](whatsapp.Collection.md#tojson)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L77)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Collection](whatsapp.Collection.md).[trigger](whatsapp.Collection.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`AggReactionsCollection`](whatsapp.AggReactionsCollection.md)

#### Inherited from

[Collection](whatsapp.Collection.md).[unbind](whatsapp.Collection.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:104](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L104)

___

### where

▸ **where**(`ids`): [`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Stringable`[] |

#### Returns

[`AggReactionsModel`](whatsapp.AggReactionsModel.md)[]

#### Inherited from

[Collection](whatsapp.Collection.md).[where](whatsapp.Collection.md#where)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L85)

___

### comparator

▸ `Static` **comparator**(): `number`

#### Returns

`number`

#### Overrides

Collection.comparator

#### Defined in

[packages/wa-js/src/whatsapp/collections/AggReactionsCollection.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/AggReactionsCollection.ts#L24)
