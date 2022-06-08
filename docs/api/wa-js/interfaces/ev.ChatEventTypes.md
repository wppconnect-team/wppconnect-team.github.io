---
id: "ev.ChatEventTypes"
title: "Interface: ChatEventTypes"
sidebar_label: "ChatEventTypes"
custom_edit_url: null
---

[ev](../namespaces/ev.md).ChatEventTypes

## Properties

### chat.live\_location\_end

• **chat.live\_location\_end**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) |
| `id` | [`Wid`](../classes/whatsapp.Wid.md) |
| `seq` | `number` |

#### Defined in

[packages/wa-js/src/chat/events/eventTypes.ts:88](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L88)

___

### chat.live\_location\_start

• **chat.live\_location\_start**: `Object`

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

[packages/wa-js/src/chat/events/eventTypes.ts:66](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L66)

___

### chat.live\_location\_update

• **chat.live\_location\_update**: `Object`

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

[packages/wa-js/src/chat/events/eventTypes.ts:77](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L77)

___

### chat.msg\_ack\_change

• **chat.msg\_ack\_change**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `ack` | `number` | - |
| `chat` | [`Wid`](../classes/whatsapp.Wid.md) | The chat that sended the messeage |
| `ids` | [`MsgKey`](../classes/whatsapp.MsgKey.md)[] | Message id of revoke event |
| `sender?` | [`Wid`](../classes/whatsapp.Wid.md) | Who sended the ack, only for groups, broadcast and status |

#### Defined in

[packages/wa-js/src/chat/events/eventTypes.ts:51](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L51)

___

### chat.msg\_revoke

• **chat.msg\_revoke**: `Object`

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

[packages/wa-js/src/chat/events/eventTypes.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L31)

___

### chat.new\_message

• **chat.new\_message**: [`MsgModel`](../classes/whatsapp.MsgModel.md)

Triggered when new message is received

**`example`**
```javascript
WPP.on('chat.new_message', (msg) => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/chat/events/eventTypes.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L30)

___

### chat.new\_reaction

• **chat.new\_reaction**: `Object`

Triggered when a new reaction is received

**`example`**
```javascript
WPP.on('chat.new_reaction', (msg) => {
  // Your code
});
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`MsgKey`](../classes/whatsapp.MsgKey.md) | Reaction ID |
| `msgId` | [`MsgKey`](../classes/whatsapp.MsgKey.md) | Message ID that received the reaction |
| `orphan` | `number` | - |
| `orphanReason` | `any` | - |
| `reactionText` | `string` | The reaction emoji or empty if removed |
| `read` | `boolean` | - |
| `sender` | [`Wid`](../classes/whatsapp.Wid.md) | - |
| `timestamp` | `number` | - |

#### Defined in

[packages/wa-js/src/chat/events/eventTypes.ts:104](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L104)

___

### chat.presence\_change

• **chat.presence\_change**: `Object`

On presence change

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | [`Wid`](../classes/whatsapp.Wid.md) |
| `isContact?` | `boolean` |
| `isGroup` | `boolean` |
| `isOnline` | `boolean` |
| `isUser` | `boolean` |
| `participants?` | { `id`: `string` ; `shortName`: `string` ; `state`: `string`  }[] |
| `shortName` | `string` |
| `state` | `string` |
| `t` | `number` |

#### Defined in

[packages/wa-js/src/chat/events/eventTypes.ts:127](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/events/eventTypes.ts#L127)
