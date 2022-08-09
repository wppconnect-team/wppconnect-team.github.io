---
id: "ev.CallEventTypes"
title: "Interface: CallEventTypes"
sidebar_label: "CallEventTypes"
custom_edit_url: null
---

[ev](../namespaces/ev.md).CallEventTypes

## Properties

### call.incoming\_call

• **call.incoming\_call**: `Object`

Triggered when you a incoming call

**`Example`**

```javascript
WPP.on('call.incoming_call', (call) => {
  // Your code
  //Example: Reject any incoming call
  WPP.call.rejectCall(call.id);
});
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The call id |
| `isGroup` | `boolean` | Is a call from a group |
| `isVideo` | `boolean` | Is call with video |
| `offerTime` | `number` | timestamp of offer |
| `peerJid` | [`Wid`](../classes/whatsapp.Wid.md) | Wid of sender with device id |
| `sender` | [`Wid`](../classes/whatsapp.Wid.md) | Wid of sender without device id |

#### Defined in

[packages/wa-js/src/call/events/eventTypes.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/call/events/eventTypes.ts#L32)
