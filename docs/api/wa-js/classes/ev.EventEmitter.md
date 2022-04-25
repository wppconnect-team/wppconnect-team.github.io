---
id: "ev.EventEmitter"
title: "Class: EventEmitter<EventData>"
sidebar_label: "EventEmitter"
custom_edit_url: null
---

[ev](../namespaces/ev.md).EventEmitter

## Type parameters

| Name |
| :------ |
| `EventData` |

## Constructors

### constructor

• **new EventEmitter**<`EventData`\>(`options?`)

#### Type parameters

| Name |
| :------ |
| `EventData` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ConstructorOptions` |

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L59)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:314](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L314)

## Methods

### addListener

▸ **addListener**<`Name`\>(`event`, `listener`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\> \| `Listener`

Adds a listener to the end of the listeners array for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\> \| `Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L74)

___

### emit

▸ **emit**<`Name`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `...args` | `ListenerType`<`EventData`[`Name`]\> |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L61)

___

### emitAsync

▸ **emitAsync**<`Name`\>(`event`, ...`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `...args` | `ListenerType`<`EventData`[`Name`]\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L66)

___

### eventNames

▸ **eventNames**<`Name`\>(`nsAsArray?`): `Name`[]

Returns an array listing the events for which the emitter has registered listeners.

Note: Listeners order not guaranteed

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nsAsArray?` | `boolean` |

#### Returns

`Name`[]

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:242](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L242)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to EventEmitter2.defaultMaxListeners

#### Returns

`number`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:235](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L235)

___

### hasListeners

▸ **hasListeners**<`Name`\>(`event?`): `boolean`

Checks whether emitter has any listeners.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:306](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L306)

___

### listenTo

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `string` \| `symbol` \| `event`[] |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:280](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L280)

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `event`[] |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:286](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L286)

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `object` |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:292](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L292)

___

### listenerCount

▸ **listenerCount**<`Name`\>(`event?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:244](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L244)

___

### listeners

▸ **listeners**<`Name`\>(`event?`): `ListenerFn`[]

Returns an array of listeners for the specified event. This array can be manipulated, e.g. to remove listeners.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

`ListenerFn`[]

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:249](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L249)

___

### listenersAny

▸ **listenersAny**(): `ListenerFn`[]

Returns an array of listeners that are listening for any event that is specified. This array can be manipulated, e.g. to remove listeners.

#### Returns

`ListenerFn`[]

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:254](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L254)

___

### many

▸ **many**<`Name`\>(`event`, `timesToListen`, `listener`, `options`): `Listener`

Adds a listener that will execute n times for the event before being removed. The listener is invoked only the first n times the event is fired, after which it is removed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:154](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L154)

▸ **many**<`Name`\>(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a listener that will execute n times for the event before being removed. The listener is invoked only the first n times the event is fired, after which it is removed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:164](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L164)

___

### off

▸ **off**<`Name`\>(`event`, `listener`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Remove a listener from the listener array for the specified event. Caution: Calling this method changes the array indices in the listener array behind the listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:217](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L217)

___

### offAny

▸ **offAny**(`listener`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Removes the listener that will be fired when any event is emitted.'

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:204](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L204)

___

### on

▸ **on**<`Name`\>(`event`, `listener`, `options`): `Listener`

Adds a listener to the end of the listeners array for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L82)

▸ **on**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a listener to the end of the listeners array for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L91)

___

### onAny

▸ **onAny**(`listener`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the callback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:194](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L194)

___

### once

▸ **once**<`Name`\>(`event`, `listener`, `options`): `Listener`

Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:118](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L118)

▸ **once**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options?` | ``true`` \| `OnOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:127](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L127)

___

### prependAny

▸ **prependAny**(`listener`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the callback. The listener is added to the beginning of the listeners array

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:199](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L199)

___

### prependListener

▸ **prependListener**<`Name`\>(`event`, `listener`, `options`): `Listener`

Adds a listener to the beginning of the listeners array for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:100](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L100)

▸ **prependListener**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a listener to the beginning of the listeners array for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:109](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L109)

___

### prependMany

▸ **prependMany**<`Name`\>(`event`, `timesToListen`, `listener`, `options`): `Listener`

Adds a listener that will execute n times for the event before being removed. The listener is invoked only the first n times the event is fired, after which it is removed. The listener is added to the beginning of the listeners array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:174](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L174)

▸ **prependMany**<`Name`\>(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a listener that will execute n times for the event before being removed. The listener is invoked only the first n times the event is fired, after which it is removed. The listener is added to the beginning of the listeners array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:184](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L184)

___

### prependOnceListener

▸ **prependOnceListener**<`Name`\>(`event`, `listener`, `options`): `Listener`

Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed. The listener is added to the beginning of the listeners array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:136](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L136)

▸ **prependOnceListener**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed. The listener is added to the beginning of the listeners array

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:145](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L145)

___

### removeAllListeners

▸ **removeAllListeners**<`Name`\>(`event?`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Removes all listeners, or those of the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:225](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L225)

___

### removeListener

▸ **removeListener**<`Name`\>(`event`, `listener`): [`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

Remove a listener from the listener array for the specified event. Caution: Calling this method changes the array indices in the listener array behind the listener.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<`EventData`[`Name`]\>) => `void` |

#### Returns

[`EventEmitter`](ev.EventEmitter.md)<`EventData`\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:209](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L209)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `void`

By default EventEmitters will print a warning if more than 10 listeners are added to it. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:230](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L230)

___

### stopListeningTo

▸ **stopListeningTo**(`target?`, `event?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | `GeneralEventEmitter` |
| `event?` | `string` \| `symbol` \| `event`[] |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:298](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L298)

___

### waitFor

▸ **waitFor**<`Name`\>(`event`, `timeout?`): `CancelablePromise`<`ListenerType`<`EventData`[`Name`]\>\>

Returns a thenable object (promise interface) that resolves when a specific event occurs

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timeout?` | `number` |

#### Returns

`CancelablePromise`<`ListenerType`<`EventData`[`Name`]\>\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:259](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L259)

▸ **waitFor**<`Name`\>(`event`, `filter?`): `CancelablePromise`<`ListenerType`<`EventData`[`Name`]\>\>

Returns a thenable object (promise interface) that resolves when a specific event occurs

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `filter?` | `WaitForFilter` |

#### Returns

`CancelablePromise`<`ListenerType`<`EventData`[`Name`]\>\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:267](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L267)

▸ **waitFor**<`Name`\>(`event`, `options?`): `CancelablePromise`<`ListenerType`<`EventData`[`Name`]\>\>

Returns a thenable object (promise interface) that resolves when a specific event occurs

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `options?` | `WaitForOptions` |

#### Returns

`CancelablePromise`<`ListenerType`<`EventData`[`Name`]\>\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:275](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L275)

___

### once

▸ `Static` **once**(`emitter`, `event`, `options?`): `CancelablePromise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter2` |
| `event` | `string` |
| `options?` | `OnceOptions` |

#### Returns

`CancelablePromise`<`any`[]\>

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:308](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L308)
