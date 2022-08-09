---
id: "whatsapp.StatusV3Model"
title: "Class: StatusV3Model"
sidebar_label: "StatusV3Model"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).StatusV3Model

**`Whatsapp`**

47896

**`Whatsapp`**

547896 >= 2.2222.8

## Hierarchy

- [`ModelProxy`](../namespaces/whatsapp.md#modelproxy)<`Props`, `Session`, `Derived`\>

- [`ModelChatBase`](whatsapp.ModelChatBase.md)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[constructor](whatsapp.ModelChatBase.md#constructor)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L55)

## Properties

### attributes

• `Readonly` **attributes**: `Props` & `Session`

#### Inherited from

ModelProxy.attributes

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L25)

___

### collection

• `Optional` **collection**: [`ChatCollection`](whatsapp.ChatCollection.md)

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[collection](whatsapp.ModelChatBase.md#collection)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L66)

___

### contact

• `Optional` **contact**: `any`

#### Inherited from

ModelProxy.contact

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L33)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L34)

___

### expireTs

• `Optional` **expireTs**: `any`

#### Inherited from

ModelProxy.expireTs

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L35)

___

### hasUnread

• `Readonly` **hasUnread**: `boolean`

#### Inherited from

ModelProxy.hasUnread

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L39)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L54)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L41)

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

### msgs

• **msgs**: [`MsgLoad`](whatsapp.MsgLoad.md)

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[msgs](whatsapp.ModelChatBase.md#msgs)

#### Defined in

[packages/wa-js/src/whatsapp/models/ModelChatBase.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/ModelChatBase.ts#L42)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[parent](whatsapp.ModelChatBase.md#parent)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L27)

___

### proxyName

• **proxyName**: `string`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[proxyName](whatsapp.ModelChatBase.md#proxyname)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L68)

___

### readCount

• `Optional` `Readonly` **readCount**: `any`

#### Inherited from

ModelProxy.readCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L40)

___

### readKeys

• `Optional` **readKeys**: `any`

#### Inherited from

ModelProxy.readKeys

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L32)

___

### stale

• `Optional` **stale**: `any`

#### Inherited from

ModelProxy.stale

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L31)

___

### t

• `Optional` **t**: `any`

#### Inherited from

ModelProxy.t

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L24)

___

### totalCount

• `Optional` **totalCount**: `any`

#### Inherited from

ModelProxy.totalCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L26)

___

### unreadCount

• `Optional` **unreadCount**: `any`

#### Inherited from

