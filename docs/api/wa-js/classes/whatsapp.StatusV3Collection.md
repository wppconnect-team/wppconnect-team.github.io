---
id: "whatsapp.StatusV3Collection"
title: "Class: StatusV3Collection"
sidebar_label: "StatusV3Collection"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).StatusV3Collection

**`whatsapp`** 59387

## Hierarchy

- [`BaseCollection`](whatsapp.BaseCollection.md)<[`StatusV3Model`](whatsapp.StatusV3Model.md)\>

  ↳ **`StatusV3Collection`**

## Constructors

### constructor

• **new StatusV3Collection**(`e?`, `t?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `Object` |
| `t.parent` | `any` |

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[constructor](whatsapp.BaseCollection.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L51)

## Properties

### findFirst

• **findFirst**: <S\>(`predicate`: (`this`: `void`, `value`: [`StatusV3Model`](whatsapp.StatusV3Model.md), `index`: `number`, `obj`: [`StatusV3Model`](whatsapp.StatusV3Model.md)[]) => value is S, `thisArg?`: `any`) => `undefined` \| `S`(`predicate`: (`value`: [`StatusV3Model`](whatsapp.StatusV3Model.md), `index`: `number`, `obj`: [`StatusV3Model`](whatsapp.StatusV3Model.md)[]) => `unknown`, `thisArg?`: `any`) => `undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Type declaration

▸ <`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`StatusV3Model`](whatsapp.StatusV3Model.md)<`S`\> |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`StatusV3Model`](whatsapp.StatusV3Model.md), `index`: `number`, `obj`: [`StatusV3Model`](whatsapp.StatusV3Model.md)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

##### Returns

`undefined` \| `S`

▸ (`predicate`, `thisArg?`): `undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`StatusV3Model`](whatsapp.StatusV3Model.md), `index`: `number`, `obj`: [`StatusV3Model`](whatsapp.StatusV3Model.md)[]) => `unknown` |
| `thisArg?` | `any` |

##### Returns

