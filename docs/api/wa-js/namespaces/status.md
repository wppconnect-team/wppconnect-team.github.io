---
id: "status"
title: "Namespace: status"
sidebar_label: "status"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [SendStatusOptions](../interfaces/status.SendStatusOptions.md)
- [TextStatusOptions](../interfaces/status.TextStatusOptions.md)

## Type Aliases

### AllStatusOptions

Ƭ **AllStatusOptions**: [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md) & [`TextStatusOptions`](../interfaces/status.TextStatusOptions.md)

#### Defined in

[packages/wa-js/src/status/defaultSendStatusOptions.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/status/defaultSendStatusOptions.ts#L20)

___

### ImageStatusOptions

Ƭ **ImageStatusOptions**: [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md)

#### Defined in

[packages/wa-js/src/status/functions/sendImageStatus.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendImageStatus.ts#L25)

___

### VideoStatusOptions

Ƭ **VideoStatusOptions**: [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md)

#### Defined in

[packages/wa-js/src/status/functions/sendVideoStatus.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendVideoStatus.ts#L25)

## Variables

### defaultSendStatusOptions

• `Const` **defaultSendStatusOptions**: [`AllStatusOptions`](status.md#allstatusoptions)

#### Defined in

[packages/wa-js/src/status/defaultSendStatusOptions.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/status/defaultSendStatusOptions.ts#L22)

## Functions

### get

▸ **get**(`chatId`): [`StatusV3Model`](../classes/whatsapp.StatusV3Model.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`StatusV3Model`](../classes/whatsapp.StatusV3Model.md) \| `undefined`

#### Defined in

[packages/wa-js/src/status/functions/get.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/get.ts#L20)

___

### getMyStatus

▸ **getMyStatus**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](../classes/whatsapp.StatusV3Model.md)\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`StatusV3Model`](../classes/whatsapp.StatusV3Model.md)\>

#### Defined in

[packages/wa-js/src/status/functions/getMyStatus.ts:19](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/getMyStatus.ts#L19)

___

### sendImageStatus

▸ **sendImageStatus**(`content`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Send a image message to status stories

**`Example`**

```javascript
WPP.status.sendImageStatus('data:image/jpeg;base64,<a long base64 file...>');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options` | [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/status/functions/sendImageStatus.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendImageStatus.ts#L35)

___

### sendRawStatus

▸ **sendRawStatus**(`message`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`RawMessage`](chat.md#rawmessage) |
| `options` | [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`SendMessageReturn`](../interfaces/chat.SendMessageReturn.md)\>

#### Defined in

[packages/wa-js/src/status/functions/sendRawStatus.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendRawStatus.ts#L44)

___

### sendTextStatus

▸ **sendTextStatus**(`content`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Send a text message to status stories

**`Example`**

```javascript
WPP.status.sendTextStatus(`Bootstrap primary color: #0275d8`, { backgroundColor: '#0275d8', font: 2});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options` | [`TextStatusOptions`](../interfaces/status.TextStatusOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/status/functions/sendTextStatus.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendTextStatus.ts#L38)

___

### sendVideoStatus

▸ **sendVideoStatus**(`content`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Send a video message to status stories

**`Example`**

```javascript
WPP.status.sendVideoStatus('data:video/mp4;base64,<a long base64 file...>');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `options` | [`SendStatusOptions`](../interfaces/status.SendStatusOptions.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/status/functions/sendVideoStatus.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/status/functions/sendVideoStatus.ts#L35)
