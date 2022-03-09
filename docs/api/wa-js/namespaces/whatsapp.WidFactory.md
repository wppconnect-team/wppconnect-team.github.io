---
id: "whatsapp.WidFactory"
title: "Namespace: WidFactory"
sidebar_label: "WidFactory"
custom_edit_url: null
---

[whatsapp](whatsapp.md).WidFactory

**`whatsapp`** 45454

## Functions

### createDeviceWid

▸ **createDeviceWid**(`wid`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L22)

___

### createDeviceWidFromUserAndDevice

▸ **createDeviceWidFromUserAndDevice**(`user`, `device`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `device` | `string` |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L24)

___

### createUserWid

▸ **createUserWid**(`user`, `server?`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` |
| `server?` | `string` |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L26)

___

### createWid

▸ **createWid**(`wid`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L28)

___

### createWidFromWidLike

▸ **createWidFromWidLike**(`wid`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` \| { `_serialized`: `string`  } |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L30)

___

### isWidlike

▸ **isWidlike**(`wid`): wid is Wid

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `any` |

#### Returns

wid is Wid

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L32)

___

### toChatWid

▸ **toChatWid**(`wid`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L34)

___

### toUserWid

▸ **toUserWid**(`wid`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L36)

___

### userJidToUserWid

▸ **userJidToUserWid**(`wid`): [`Wid`](../classes/whatsapp.Wid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wid` | `string` |

#### Returns

[`Wid`](../classes/whatsapp.Wid.md)

#### Defined in

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L38)