`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[findFirst](whatsapp.BaseCollection.md#findfirst)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L83)

___

### modelClass

• **modelClass**: [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[modelClass](whatsapp.BaseCollection.md#modelclass)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L49)

___

### onResume

• **onResume**: (...`args`: `any`) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

##### Returns

`any`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[onResume](whatsapp.BaseCollection.md#onresume)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L29)

___

### cachePolicy

▪ `Static` **cachePolicy**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `policy` | `string` |
| `trigger` | `string` |

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[cachePolicy](whatsapp.BaseCollection.md#cachepolicy)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L23)

___

### model

▪ `Static` **model**: [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Overrides

[BaseCollection](whatsapp.BaseCollection.md).[model](whatsapp.BaseCollection.md#model)

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L23)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Inherited from

BaseCollection.length

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L53)

## Methods

### add

▸ **add**(`value`, `options?`): [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[] \| [`WritableProperties`](../namespaces/util.md#writableproperties)<[`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[]\> |
| `options?` | `Option` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[add](whatsapp.BaseCollection.md#add)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L55)

___

### addStatusMessages

▸ **addStatusMessages**(`e?`, `t?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L30)

___

### assertGet

▸ **assertGet**(`e`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[assertGet](whatsapp.BaseCollection.md#assertget)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L71)

___

### at

▸ **at**(`position`): `undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[at](whatsapp.BaseCollection.md#at)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L73)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[bind](whatsapp.BaseCollection.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:98](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L98)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[delete](whatsapp.BaseCollection.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L56)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[emit](whatsapp.BaseCollection.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:119](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L119)

___

### find

▸ **find**(`id`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](whatsapp.StatusV3Model.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `options?` | `Object` |
| `options.logOnSend?` | `boolean` |
| `options.set?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](whatsapp.StatusV3Model.md)\>

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[find](whatsapp.BaseCollection.md#find)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L40)

___

### findQuery

▸ **findQuery**(`id`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `options?` | `Object` |
| `options.logOnSend?` | `boolean` |
| `options.set?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)\>

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[findQuery](whatsapp.BaseCollection.md#findquery)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L35)

___

### gadd

▸ **gadd**(`id`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` \| [`StatusV3Model`](whatsapp.StatusV3Model.md) |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[gadd](whatsapp.BaseCollection.md#gadd)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L52)

___

### gaddUp

▸ **gaddUp**(`id`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` \| [`StatusV3Model`](whatsapp.StatusV3Model.md) |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[gaddUp](whatsapp.BaseCollection.md#gaddup)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L54)

___

### get

▸ **get**(`e`): `undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[get](whatsapp.BaseCollection.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L69)

___

### getModelsArray

▸ **getModelsArray**(): [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[getModelsArray](whatsapp.BaseCollection.md#getmodelsarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L93)

___

### getMyStatus

▸ **getMyStatus**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L32)

___

### getUnexpired

▸ **getUnexpired**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L31)

___

### handle

▸ **handle**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[] |

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[handle](whatsapp.BaseCollection.md#handle)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L50)

___

### handleUpdate

▸ **handleUpdate**(`e?`, `t?`, `r?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |
| `r?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L28)

___

### hasSynced

▸ **hasSynced**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L27)

___

### head

▸ **head**(): `undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Returns

`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[head](whatsapp.BaseCollection.md#head)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L87)

___

### includes

▸ **includes**(`model`, `position?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`StatusV3Model`](whatsapp.StatusV3Model.md) |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[includes](whatsapp.BaseCollection.md#includes)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L81)

___

### initializeFromCache

▸ **initializeFromCache**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[] |

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[initializeFromCache](whatsapp.BaseCollection.md#initializefromcache)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L31)

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

[BaseCollection](whatsapp.BaseCollection.md).[isListening](whatsapp.BaseCollection.md#islistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L92)

___

### isModel

▸ **isModel**(`model`): model is StatusV3Model

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `any` |

#### Returns

model is StatusV3Model

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[isModel](whatsapp.BaseCollection.md#ismodel)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L79)

___

### isStateStale

▸ **isStateStale**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |

#### Returns

`boolean`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[isStateStale](whatsapp.BaseCollection.md#isstatestale)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L58)

___

### last

▸ **last**(): `undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Returns

`undefined` \| [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[last](whatsapp.BaseCollection.md#last)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L89)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[listenTo](whatsapp.BaseCollection.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L76)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[listenToAndRun](whatsapp.BaseCollection.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[listenToOnce](whatsapp.BaseCollection.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L83)

___

### loadMore

▸ **loadMore**(`e?`, `t?`, `r?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |
| `r?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L24)

___

### logMetrics

▸ **logMetrics**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L26)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[off](whatsapp.BaseCollection.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L61)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[on](whatsapp.BaseCollection.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L41)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[once](whatsapp.BaseCollection.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L51)

___

### remove

▸ **remove**(`value`, `options?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[] |
| `options?` | `Object` |
| `options.index?` | `boolean` |
| `options.silent?` | `boolean` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[remove](whatsapp.BaseCollection.md#remove)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L59)

___

### removeAllListeners

▸ **removeAllListeners**(): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Removes all listeners.

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[removeAllListeners](whatsapp.BaseCollection.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:114](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L114)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[removeListener](whatsapp.BaseCollection.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:109](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L109)

___

### reorder

▸ **reorder**(`e`, `t`): [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `number` |
| `t` | `number` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[reorder](whatsapp.BaseCollection.md#reorder)

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

[BaseCollection](whatsapp.BaseCollection.md).[reorderMutate](whatsapp.BaseCollection.md#reordermutate)

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

[BaseCollection](whatsapp.BaseCollection.md).[replaceId](whatsapp.BaseCollection.md#replaceid)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L65)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[reset](whatsapp.BaseCollection.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L61)

___

### saveToCache

▸ **saveToCache**(): `void`

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[saveToCache](whatsapp.BaseCollection.md#savetocache)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L33)

___

### serialize

▸ **serialize**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[serialize](whatsapp.BaseCollection.md#serialize)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L75)

___

### set

▸ **set**(`value`, `options?`): [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[] |
| `options?` | `Option` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md) \| [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[set](whatsapp.BaseCollection.md#set)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L57)

___

### sort

▸ **sort**(`options?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.silent?` | `boolean` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[sort](whatsapp.BaseCollection.md#sort)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L63)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[stopListening](whatsapp.BaseCollection.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L69)

___

### sync

▸ **sync**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L25)

___

### toArray

▸ **toArray**(): [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[toArray](whatsapp.BaseCollection.md#toarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L91)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[toJSON](whatsapp.BaseCollection.md#tojson)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L77)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[trigger](whatsapp.BaseCollection.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[unbind](whatsapp.BaseCollection.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:104](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L104)

___

### update

▸ **update**(`id`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](whatsapp.StatusV3Model.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `options?` | `Object` |
| `options.logOnSend?` | `boolean` |
| `options.set?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](whatsapp.StatusV3Model.md)\>

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[update](whatsapp.BaseCollection.md#update)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L45)

___

### updateChecksum

▸ **updateChecksum**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L29)

___

### where

▸ **where**(`ids`): [`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Stringable`[] |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[where](whatsapp.BaseCollection.md#where)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L85)

___

### comparator

▸ `Static` **comparator**(): `any`

#### Returns

`any`

#### Overrides

BaseCollection.comparator

#### Defined in

[packages/wa-js/src/whatsapp/collections/StatusV3Collection.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/StatusV3Collection.ts#L33)
