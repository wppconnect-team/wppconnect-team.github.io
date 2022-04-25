---
id: "ev.ConnEventTypes"
title: "Interface: ConnEventTypes"
sidebar_label: "ConnEventTypes"
custom_edit_url: null
---

[ev](../namespaces/ev.md).ConnEventTypes

## Properties

### conn.auth\_code\_change

• **conn.auth\_code\_change**: ``null`` \| [`AuthCode`](../namespaces/conn.md#authcode)

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L20)

___

### conn.authenticated

• **conn.authenticated**: `undefined`

Triggered afted a success QR code scan

**`example`**
```javascript
WPP.on('conn.authenticated', () => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L31)

___

### conn.logout

• **conn.logout**: `undefined`

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L32)

___

### conn.main\_loaded

• **conn.main\_loaded**: `undefined`

Triggered when the main interface is loaded, but is syncing

**`example`**
```javascript
WPP.on('conn.main_loaded', () => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L43)

___

### conn.main\_ready

• **conn.main\_ready**: `undefined`

Triggered when the main interface is loaded, authenticated and ready to send message

**`example`**
```javascript
WPP.on('conn.main_ready', () => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:54](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L54)

___

### conn.qrcode\_idle

• **conn.qrcode\_idle**: `undefined`

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:55](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L55)

___

### conn.require\_auth

• **conn.require\_auth**: `undefined`

#### Defined in

[packages/wa-js/src/conn/events/eventTypes.ts:56](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/events/eventTypes.ts#L56)
