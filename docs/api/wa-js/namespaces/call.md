---
id: "call"
title: "Namespace: call"
sidebar_label: "call"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### rejectCall

▸ **rejectCall**(`callId?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Reject a incoming call

**`example`**
```javascript
// Reject any incoming call
WPP.call.rejectCall();

// Reject specific call id
WPP.call.rejectCall(callId);

// Reject any incoming call
WPP.on('call.incoming_call', (call) => {
  WPP.call.rejectCall(call.id);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callId?` | `string` | The call ID, empty to reject the first one |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

[return description]

#### Defined in

[packages/wa-js/src/call/functions/rejectCall.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/call/functions/rejectCall.ts#L42)
