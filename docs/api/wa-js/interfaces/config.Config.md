---
id: "config.Config"
title: "Interface: Config"
sidebar_label: "Config"
custom_edit_url: null
---

[config](../namespaces/config.md).Config

Define some global configurations

**`example`**
```javascript
// Global variable before injection
WPPConfig = {
  deviceName: 'WPPConnect',
  liveLocationLimit: 10
};
```

## Properties

### deviceName

• **deviceName**: `string` \| ``false``

Set the device name connected, false to disable

**`default`** 'WPPConnect'

#### Defined in

[packages/wa-js/src/config.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/config.ts#L34)

___

### liveLocationLimit

• **liveLocationLimit**: `number`

Number of last chats to check live location after a page reload

#### Defined in

[packages/wa-js/src/config.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/config.ts#L39)
