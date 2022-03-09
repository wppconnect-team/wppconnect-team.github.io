---
id: "whatsapp.MediaBlobCacheImpl"
title: "Class: MediaBlobCacheImpl"
sidebar_label: "MediaBlobCacheImpl"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).MediaBlobCacheImpl

**`whatsapp`** 84866

## Constructors

### constructor

• **new MediaBlobCacheImpl**()

## Properties

### is24h

• **is24h**: `boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L21)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L28)

___

### decreaseUsageCount

▸ **decreaseUsageCount**(`filehash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L30)

___

### get

▸ **get**(`filehash`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |

#### Returns

`Blob`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L24)

___

### getOrCreateURL

▸ **getOrCreateURL**(`filehash`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L22)

___

### has

▸ **has**(`filehash`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L25)

___

### increaseUsageCount

▸ **increaseUsageCount**(`filehash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L29)

___

### put

▸ **put**(`filehash`, `blob`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |
| `blob` | `Blob` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L27)

___

### revokeURL

▸ **revokeURL**(`filehash`, `blob`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |
| `blob` | `Blob` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L23)

___

### touch

▸ **touch**(`filehash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filehash` | `string` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L26)
