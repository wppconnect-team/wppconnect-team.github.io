---
id: "whatsapp.StatusV3Model"
title: "Class: StatusV3Model"
sidebar_label: "StatusV3Model"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).StatusV3Model

**`whatsapp`** 47896

**`whatsapp`** 547896 >= 2.2222.8

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`Model`](whatsapp.Model.md)<[`StatusV3Collection`](whatsapp.StatusV3Collection.md)\>

  ↳ **`StatusV3Model`**

## Constructors

### constructor

• **new StatusV3Model**(`proterties?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proterties?` | [`ModelPropertiesContructor`](../namespaces/whatsapp.md#modelpropertiescontructor)<[`StatusV3Model`](whatsapp.StatusV3Model.md), `any`\> |
| `options?` | [`ModelOptions`](../interfaces/whatsapp.ModelOptions.md) |

#### Inherited from

[Model](whatsapp.Model.md).[constructor](whatsapp.Model.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L60)

## Properties

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### collection

• `Optional` **collection**: [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Inherited from

[Model](whatsapp.Model.md).[collection](whatsapp.Model.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### contact

• `Optional` **contact**: `any`

#### Inherited from

ModelProxy.contact

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L38)

___

### disableUnreadAnchor

• **disableUnreadAnchor**: `any`

#### Inherited from

ModelProxy.disableUnreadAnchor

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L33)

___

### expireTimer

• `Optional` **expireTimer**: `any`

#### Inherited from

ModelProxy.expireTimer

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L39)

___

### expireTs

• `Optional` **expireTs**: `any`

#### Inherited from

ModelProxy.expireTs

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L40)

___

### hasUnread

• `Readonly` **hasUnread**: `boolean`

#### Inherited from

ModelProxy.hasUnread

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L44)

___

### id

• **id**: [`Wid`](whatsapp.Wid.md)

#### Inherited from

ModelProxy.id

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L24)

___

### idClass

• **idClass**: typeof [`Wid`](whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L59)

___

### isState

• `Readonly` **isState**: ``true``

#### Inherited from

ModelProxy.isState

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L27)

___

### labels

• `Optional` **labels**: `string`[]

#### Inherited from

ModelProxy.labels

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L26)

___

### lastReceivedKey

• `Optional` **lastReceivedKey**: [`MsgKey`](whatsapp.MsgKey.md)

#### Inherited from

ModelProxy.lastReceivedKey

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L31)

___

### lastStatus

• `Optional` `Readonly` **lastStatus**: `any`

#### Inherited from

ModelProxy.lastStatus

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:46](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L46)

___

### mirrorMask

• `Readonly` **mirrorMask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `change:contact` | `undefined` \| `number` |
| `change:disableUnreadAnchor` | `number` |
| `change:expireTimer` | `undefined` \| `number` |
| `change:expireTs` | `undefined` \| `number` |
| `change:hasUnread` | `number` |
| `change:id` | `number` |
| `change:labels` | `undefined` \| `number` |
| `change:lastReceivedKey` | `undefined` \| `number` |
| `change:lastStatus` | `undefined` \| `number` |
| `change:msgChunks` | `number` |
| `change:msgsChanged` | `number` |
| `change:msgsLength` | `number` |
| `change:pendingMsgs` | `number` |
| `change:pic` | `undefined` \| `number` |
| `change:readCount` | `undefined` \| `number` |
| `change:readKeys` | `undefined` \| `number` |
| `change:stale` | `undefined` \| `number` |
| `change:t` | `undefined` \| `number` |
| `change:totalCount` | `undefined` \| `number` |
| `change:unreadCount` | `undefined` \| `number` |
| `change:unreadMsgAnchor` | `number` |

#### Inherited from

ModelProxy.mirrorMask

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L29)

___

### msgChunks

• **msgChunks**: [`MsgLoad`](whatsapp.MsgLoad.md)[]

#### Inherited from

ModelProxy.msgChunks

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L30)

___

### msgsChanged

• **msgsChanged**: `number`

#### Inherited from

ModelProxy.msgsChanged

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L35)

___

### msgsLength

• **msgsLength**: `number`

#### Inherited from

ModelProxy.msgsLength

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L34)

___

### parent

• `Optional` **parent**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[parent](whatsapp.Model.md#parent)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L64)

___

### pendingMsgs

• **pendingMsgs**: `boolean`

#### Inherited from

ModelProxy.pendingMsgs

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L25)

___

### pic

• `Optional` **pic**: `any`

#### Inherited from

ModelProxy.pic

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L32)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[proxyName](whatsapp.Model.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L68)

___

### readCount

• `Optional` `Readonly` **readCount**: `any`

#### Inherited from

ModelProxy.readCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L45)

___

### readKeys

• `Optional` **readKeys**: `any`

#### Inherited from

ModelProxy.readKeys

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L37)

___

### stale

• `Optional` **stale**: `any`

#### Inherited from

ModelProxy.stale

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L36)

___

### t

• `Optional` **t**: `any`

#### Inherited from

ModelProxy.t

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L29)

___

### totalCount

• `Optional` **totalCount**: `any`

#### Inherited from

ModelProxy.totalCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L31)

___

### unreadCount

• `Optional` **unreadCount**: `any`

#### Inherited from

ModelProxy.unreadCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L30)

___

### unreadMsgAnchor

• **unreadMsgAnchor**: `any`

#### Inherited from

ModelProxy.unreadMsgAnchor

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L32)

___

### Proxy

▪ `Static` **Proxy**: `string`

