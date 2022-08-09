---
id: "whatsapp.Base64"
title: "Namespace: Base64"
sidebar_label: "Base64"
custom_edit_url: null
---

[whatsapp](whatsapp.md).Base64

**`Whatsapp`**

15688

**`Whatsapp`**

615688 >= 2.2222.8

## Variables

### BASE64\_DATA\_URL\_SCHEME

• `Const` **BASE64\_DATA\_URL\_SCHEME**: ``"data:image/jpeg;base64,"``

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L23)

## Functions

### decodeB64

▸ **decodeB64**(`data`): `ArrayBufferLike`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`ArrayBufferLike`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L29)

___

### decodeB64ToJsArray

▸ **decodeB64ToJsArray**(`data`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`number`[]

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L31)

___

### decodeB64UrlSafe

▸ **decodeB64UrlSafe**(`data`): `ArrayBufferLike`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`ArrayBufferLike`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L30)

___

### encodeB64

▸ **encodeB64**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayLike`<`number`\> \| `ArrayBufferLike` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L24)

___

### encodeB64UrlSafe

▸ **encodeB64UrlSafe**(`data`, `t?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayLike`<`number`\> \| `ArrayBufferLike` |
| `t?` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L25)

___

### sizeWhenB64Decoded

▸ **sizeWhenB64Decoded**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayLike`<`number`\> \| `ArrayBufferLike` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Base64.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Base64.ts#L32)
