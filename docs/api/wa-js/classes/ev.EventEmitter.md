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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L62)

## Properties

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:317](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L317)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L77)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L64)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L69)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:245](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L245)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the EventEmitter which is either set by emitter.setMaxListeners(n) or defaults to EventEmitter2.defaultMaxListeners

#### Returns

`number`

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:238](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L238)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:309](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L309)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:283](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L283)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:289](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L289)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:295](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L295)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:247](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L247)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:252](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L252)

___

### listenersAny

▸ **listenersAny**(): `ListenerFn`[]

Returns an array of listeners that are listening for any event that is specified. This array can be manipulated, e.g. to remove listeners.

#### Returns

`ListenerFn`[]

#### Defined in

[packages/wa-js/src/eventEmitter/eventEmitter.ts:257](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L257)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:157](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L157)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:167](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L167)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:220](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L220)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:207](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L207)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:85](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L85)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:94](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L94)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:197](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L197)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:121](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L121)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:130](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L130)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:202](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L202)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:103](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L103)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L112)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:177](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L177)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:187](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L187)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:139](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L139)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:148](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L148)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:228](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L228)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:212](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L212)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:233](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L233)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:301](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L301)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:262](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L262)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:270](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L270)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:278](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L278)

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

[packages/wa-js/src/eventEmitter/eventEmitter.ts:311](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventEmitter.ts#L311)