#### Inherited from

[Model](whatsapp.Model.md).[Proxy](whatsapp.Model.md#proxy)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L56)

___

### allowedIds

▪ `Static` `Optional` **allowedIds**: `any`[]

#### Inherited from

[Model](whatsapp.Model.md).[allowedIds](whatsapp.Model.md#allowedids)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L60)

___

### idClass

▪ `Static` `Optional` **idClass**: `any`

#### Inherited from

[Model](whatsapp.Model.md).[idClass](whatsapp.Model.md#idclass)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:58](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L58)

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

[packages/wa-js/src/whatsapp/models/Model.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L80)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `on`

**`alias`** on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[bind](whatsapp.Model.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L99)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[clear](whatsapp.Model.md#clear)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L90)

___

### decObservers

▸ **decObservers**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[decObservers](whatsapp.Model.md#decobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L76)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[delete](whatsapp.Model.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L92)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `trigger`

**`alias`** trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[emit](whatsapp.Model.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L120)

___

### expireMsg

▸ **expireMsg**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L65)

___

### get

▸ **get**<`T`\>(`attr`): [`StatusV3Model`](whatsapp.StatusV3Model.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`StatusV3Model`](whatsapp.StatusV3Model.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)[`T`]

#### Inherited from

[Model](whatsapp.Model.md).[get](whatsapp.Model.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L82)

___

### getAllCMCs

▸ **getAllCMCs**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L72)

___

### getAllMsgs

▸ **getAllMsgs**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L73)

___

### getCollection

▸ **getCollection**(): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L70)

___

### getDefault

▸ **getDefault**<`T`\>(`attr`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`StatusV3Model`](whatsapp.StatusV3Model.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `T` |

#### Returns

`any`

#### Inherited from

[Model](whatsapp.Model.md).[getDefault](whatsapp.Model.md#getdefault)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:96](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L96)

___

### handleReadStatus

▸ **handleReadStatus**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L68)

___

### hasObservers

▸ **hasObservers**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasObservers](whatsapp.Model.md#hasobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L78)

___

### hasUnfiredChanges

▸ **hasUnfiredChanges**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Model](whatsapp.Model.md).[hasUnfiredChanges](whatsapp.Model.md#hasunfiredchanges)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:86](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L86)

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

[packages/wa-js/src/whatsapp/models/Model.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L74)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[initialize](whatsapp.Model.md#initialize)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L72)

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

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:93](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L93)

___

### listenTo

▸ **listenTo**(`context`, `eventName`, `listener?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenTo](whatsapp.Model.md#listento)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L77)

___

### listenToAndRun

▸ **listenToAndRun**(`context`, `eventName`, `listener?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToAndRun](whatsapp.Model.md#listentoandrun)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:91](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L91)

___

### listenToOnce

▸ **listenToOnce**(`context`, `eventName`, `listener?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `any` | The value of `this` provided for the call to `listener` |
| `eventName` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[listenToOnce](whatsapp.Model.md#listentoonce)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L84)

___

### loadMore

▸ **loadMore**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `number` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L67)

___

### notifyMsgCollectionMerge

▸ **notifyMsgCollectionMerge**(`e?`, `t?`, `r?`, `a?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |
| `r?` | `any` |
| `a?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L76)

___

### off

▸ **off**(`eventName?`, `listener?`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Removes the specified listener from the listener array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName?` | `Event` | The name of the event. |
| `listener?` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[off](whatsapp.Model.md#off)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L62)

___

### on

▸ **on**(`eventName`, `listener`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Adds the listener function to the end of the listeners array for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[on](whatsapp.Model.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L42)

___

### onEmptyMRM

▸ **onEmptyMRM**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L66)

___

### once

▸ **once**(`eventName`, `listener`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Adds a one-time listener function for the event named eventName.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Event` | The name of the event. |
| `listener` | `Listener` | The callback function. |
| `context?` | `any` | The value of `this` provided for the call to `listener` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[once](whatsapp.Model.md#once)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:52](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L52)

___

### removeAllListeners

▸ **removeAllListeners**(): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Removes all listeners.

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[removeAllListeners](whatsapp.Model.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L115)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[removeListener](whatsapp.Model.md#removelistener)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:110](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L110)

___

### removeMsg

▸ **removeMsg**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L71)

___

### removeMsgsCollection

▸ **removeMsgsCollection**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:75](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L75)

___

### replaceMsgsCollection

▸ **replaceMsgsCollection**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L74)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[Model](whatsapp.Model.md).[reset](whatsapp.Model.md#reset)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:94](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L94)

___

### sendReadStatus

▸ **sendReadStatus**(`e?`, `t?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |
| `t?` | `any` |

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L69)

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

[packages/wa-js/src/whatsapp/models/Model.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L84)

___

### setupStatusExpiration

▸ **setupStatusExpiration**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L64)

___

### stopListening

▸ **stopListening**(`context?`, `eventName?`, `listener?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `any` |
| `eventName?` | `Event` |
| `listener?` | `Listener` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[stopListening](whatsapp.Model.md#stoplistening)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L70)

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

▸ **trigger**(`eventName`, ...`args`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Inherited from

[Model](whatsapp.Model.md).[trigger](whatsapp.Model.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L68)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `off`

**`alias`** off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[Model](whatsapp.Model.md).[unbind](whatsapp.Model.md#unbind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:105](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L105)

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

[packages/wa-js/src/whatsapp/models/Model.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L88)

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

[packages/wa-js/src/whatsapp/models/Model.ts:100](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L100)
