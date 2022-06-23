---
id: "whatsapp.WidFactory"
title: "Namespace: WidFactory"
sidebar_label: "WidFactory"
custom_edit_url: null
---

[whatsapp](whatsapp.md).WidFactory

**`whatsapp`** 45454

**`whatsapp`** 58021 >= 2.2204.13

**`whatsapp`** 745454 >= 2.2222.8

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L25)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L27)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L29)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L31)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L33)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L35)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L37)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L39)

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

[packages/wa-js/src/whatsapp/misc/WidFactory.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/WidFactory.ts#L41)
