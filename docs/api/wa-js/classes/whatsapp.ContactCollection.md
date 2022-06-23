---
id: "whatsapp.ContactCollection"
title: "Class: ContactCollection"
sidebar_label: "ContactCollection"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).ContactCollection

**`whatsapp`** 19380

**`whatsapp`** 719380 >= 2.2222.8

## Hierarchy

- [`BaseCollection`](whatsapp.BaseCollection.md)<[`ContactModel`](whatsapp.ContactModel.md)\>

  ↳ **`ContactCollection`**

## Constructors

### constructor

• **new ContactCollection**(`e?`, `t?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `Object` |
| `t.parent` | `any` |

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[constructor](whatsapp.BaseCollection.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L55)

## Properties

### checksum

• `Optional` **checksum**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L26)

___

### findFirst

• **findFirst**: <S\>(`predicate`: (`this`: `void`, `value`: [`ContactModel`](whatsapp.ContactModel.md), `index`: `number`, `obj`: [`ContactModel`](whatsapp.ContactModel.md)[]) => value is S, `thisArg?`: `any`) => `undefined` \| `S`(`predicate`: (`value`: [`ContactModel`](whatsapp.ContactModel.md), `index`: `number`, `obj`: [`ContactModel`](whatsapp.ContactModel.md)[]) => `unknown`, `thisArg?`: `any`) => `undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Type declaration

▸ <`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`ContactModel`](whatsapp.ContactModel.md)<`S`\> |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`ContactModel`](whatsapp.ContactModel.md), `index`: `number`, `obj`: [`ContactModel`](whatsapp.ContactModel.md)[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

##### Returns

`undefined` \| `S`

▸ (`predicate`, `thisArg?`): `undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`ContactModel`](whatsapp.ContactModel.md), `index`: `number`, `obj`: [`ContactModel`](whatsapp.ContactModel.md)[]) => `unknown` |
| `thisArg?` | `any` |

##### Returns

`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[findFirst](whatsapp.BaseCollection.md#findfirst)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L87)

___

### modelClass

• **modelClass**: [`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[modelClass](whatsapp.BaseCollection.md#modelclass)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L53)

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

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L31)

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

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L25)

___

### model

▪ `Static` **model**: [`ContactModel`](whatsapp.ContactModel.md)

#### Overrides

[BaseCollection](whatsapp.BaseCollection.md).[model](whatsapp.BaseCollection.md#model)

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L25)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Inherited from

BaseCollection.length

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L57)

## Methods

### add

