---
id: "chat.EventTypes"
title: "Interface: EventTypes"
sidebar_label: "EventTypes"
custom_edit_url: null
---

[chat](../namespaces/chat.md).EventTypes

## Properties

### live\_location\_end

• **live\_location\_end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) |
| `id` | [`Wid`](../classes/whatsapp.Wid.md) |
| `seq` | `number` |

#### Defined in

[packages/wa-js/src/chat/eventEmitter.ts:84](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/eventEmitter.ts#L84)

___

### live\_location\_start

• **live\_location\_start**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accuracy?` | `number` |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) |
| `degrees?` | `number` |
| `id` | [`Wid`](../classes/whatsapp.Wid.md) |
| `lat` | `number` |
| `lng` | `number` |
| `msgId` | [`MsgKey`](../classes/whatsapp.MsgKey.md) |
| `shareDuration` | `number` |
| `speed?` | `number` |

#### Defined in

[packages/wa-js/src/chat/eventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/eventEmitter.ts#L62)

___

### live\_location\_update

• **live\_location\_update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accuracy?` | `number` |
| `comment` | `string` |
| `degrees?` | `number` |
| `elapsed` | `number` |
| `id` | [`Wid`](../classes/whatsapp.Wid.md) |
| `lastUpdated` | `number` |
| `lat` | `number` |
| `lng` | `number` |
| `speed?` | `number` |

#### Defined in

[packages/wa-js/src/chat/eventEmitter.ts:73](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/eventEmitter.ts#L73)

___

### msg\_ack\_change

• **msg\_ack\_change**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ack` | `number` | - |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) | The chat that sended the messeage |
| `ids` | [`MsgKey`](../classes/whatsapp.MsgKey.md)[] | Message id of revoke event |
| `sender?` | [`Wid`](../classes/whatsapp.Wid.md) | Who sended the ack, only for groups, broadcast and status |

#### Defined in

[packages/wa-js/src/chat/eventEmitter.ts:47](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/eventEmitter.ts#L47)

___

### msg\_revoke

• **msg\_revoke**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `author?` | [`Wid`](../classes/whatsapp.Wid.md) | Author of message, only for groups |
| `from` | [`Wid`](../classes/whatsapp.Wid.md) | - |
| `id` | [`MsgKey`](../classes/whatsapp.MsgKey.md) | Message id of revoke event |
| `refId` | [`MsgKey`](../classes/whatsapp.MsgKey.md) | Message id of revoked message |
| `to` | [`Wid`](../classes/whatsapp.Wid.md) | - |
| `type` | ``"revoke"`` \| ``"sender_revoke"`` \| ``"admin_revoke"`` | Type of revoke |

#### Defined in

[packages/wa-js/src/chat/eventEmitter.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/eventEmitter.ts#L27)
