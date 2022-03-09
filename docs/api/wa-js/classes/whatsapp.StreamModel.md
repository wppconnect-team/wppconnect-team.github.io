---
id: "whatsapp.StreamModel"
title: "Class: StreamModel"
sidebar_label: "StreamModel"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).StreamModel

**`whatsapp`** 8080

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)

  ↳ **`StreamModel`**

## Constructors

### constructor

• **new StreamModel**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`StreamModel`](whatsapp.StreamModel.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:57](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L57)

## Properties

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### available

• `Optional` **available**: `any`

#### Inherited from

ModelProxy.available

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L38)

___

### clientExpired

• `Optional` **clientExpired**: `any`

#### Inherited from

ModelProxy.clientExpired

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L32)

___

### collection

• `Optional` **collection**: `undefined`

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L64)

___

### couldForce

• `Optional` **couldForce**: `any`

#### Inherited from

ModelProxy.couldForce

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L36)

___

### displayInfo

• `Optional` `Readonly` **displayInfo**: `any`

#### Inherited from

ModelProxy.displayInfo

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L48)

___

### hardExpired

• `Optional` **hardExpired**: `any`

#### Inherited from

ModelProxy.hardExpired

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L33)

___

### info

• `Optional` **info**: `any`

#### Inherited from

ModelProxy.info

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L28)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### lastSyncStart

• `Optional` **lastSyncStart**: `any`

#### Inherited from

