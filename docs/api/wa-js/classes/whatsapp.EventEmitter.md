---
id: "whatsapp.EventEmitter"
title: "Class: EventEmitter"
sidebar_label: "EventEmitter"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).EventEmitter

**`whatsapp`** 34342

## Hierarchy

- **`EventEmitter`**

  ↳ [`Collection`](whatsapp.Collection.md)

  ↳ [`CmdClass`](whatsapp.CmdClass.md)

  ↳ [`Model`](whatsapp.Model.md)

## Constructors

### constructor

• **new EventEmitter**()

## Methods

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`EventEmitter`](whatsapp.EventEmitter.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L96)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`EventEmitter`](whatsapp.EventEmitter.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L117)

___

### isListening

▸ **isListening**(`eventName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`EventEmitter`](whatsapp.EventEmitter.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L74)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`EventEmitter`](whatsapp.EventEmitter.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L88)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`EventEmitter`](whatsapp.EventEmitter.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L81)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`EventEmitter`](whatsapp.EventEmitter.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L59)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`EventEmitter`](whatsapp.EventEmitter.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L39)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`EventEmitter`](whatsapp.EventEmitter.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L49)

___

### removeAllListeners

▸ **removeAllListeners**(): [`EventEmitter`](whatsapp.EventEmitter.md)

Removes all listeners.

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L112)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`EventEmitter`](whatsapp.EventEmitter.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:107](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L107)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`EventEmitter`](whatsapp.EventEmitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

___

### trigger

▸ **trigger**(`eventName`, ...`args`): [`EventEmitter`](whatsapp.EventEmitter.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L65)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`EventEmitter`](whatsapp.EventEmitter.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`EventEmitter`](whatsapp.EventEmitter.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:102](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L102)