▸ **add**(`value`, `options?`): [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[] \| [`WritableProperties`](../namespaces/util.md#writableproperties)<[`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[]\> |
| `options?` | `Option` |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[add](whatsapp.BaseCollection.md#add)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L59)

___

### assertGet

▸ **assertGet**(`e`): [`ContactModel`](whatsapp.ContactModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[assertGet](whatsapp.BaseCollection.md#assertget)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L75)

___

### at

▸ **at**(`position`): `undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[at](whatsapp.BaseCollection.md#at)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L77)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`ContactCollection`](whatsapp.ContactCollection.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[bind](whatsapp.BaseCollection.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L99)

___

### contactAdded

▸ **contactAdded**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L28)

___

### contactHashLength

▸ **contactHashLength**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L30)

___

### contactRemoved

▸ **contactRemoved**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L29)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[delete](whatsapp.BaseCollection.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L58)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`ContactCollection`](whatsapp.ContactCollection.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[emit](whatsapp.BaseCollection.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L120)

___

### ensureSorted

▸ **ensureSorted**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L27)

___

### find

▸ **find**(`id`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ContactModel`](whatsapp.ContactModel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `options?` | `Object` |
| `options.logOnSend?` | `boolean` |
| `options.set?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ContactModel`](whatsapp.ContactModel.md)\>

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[find](whatsapp.BaseCollection.md#find)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L42)

___

### findQuery

▸ **findQuery**(`id`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `options?` | `Object` |
| `options.logOnSend?` | `boolean` |
| `options.set?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)\>

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[findQuery](whatsapp.BaseCollection.md#findquery)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L37)

___

### frequentContacts

▸ **frequentContacts**(`e?`, `t?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L35)

___

### gadd

▸ **gadd**(`id`, `options?`): [`ContactModel`](whatsapp.ContactModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` \| [`ContactModel`](whatsapp.ContactModel.md) |
| `options?` | `any` |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[gadd](whatsapp.BaseCollection.md#gadd)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L54)

___

### gaddUp

▸ **gaddUp**(`id`): [`ContactModel`](whatsapp.ContactModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` \| [`ContactModel`](whatsapp.ContactModel.md) |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[gaddUp](whatsapp.BaseCollection.md#gaddup)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L56)

___

### get

▸ **get**(`e`): `undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[get](whatsapp.BaseCollection.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L73)

___

### getFilteredContacts

▸ **getFilteredContacts**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L32)

___

### getModelsArray

▸ **getModelsArray**(): [`ContactModel`](whatsapp.ContactModel.md)[]

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[getModelsArray](whatsapp.BaseCollection.md#getmodelsarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:97](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L97)

___

### getUserCount

▸ **getUserCount**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L36)

___

### handle

▸ **handle**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[] |

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[handle](whatsapp.BaseCollection.md#handle)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L52)

___

### head

▸ **head**(): `undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Returns

`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[head](whatsapp.BaseCollection.md#head)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L91)

___

### includes

▸ **includes**(`model`, `position?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`ContactModel`](whatsapp.ContactModel.md) |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[includes](whatsapp.BaseCollection.md#includes)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L85)

___

### initializeFromCache

▸ **initializeFromCache**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[] |

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[initializeFromCache](whatsapp.BaseCollection.md#initializefromcache)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L33)

___

### isFilteredContact

▸ **isFilteredContact**(`e?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L31)

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

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L93)

___

### isModel

▸ **isModel**(`model`): model is ContactModel

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `any` |

#### Returns

model is ContactModel

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[isModel](whatsapp.BaseCollection.md#ismodel)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L83)

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

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L60)

___

### last

▸ **last**(): `undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Returns

`undefined` \| [`ContactModel`](whatsapp.ContactModel.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[last](whatsapp.BaseCollection.md#last)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L93)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`ContactCollection`](whatsapp.ContactCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[listenTo](whatsapp.BaseCollection.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L77)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`ContactCollection`](whatsapp.ContactCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[listenToAndRun](whatsapp.BaseCollection.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L91)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`ContactCollection`](whatsapp.ContactCollection.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[listenToOnce](whatsapp.BaseCollection.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L84)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`ContactCollection`](whatsapp.ContactCollection.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[off](whatsapp.BaseCollection.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L62)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`ContactCollection`](whatsapp.ContactCollection.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[on](whatsapp.BaseCollection.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L42)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`ContactCollection`](whatsapp.ContactCollection.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[once](whatsapp.BaseCollection.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L52)

___

### remove

▸ **remove**(`value`, `options?`): [`ContactModel`](whatsapp.ContactModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[] |
| `options?` | `Object` |
| `options.index?` | `boolean` |
| `options.silent?` | `boolean` |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[remove](whatsapp.BaseCollection.md#remove)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L63)

___

### removeAllListeners

▸ **removeAllListeners**(): [`ContactCollection`](whatsapp.ContactCollection.md)

Removes all listeners.

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[removeAllListeners](whatsapp.BaseCollection.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L115)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`ContactCollection`](whatsapp.ContactCollection.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[removeListener](whatsapp.BaseCollection.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:110](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L110)

___

### reorder

▸ **reorder**(`e`, `t`): [`ContactModel`](whatsapp.ContactModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `number` |
| `t` | `number` |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[reorder](whatsapp.BaseCollection.md#reorder)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L99)

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

[packages/wa-js/src/whatsapp/collections/Collection.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L71)

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

[packages/wa-js/src/whatsapp/collections/Collection.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L69)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[reset](whatsapp.BaseCollection.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L65)

___

### resolveWidsFromHash

▸ **resolveWidsFromHash**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L38)

___

### saveToCache

▸ **saveToCache**(): `void`

#### Returns

`void`

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[saveToCache](whatsapp.BaseCollection.md#savetocache)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L35)

___

### serialize

▸ **serialize**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[serialize](whatsapp.BaseCollection.md#serialize)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L79)

___

### set

▸ **set**(`value`, `options?`): [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[] |
| `options?` | `Option` |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md) \| [`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[set](whatsapp.BaseCollection.md#set)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L61)

___

### setChecksum

▸ **setChecksum**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L37)

___

### sort

▸ **sort**(`options?`): [`ContactCollection`](whatsapp.ContactCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.silent?` | `boolean` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[sort](whatsapp.BaseCollection.md#sort)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L67)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`ContactCollection`](whatsapp.ContactCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[stopListening](whatsapp.BaseCollection.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L70)

___

### sync

▸ **sync**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L33)

___

### toArray

▸ **toArray**(): [`ContactModel`](whatsapp.ContactModel.md)[]

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[toArray](whatsapp.BaseCollection.md#toarray)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:95](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L95)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[toJSON](whatsapp.BaseCollection.md#tojson)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L81)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`ContactCollection`](whatsapp.ContactCollection.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[trigger](whatsapp.BaseCollection.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L68)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`ContactCollection`](whatsapp.ContactCollection.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`ContactCollection`](whatsapp.ContactCollection.md)

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[unbind](whatsapp.BaseCollection.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L105)

___

### update

▸ **update**(`id`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ContactModel`](whatsapp.ContactModel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `Stringable` |
| `options?` | `Object` |
| `options.logOnSend?` | `boolean` |
| `options.set?` | `boolean` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ContactModel`](whatsapp.ContactModel.md)\>

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[update](whatsapp.BaseCollection.md#update)

#### Defined in

[packages/wa-js/src/whatsapp/collections/BaseCollection.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/BaseCollection.ts#L47)

___

### updateFrequentContacts

▸ **updateFrequentContacts**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L34)

___

### where

▸ **where**(`ids`): [`ContactModel`](whatsapp.ContactModel.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Stringable`[] |

#### Returns

[`ContactModel`](whatsapp.ContactModel.md)[]

#### Inherited from

[BaseCollection](whatsapp.BaseCollection.md).[where](whatsapp.BaseCollection.md#where)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L89)

___

### comparator

▸ `Static` **comparator**(): `any`

#### Returns

`any`

#### Overrides

BaseCollection.comparator

#### Defined in

[packages/wa-js/src/whatsapp/collections/ContactCollection.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/ContactCollection.ts#L39)
