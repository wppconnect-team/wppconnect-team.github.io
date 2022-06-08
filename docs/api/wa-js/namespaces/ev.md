---
id: "ev"
title: "Namespace: ev"
sidebar_label: "ev"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [EventEmitter](../classes/ev.EventEmitter.md)

## Interfaces

- [BlocklistEventTypes](../interfaces/ev.BlocklistEventTypes.md)
- [ChatEventTypes](../interfaces/ev.ChatEventTypes.md)
- [ConnEventTypes](../interfaces/ev.ConnEventTypes.md)
- [StatusEventTypes](../interfaces/ev.StatusEventTypes.md)
- [WebpackEvents](../interfaces/ev.WebpackEvents.md)

## Type Aliases

### EventTypes

Ƭ **EventTypes**: [`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md)

#### Defined in

[packages/wa-js/src/eventEmitter/eventTypes.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/eventTypes.ts#L29)

## Variables

### ev

• `Const` **ev**: [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L30)

___

### internalEv

• `Const` **internalEv**: [`EventEmitter`](../classes/ev.EventEmitter.md)<[`EventTypes`](ev.md#eventtypes)\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L26)

## Functions

### addListener

▸ **addListener**<`Name`\>(`event`, `listener`): `Listener` \| [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |

#### Returns

`Listener` \| [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L45)

___

### emit

▸ **emit**<`Name`\>(`event`, ...`args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `...args` | `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\> |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L46)

___

### emitAsync

▸ **emitAsync**<`Name`\>(`event`, ...`args`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `...args` | `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`[]\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L47)

___

### eventNames

▸ **eventNames**<`Name`\>(`nsAsArray?`): `Name`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nsAsArray?` | `boolean` |

#### Returns

`Name`[]

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L48)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L49)

___

### hasListeners

▸ **hasListeners**<`Name`\>(`event?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L50)

___

### listenTo

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `string` \| `symbol` \| `event`[] |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L51)

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `event`[] |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L51)

▸ **listenTo**(`target`, `events`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `GeneralEventEmitter` |
| `events` | `object` |
| `options?` | `ListenToOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L51)

___

### listenerCount

▸ **listenerCount**<`Name`\>(`event?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L52)

___

### listeners

▸ **listeners**<`Name`\>(`event?`): `ListenerFn`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

`ListenerFn`[]

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L53)

___

### listenersAny

▸ **listenersAny**(): `ListenerFn`[]

#### Returns

`ListenerFn`[]

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L54)

___

### many

▸ **many**<`Name`\>(`event`, `timesToListen`, `listener`, `options`): `Listener`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L55)

▸ **many**<`Name`\>(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L55)

___

### off

▸ **off**<`Name`\>(`event`, `listener`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L56)

___

### offAny

▸ **offAny**(`listener`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `ListenerFn` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L57)

___

### on

▸ **on**<`Name`\>(`event`, `listener`, `options`): `Listener`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L58)

▸ **on**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L58)

___

### onAny

▸ **onAny**(`listener`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L59)

___

### once

▸ **once**<`Name`\>(`event`, `listener`, `options`): `Listener`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L60)

▸ **once**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options?` | ``true`` \| `OnOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L60)

___

### prependAny

▸ **prependAny**(`listener`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `EventAndListener` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L61)

___

### prependListener

▸ **prependListener**<`Name`\>(`event`, `listener`, `options`): `Listener`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L62)

▸ **prependListener**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L62)

___

### prependMany

▸ **prependMany**<`Name`\>(`event`, `timesToListen`, `listener`, `options`): `Listener`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L63)

▸ **prependMany**<`Name`\>(`event`, `timesToListen`, `listener`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timesToListen` | `number` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L63)

___

### prependOnceListener

▸ **prependOnceListener**<`Name`\>(`event`, `listener`, `options`): `Listener`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options` | `OnOptions` & { `objectify`: ``true``  } |

#### Returns

`Listener`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L64)

▸ **prependOnceListener**<`Name`\>(`event`, `listener`, `options?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |
| `options?` | `boolean` \| `OnOptions` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L64)

___

### removeAllListeners

▸ **removeAllListeners**<`Name`\>(`event?`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `Name` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L65)

___

### removeListener

▸ **removeListener**<`Name`\>(`event`, `listener`): [`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `listener` | (...`args`: `ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>) => `void` |

#### Returns

[`EventEmitter`](../classes/ev.EventEmitter.md)<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L66)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L67)

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

[packages/wa-js/src/eventEmitter/index.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L68)

___

### waitFor

▸ **waitFor**<`Name`\>(`event`, `timeout?`): `CancelablePromise`<`ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `timeout?` | `number` |

#### Returns

`CancelablePromise`<`ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L69)

▸ **waitFor**<`Name`\>(`event`, `filter?`): `CancelablePromise`<`ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `filter?` | `WaitForFilter` |

#### Returns

`CancelablePromise`<`ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L69)

▸ **waitFor**<`Name`\>(`event`, `options?`): `CancelablePromise`<`ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends ``"blocklist.sync"`` \| keyof [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) \| keyof [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) \| ``"status.sync"`` \| keyof [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) \| ``"alfa"`` \| ``"beta"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Name` |
| `options?` | `WaitForOptions` |

#### Returns

`CancelablePromise`<`ListenerType`<[`BlocklistEventTypes`](../interfaces/ev.BlocklistEventTypes.md) & [`ChatEventTypes`](../interfaces/ev.ChatEventTypes.md) & [`ConnEventTypes`](../interfaces/ev.ConnEventTypes.md) & [`StatusEventTypes`](../interfaces/ev.StatusEventTypes.md) & [`WebpackEvents`](../interfaces/ev.WebpackEvents.md) & { `alfa`: `string` ; `beta`: (`from`: `number`, `to`: `string`) => `void`  }[`Name`]\>\>

#### Defined in

[packages/wa-js/src/eventEmitter/index.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/eventEmitter/index.ts#L69)
