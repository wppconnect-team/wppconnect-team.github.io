---
id: "conn.EventTypes"
title: "Interface: EventTypes"
sidebar_label: "EventTypes"
custom_edit_url: null
---

[conn](../namespaces/conn.md).EventTypes

## Properties

### auth\_code\_change

• **auth\_code\_change**: ``null`` \| [`AuthCode`](../namespaces/conn.md#authcode)

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L27)

___

### authenticated

• **authenticated**: `undefined`

Triggered afted a success QR code scan

**`example`**
```javascript
WPP.conn.on('authenticated', () => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L38)

___

### logout

• **logout**: `undefined`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L39)

___

### main\_loaded

• **main\_loaded**: `undefined`

Triggered when the main interface is loaded, but is syncing

**`example`**
```javascript
WPP.conn.on('main_loaded', () => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L50)

___

### main\_ready

• **main\_ready**: `undefined`

Triggered when the main interface is loaded, authenticated and ready to send message

**`example`**
```javascript
WPP.conn.on('main_ready', () => {
  // Your code
});
```

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L61)

___

### qrcode\_idle

• **qrcode\_idle**: `undefined`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:62](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L62)

___

### require\_auth

• **require\_auth**: `undefined`

#### Defined in

[packages/wa-js/src/conn/eventEmitter.ts:63](https://github.com/wppconnect-team/wa-js/blob/main/src/conn/eventEmitter.ts#L63)
