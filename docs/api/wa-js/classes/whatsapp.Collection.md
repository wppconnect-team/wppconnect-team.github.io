---
id: "whatsapp.Collection"
title: "Class: Collection<M, A>"
sidebar_label: "Collection"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).Collection

**`whatsapp`** 31727

## Type parameters

| Name | Type |
| :------ | :------ |
| `M` | `M` |
| `A` | `M` \| `M`[] |

## Hierarchy

- [`EventEmitter`](whatsapp.EventEmitter.md)

- `Pick`<`M`[], ``"indexOf"`` \| ``"lastIndexOf"`` \| ``"every"`` \| ``"some"`` \| ``"forEach"`` \| ``"map"`` \| ``"filter"`` \| ``"reduce"`` \| ``"slice"``\>

  ↳ **`Collection`**

  ↳↳ [`BaseCollection`](whatsapp.BaseCollection.md)

  ↳↳ [`BlocklistCollection`](whatsapp.BlocklistCollection.md)

  ↳↳ [`BusinessCategoriesResultCollection`](whatsapp.BusinessCategoriesResultCollection.md)

  ↳↳ [`BusinessProfileCollection`](whatsapp.BusinessProfileCollection.md)

  ↳↳ [`CallCollection`](whatsapp.CallCollection.md)

  ↳↳ [`CartCollection`](whatsapp.CartCollection.md)

  ↳↳ [`CartItemCollection`](whatsapp.CartItemCollection.md)

  ↳↳ [`CatalogCollection`](whatsapp.CatalogCollection.md)

  ↳↳ [`ChatstateCollection`](whatsapp.ChatstateCollection.md)

  ↳↳ [`ContactCollection`](whatsapp.ContactCollection.md)

  ↳↳ [`EmojiVariantCollection`](whatsapp.EmojiVariantCollection.md)

  ↳↳ [`LabelCollection`](whatsapp.LabelCollection.md)

  ↳↳ [`LabelItemCollection`](whatsapp.LabelItemCollection.md)

  ↳↳ [`MsgInfoCollection`](whatsapp.MsgInfoCollection.md)

  ↳↳ [`MuteCollection`](whatsapp.MuteCollection.md)

  ↳↳ [`OrderCollection`](whatsapp.OrderCollection.md)

  ↳↳ [`OrderItemCollection`](whatsapp.OrderItemCollection.md)

  ↳↳ [`ParticipantCollection`](whatsapp.ParticipantCollection.md)

  ↳↳ [`PresenceCollection`](whatsapp.PresenceCollection.md)

  ↳↳ [`ProductCollCollection`](whatsapp.ProductCollCollection.md)

  ↳↳ [`ProductCollection`](whatsapp.ProductCollection.md)

  ↳↳ [`ProductImageCollection`](whatsapp.ProductImageCollection.md)

  ↳↳ [`ProductMessageListCollection`](whatsapp.ProductMessageListCollection.md)

  ↳↳ [`ProfilePicThumbCollection`](whatsapp.ProfilePicThumbCollection.md)

  ↳↳ [`QuickReplyCollection`](whatsapp.QuickReplyCollection.md)

  ↳↳ [`RecentEmojiCollection`](whatsapp.RecentEmojiCollection.md)

  ↳↳ [`RecentStickerCollection`](whatsapp.RecentStickerCollection.md)

  ↳↳ [`StarredMsgCollection`](whatsapp.StarredMsgCollection.md)

  ↳↳ [`StarredStickerCollection`](whatsapp.StarredStickerCollection.md)

  ↳↳ [`StickerCollection`](whatsapp.StickerCollection.md)

  ↳↳ [`StickerPackCollection`](whatsapp.StickerPackCollection.md)

  ↳↳ [`StickerSearchCollection`](whatsapp.StickerSearchCollection.md)

  ↳↳ [`TemplateButtonCollection`](whatsapp.TemplateButtonCollection.md)

## Constructors

### constructor

• **new Collection**<`M`, `A`\>(`e?`, `t?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | `M` |
| `A` | `M` \| `M`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `Object` |
| `t.parent` | `any` |

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[constructor](whatsapp.EventEmitter.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L51)

## Properties

### findFirst

• **findFirst**: <S\>(`predicate`: (`this`: `void`, `value`: `M`, `index`: `number`, `obj`: `M`[]) => value is S, `thisArg?`: `any`) => `undefined` \| `S`(`predicate`: (`value`: `M`, `index`: `number`, `obj`: `M`[]) => `unknown`, `thisArg?`: `any`) => `undefined` \| `M`

#### Type declaration

▸ <`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

| Name |
| :------ |
| `S` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: `M`, `index`: `number`, `obj`: `M`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

##### Returns

`undefined` \| `S`

▸ (`predicate`, `thisArg?`): `undefined` \| `M`

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `M`, `index`: `number`, `obj`: `M`[]) => `unknown` |
| `thisArg?` | `any` |

