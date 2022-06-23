---
id: "whatsapp.MediaBlobCacheImpl"
title: "Class: MediaBlobCacheImpl"
sidebar_label: "MediaBlobCacheImpl"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).MediaBlobCacheImpl

**`whatsapp`** 84866

**`whatsapp`** 284866 >= 2.2222.8

## Constructors

### constructor

• **new MediaBlobCacheImpl**()

## Properties

### is24h

• **is24h**: `boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L23)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L30)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L32)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L26)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L24)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L27)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L31)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L29)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L25)

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

[packages/wa-js/src/whatsapp/misc/MediaBlobCache.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/MediaBlobCache.ts#L28)
