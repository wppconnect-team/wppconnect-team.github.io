---
id: "whatsapp.GroupMetadataModel"
title: "Class: GroupMetadataModel"
sidebar_label: "GroupMetadataModel"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).GroupMetadataModel

**`whatsapp`** 14423

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)

  ↳ **`GroupMetadataModel`**

## Constructors

### constructor

• **new GroupMetadataModel**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L65)

## Properties

### announce

• `Optional` **announce**: `any`

#### Inherited from

ModelProxy.announce

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L36)

___

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### collection

• `Optional` **collection**: `undefined`

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L64)

___

### creation

• `Optional` **creation**: `any`

#### Inherited from

ModelProxy.creation

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L29)

___

### desc

• `Optional` **desc**: `string`

#### Inherited from

ModelProxy.desc

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L31)

___

### descId

• `Optional` **descId**: `string`

#### Inherited from

ModelProxy.descId

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L32)

___

### descOwner

• `Optional` **descOwner**: `any`

#### Inherited from

ModelProxy.descOwner

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L34)

___

### descTime

• `Optional` **descTime**: `any`

#### Inherited from

ModelProxy.descTime

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L33)

___

### ephemeralDuration

• `Optional` **ephemeralDuration**: `any`

#### Inherited from

ModelProxy.ephemeralDuration

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L38)

___

### groupInviteCodePromise

• `Optional` **groupInviteCodePromise**: `any`

#### Inherited from

ModelProxy.groupInviteCodePromise

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:48](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L48)

___

### groupInviteLink

• `Optional` `Readonly` **groupInviteLink**: `any`

#### Inherited from

ModelProxy.groupInviteLink

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L54)

___

### id

• **id**: [`Wid`](whatsapp.Wid.md)

#### Inherited from

ModelProxy.id

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L28)

___

### idClass

• **idClass**: typeof [`Wid`](whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L63)

___

### inviteCode

• `Optional` **inviteCode**: `any`

#### Inherited from

ModelProxy.inviteCode

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L47)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:announce` | `undefined` \| `number` |
| `change:creation` | `undefined` \| `number` |
| `change:desc` | `undefined` \| `number` |
| `change:descId` | `undefined` \| `number` |
| `change:descOwner` | `undefined` \| `number` |
| `change:descTime` | `undefined` \| `number` |
| `change:ephemeralDuration` | `undefined` \| `number` |
| `change:groupInviteCodePromise` | `undefined` \| `number` |
| `change:groupInviteLink` | `undefined` \| `number` |
| `change:id` | `number` |
| `change:inviteCode` | `undefined` \| `number` |
| `change:noFrequentlyForwarded` | `undefined` \| `number` |
| `change:owner` | `undefined` \| `number` |
| `change:restrict` | `undefined` \| `number` |
| `change:revokeGroupInvitePromise` | `undefined` \| `number` |
| `change:revokeGroupV4AddInvitePromise` | `undefined` \| `number` |
| `change:size` | `undefined` \| `number` |
| `change:stale` | `undefined` \| `number` |
| `change:support` | `undefined` \| `number` |
| `change:trusted` | `undefined` \| `number` |
| `change:uniqueShortNameMap` | `undefined` \| `number` |

#### Inherited from

ModelProxy.mirrorMask

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L29)

___

### noFrequentlyForwarded

• `Optional` **noFrequentlyForwarded**: `any`

#### Inherited from

ModelProxy.noFrequentlyForwarded

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L37)

___

### owner

• `Optional` **owner**: `any`

#### Inherited from

ModelProxy.owner

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L30)

___

### parent

• `Optional` **parent**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[parent](whatsapp.Model.md#parent)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L62)

___

### participants

• **participants**: [`ParticipantCollection`](whatsapp.ParticipantCollection.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L64)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### restrict

• `Optional` **restrict**: `any`

#### Inherited from

ModelProxy.restrict

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L35)

___

### revokeGroupInvitePromise

• `Optional` **revokeGroupInvitePromise**: `any`

#### Inherited from

ModelProxy.revokeGroupInvitePromise

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L49)

___

### revokeGroupV4AddInvitePromise

• `Optional` **revokeGroupV4AddInvitePromise**: `any`

#### Inherited from

ModelProxy.revokeGroupV4AddInvitePromise

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L50)

___

### size

• `Optional` **size**: `any`

#### Inherited from

ModelProxy.size

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L39)

___

### stale

• `Optional` **stale**: `any`

#### Inherited from

ModelProxy.stale

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L45)

___

### support

• `Optional` **support**: `any`

#### Inherited from

ModelProxy.support

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L40)

___

### trusted

• `Optional` **trusted**: `any`

#### Inherited from

ModelProxy.trusted

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L46)

___

### uniqueShortNameMap

• `Optional` **uniqueShortNameMap**: `any`

#### Inherited from

ModelProxy.uniqueShortNameMap

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L41)

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

▸ **bind**(`eventName`, `listener`, `context?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[bind](whatsapp.Model.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L96)

___

### canSetDescription

▸ **canSetDescription**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L71)

___

### canSetEphemeralSetting

▸ **canSetEphemeralSetting**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L73)

___

### canSetGroupProperty

▸ **canSetGroupProperty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L72)

___

### canSetSubject

▸ **canSetSubject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L70)

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

▸ **emit**(`eventName`, ...`args`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:117](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L117)

___

### get

▸ **get**<`T`\>(`attr`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)[`T`]

#### Inherited from

[Model](whatsapp.Model.md).[get](whatsapp.Model.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L80)

___

### getCollection

▸ **getCollection**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:79](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L79)

___

### getDefault

▸ **getDefault**<`T`\>(`attr`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md) |

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

### hasUniqueShortNameMention

▸ **hasUniqueShortNameMention**(`e?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L69)

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

### isTrusted

▸ **isTrusted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L76)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L74)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L88)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:81](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L81)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L59)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L39)

___

### onParticipantShortNameUpdated

▸ **onParticipantShortNameUpdated**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L74)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:49](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L49)

___

### queryGroupV4PendingInvite

▸ **queryGroupV4PendingInvite**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L78)

___

### removeAllListeners

▸ **removeAllListeners**(): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Removes all listeners.

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:112](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L112)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

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

### revokeGroupV4AddInvite

▸ **revokeGroupV4AddInvite**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L77)

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

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

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

▸ **trigger**(`eventName`, ...`args`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L65)

___

### triggerParticipantsChange

▸ **triggerParticipantsChange**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/GroupMetadataModel.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/GroupMetadataModel.ts#L75)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`GroupMetadataModel`](whatsapp.GroupMetadataModel.md)

#### Inherited from

[Model](whatsapp.Model.md).[unbind](whatsapp.Model.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:102](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L102)

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