##### Returns

`undefined` \| `M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:87](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L87)

___

### modelClass

• **modelClass**: `M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L49)

___

### comparator

▪ `Static` **comparator**: (`a`: `any`, `b`: `any`) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

##### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L47)

___

### model

▪ `Static` **model**: `any`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L46)

## Accessors

### isCollection

• `get` **isCollection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L75)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L73)

___

### models

• `get` **models**(): `M`[]

#### Returns

`M`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L77)

## Methods

### add

▸ **add**(`value`, `options?`): `A`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` \| [`WritableProperties`](../namespaces/util.md#writableproperties)<`A`\> |
| `options?` | `Option` |

#### Returns

`A`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L53)

___

### assertGet

▸ **assertGet**(`e`): `M`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

`M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L69)

___

### at

▸ **at**(`position`): `undefined` \| `M`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`undefined` \| `M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L71)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[bind](whatsapp.EventEmitter.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L96)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[emit](whatsapp.EventEmitter.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L117)

___

### get

▸ **get**(`e`): `undefined` \| `M`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Stringable` |

#### Returns

`undefined` \| `M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L67)

___

### getModelsArray

▸ **getModelsArray**(): `M`[]

#### Returns

`M`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:97](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L97)

___

### head

▸ **head**(): `undefined` \| `M`

#### Returns

`undefined` \| `M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L91)

___

### includes

▸ **includes**(`model`, `position?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `M` |
| `position?` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L85)

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

[EventEmitter](whatsapp.EventEmitter.md).[isListening](whatsapp.EventEmitter.md#islistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### isModel

▸ **isModel**(`model`): model is M

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | `any` |

#### Returns

model is M

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:83](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L83)

___

### last

▸ **last**(): `undefined` \| `M`

#### Returns

`undefined` \| `M`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L93)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[listenTo](whatsapp.EventEmitter.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L74)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[listenToAndRun](whatsapp.EventEmitter.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L88)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[listenToOnce](whatsapp.EventEmitter.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L81)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[off](whatsapp.EventEmitter.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L59)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[on](whatsapp.EventEmitter.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L39)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[once](whatsapp.EventEmitter.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L49)

___

### remove

▸ **remove**(`value`, `options?`): `M`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |
| `options?` | `Object` |
| `options.index?` | `boolean` |
| `options.silent?` | `boolean` |

#### Returns

`M`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L57)

___

### removeAllListeners

▸ **removeAllListeners**(): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Removes all listeners.

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[removeAllListeners](whatsapp.EventEmitter.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L112)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[removeListener](whatsapp.EventEmitter.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:107](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L107)

___

### reorder

▸ **reorder**(`e`, `t`): `M`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `number` |
| `t` | `number` |

#### Returns

`M`[]

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

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L65)

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

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L63)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L59)

___

### serialize

▸ **serialize**(): `any`[]

#### Returns

`any`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L79)

___

### set

▸ **set**(`value`, `options?`): `A`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |
| `options?` | `Option` |

#### Returns

`A`

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L55)

___

### sort

▸ **sort**(`options?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.silent?` | `boolean` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L61)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[stopListening](whatsapp.EventEmitter.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

___

### toArray

▸ **toArray**(): `M`[]

#### Returns

`M`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:95](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L95)

___

### toJSON

▸ **toJSON**(): `any`[]

#### Returns

`any`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L81)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[trigger](whatsapp.EventEmitter.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L65)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`Collection`](whatsapp.Collection.md)<`M`, `A`\>

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`Collection`](whatsapp.Collection.md)<`M`, `A`\>

#### Inherited from

[EventEmitter](whatsapp.EventEmitter.md).[unbind](whatsapp.EventEmitter.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:102](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L102)

___

### where

▸ **where**(`ids`): `M`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `Stringable`[] |

#### Returns

`M`[]

#### Defined in

[packages/wa-js/src/whatsapp/collections/Collection.ts:89](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/collections/Collection.ts#L89)