ModelProxy.unreadCount

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L25)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[Proxy](whatsapp.ModelChatBase.md#proxy)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L56)

___

### allowedIds

▪ `Static` `Optional` **allowedIds**: `any`[]

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[allowedIds](whatsapp.ModelChatBase.md#allowedids)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L60)

___

### idClass

▪ `Static` `Optional` **idClass**: `any`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[idClass](whatsapp.ModelChatBase.md#idclass)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[addChild](whatsapp.ModelChatBase.md#addchild)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L80)

___

### bind

▸ **bind**(`eventName`, `listener`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `on`

**`Alias`**

on

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `listener` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[bind](whatsapp.ModelChatBase.md#bind)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:99](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L99)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[clear](whatsapp.ModelChatBase.md#clear)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:90](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L90)

___

### decObservers

▸ **decObservers**(): `void`

#### Returns

`void`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[decObservers](whatsapp.ModelChatBase.md#decobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:76](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L76)

___

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[delete](whatsapp.ModelChatBase.md#delete)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:92](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L92)

___

### emit

▸ **emit**(`eventName`, ...`args`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `trigger`

**`Alias`**

trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Event` |
| `...args` | `any`[] |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[emit](whatsapp.ModelChatBase.md#emit)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:120](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L120)

___

### expireMsg

▸ **expireMsg**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L60)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[get](whatsapp.ModelChatBase.md#get)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:82](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L82)

___

### getAllCMCs

▸ **getAllCMCs**(): `any`

#### Returns

`any`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[getAllCMCs](whatsapp.ModelChatBase.md#getallcmcs)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:67](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L67)

___

### getAllMsgs

▸ **getAllMsgs**(): `any`

#### Returns

`any`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[getAllMsgs](whatsapp.ModelChatBase.md#getallmsgs)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L68)

___

### getCollection

▸ **getCollection**(): [`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Returns

[`StatusV3Collection`](whatsapp.StatusV3Collection.md)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:65](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L65)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[getDefault](whatsapp.ModelChatBase.md#getdefault)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L63)

___

### hasObservers

▸ **hasObservers**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[hasObservers](whatsapp.ModelChatBase.md#hasobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:78](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L78)

___

### hasUnfiredChanges

▸ **hasUnfiredChanges**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[hasUnfiredChanges](whatsapp.ModelChatBase.md#hasunfiredchanges)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[incObservers](whatsapp.ModelChatBase.md#incobservers)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:74](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L74)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[initialize](whatsapp.ModelChatBase.md#initialize)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[isListening](whatsapp.ModelChatBase.md#islistening)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[listenTo](whatsapp.ModelChatBase.md#listento)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[listenToAndRun](whatsapp.ModelChatBase.md#listentoandrun)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[listenToOnce](whatsapp.ModelChatBase.md#listentoonce)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L62)

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

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[notifyMsgCollectionMerge](whatsapp.ModelChatBase.md#notifymsgcollectionmerge)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:71](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L71)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[off](whatsapp.ModelChatBase.md#off)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[on](whatsapp.ModelChatBase.md#on)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L42)

___

### onEmptyMRM

▸ **onEmptyMRM**(): `any`

#### Returns

`any`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[onEmptyMRM](whatsapp.ModelChatBase.md#onemptymrm)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L61)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[once](whatsapp.ModelChatBase.md#once)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[removeAllListeners](whatsapp.ModelChatBase.md#removealllisteners)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:115](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L115)

___

### removeListener

▸ **removeListener**(`eventName?`, `listener?`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `off`

**`Alias`**

off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[removeListener](whatsapp.ModelChatBase.md#removelistener)

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

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[removeMsg](whatsapp.ModelChatBase.md#removemsg)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L66)

___

### removeMsgsCollection

▸ **removeMsgsCollection**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[removeMsgsCollection](whatsapp.ModelChatBase.md#removemsgscollection)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:70](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L70)

___

### replaceMsgsCollection

▸ **replaceMsgsCollection**(`e?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`any`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[replaceMsgsCollection](whatsapp.ModelChatBase.md#replacemsgscollection)

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:69](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L69)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[reset](whatsapp.ModelChatBase.md#reset)

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

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:64](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L64)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[set](whatsapp.ModelChatBase.md#set)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L84)

___

### setupStatusExpiration

▸ **setupStatusExpiration**(): `any`

#### Returns

`any`

#### Defined in

[packages/wa-js/src/whatsapp/models/StatusV3Model.ts:59](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/StatusV3Model.ts#L59)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[stopListening](whatsapp.ModelChatBase.md#stoplistening)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[trigger](whatsapp.ModelChatBase.md#trigger)

#### Defined in

[packages/wa-js/src/whatsapp/misc/EventEmitter.ts:68](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/EventEmitter.ts#L68)

___

### unbind

▸ **unbind**(`eventName?`, `listener?`, `context?`): [`StatusV3Model`](whatsapp.StatusV3Model.md)

Alias of `off`

**`Alias`**

off

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Event` |
| `listener?` | `Listener` |
| `context?` | `any` |

#### Returns

[`StatusV3Model`](whatsapp.StatusV3Model.md)

#### Inherited from

[ModelChatBase](whatsapp.ModelChatBase.md).[unbind](whatsapp.ModelChatBase.md#unbind)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[unset](whatsapp.ModelChatBase.md#unset)

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

[ModelChatBase](whatsapp.ModelChatBase.md).[isIdType](whatsapp.ModelChatBase.md#isidtype)

#### Defined in

[packages/wa-js/src/whatsapp/models/Model.ts:100](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/models/Model.ts#L100)