ModelProxy.lastSyncStart

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L34)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:available` | `undefined` \| `number` |
| `change:clientExpired` | `undefined` \| `number` |
| `change:couldForce` | `undefined` \| `number` |
| `change:displayInfo` | `undefined` \| `number` |
| `change:hardExpired` | `undefined` \| `number` |
| `change:info` | `undefined` \| `number` |
| `change:lastSyncStart` | `undefined` \| `number` |
| `change:mode` | `number` |
| `change:needsManualDownload` | `undefined` \| `number` |
| `change:needsUpdate` | `undefined` \| `number` |
| `change:obscurity` | `undefined` \| `number` |
| `change:phoneAuthed` | `undefined` \| `number` |
| `change:resumeCount` | `undefined` \| `number` |
| `change:timeoutEvent` | `undefined` \| `number` |
| `change:uiActive` | `undefined` \| `number` |
| `change:unavailableLogoutTimer` | `undefined` \| `number` |
| `change:unavailableShiftTimer` | `undefined` \| `number` |
| `change:unobscureShiftTimer` | `undefined` \| `number` |

#### Inherited from

ModelProxy.mirrorMask

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L29)

___

### mode

• **mode**: `string`

#### Inherited from

ModelProxy.mode

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L29)

___

### needsManualDownload

• `Optional` **needsManualDownload**: `any`

#### Inherited from

ModelProxy.needsManualDownload

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L35)

___

### needsUpdate

• `Optional` **needsUpdate**: `any`

#### Inherited from

ModelProxy.needsUpdate

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L31)

___

### obscurity

• `Optional` **obscurity**: `any`

#### Inherited from

ModelProxy.obscurity

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L30)

___

### parent

• `Optional` **parent**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[parent](whatsapp.Model.md#parent)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L62)

___

### phoneAuthed

• `Optional` **phoneAuthed**: `any`

#### Inherited from

ModelProxy.phoneAuthed

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L44)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### resumeCount

• `Optional` **resumeCount**: `any`

#### Inherited from

ModelProxy.resumeCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L43)

___

### timeoutEvent

• `Optional` **timeoutEvent**: `any`

#### Inherited from

ModelProxy.timeoutEvent

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L42)

___

### uiActive

• `Optional` **uiActive**: `any`

#### Inherited from

ModelProxy.uiActive

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L37)

___

### unavailableLogoutTimer

• `Optional` **unavailableLogoutTimer**: `any`

#### Inherited from

ModelProxy.unavailableLogoutTimer

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L40)

___

### unavailableShiftTimer

• `Optional` **unavailableShiftTimer**: `any`

#### Inherited from

ModelProxy.unavailableShiftTimer

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L39)

___

### unobscureShiftTimer

• `Optional` **unobscureShiftTimer**: `any`

#### Inherited from

ModelProxy.unobscureShiftTimer

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L41)

___

### Proxy

▪ `Static` **Proxy**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[Proxy](whatsapp.Model.md#proxy)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L54)

___

### allowedIds

▪ `Static` `Optional` **allowedIds**: `any`[]

#### Inherited from

[Model](whatsapp.Model.md).[allowedIds](whatsapp.Model.md#allowedids)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L58)

___

### idClass

▪ `Static` `Optional` **idClass**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[idClass](whatsapp.Model.md#idclass)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L56)

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

[packages/wa-js/src/whatsapp/models/Model.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L78)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`StreamModel`](whatsapp.StreamModel.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[bind](whatsapp.Model.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L96)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[clear](whatsapp.Model.md#clear)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L88)

___

### decObservers

▸ **decObservers**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[decObservers](whatsapp.Model.md#decobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L74)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[delete](whatsapp.Model.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L90)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`StreamModel`](whatsapp.StreamModel.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L117)

___

### get

▸ **get**<`T`\>(`attr`): [`StreamModel`](whatsapp.StreamModel.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`StreamModel`](whatsapp.StreamModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)[`T`]

#### Inherited from

[Model](whatsapp.Model.md).[get](whatsapp.Model.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L80)

___

### getDefault

▸ **getDefault**<`T`\>(`attr`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`StreamModel`](whatsapp.StreamModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

`any`

#### Inherited from

[Model](whatsapp.Model.md).[getDefault](whatsapp.Model.md#getdefault)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:94](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L94)

___

### hasObservers

▸ **hasObservers**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasObservers](whatsapp.Model.md#hasobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L76)

___

### hasUnfiredChanges

▸ **hasUnfiredChanges**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasUnfiredChanges](whatsapp.Model.md#hasunfiredchanges)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L84)

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

[packages/wa-js/src/whatsapp/models/Model.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L72)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[initialize](whatsapp.Model.md#initialize)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L70)

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

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L90)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`StreamModel`](whatsapp.StreamModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L74)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`StreamModel`](whatsapp.StreamModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L88)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`StreamModel`](whatsapp.StreamModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L81)

___

### logModeChange

▸ **logModeChange**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L73)

___

### logPageResume

▸ **logPageResume**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L71)

___

### markAvailable

▸ **markAvailable**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L61)

___

### markUnavailable

▸ **markUnavailable**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L62)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`StreamModel`](whatsapp.StreamModel.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L59)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`StreamModel`](whatsapp.StreamModel.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L39)

___

### onAvailableUpdate

▸ **onAvailableUpdate**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L67)

___

### onPhoneAuthedUpdate

▸ **onPhoneAuthedUpdate**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L66)

___

### onSelfUpdate

▸ **onSelfUpdate**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L63)

___

### onSocketUpdate

▸ **onSocketUpdate**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L64)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`StreamModel`](whatsapp.StreamModel.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L49)

___

### removeAllListeners

▸ **removeAllListeners**(): [`StreamModel`](whatsapp.StreamModel.md)

Removes all listeners.

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L112)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`StreamModel`](whatsapp.StreamModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[removeListener](whatsapp.Model.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:107](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L107)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[reset](whatsapp.Model.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L92)

___

### sendAvailability

▸ **sendAvailability**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L68)

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

[packages/wa-js/src/whatsapp/models/Model.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L82)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`StreamModel`](whatsapp.StreamModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[stopListening](whatsapp.Model.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L67)

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

▸ **trigger**(`eventName`, ...`args`): [`StreamModel`](whatsapp.StreamModel.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L65)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`StreamModel`](whatsapp.StreamModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StreamModel`](whatsapp.StreamModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[unbind](whatsapp.Model.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:102](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L102)

___

### unobscure

▸ **unobscure**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L65)

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

[packages/wa-js/src/whatsapp/models/Model.ts:86](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L86)

___

### updateCouldForce

▸ **updateCouldForce**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L69)

___

### updateHardExpire

▸ **updateHardExpire**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L70)

___

### updateWamLog

▸ **updateWamLog**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/models/StreamModel.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StreamModel.ts#L72)

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

[packages/wa-js/src/whatsapp/models/Model.ts:98](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L98)
