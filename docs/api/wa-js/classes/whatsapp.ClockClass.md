---
id: "whatsapp.ClockClass"
title: "Class: ClockClass"
sidebar_label: "ClockClass"
custom_edit_url: null
---

[whatsapp](../namespaces/whatsapp.md).ClockClass

**`whatsapp`** 22683

## Constructors

### constructor

• **new ClockClass**()

## Properties

### is24h

• **is24h**: `boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L21)

___

### skew

• **skew**: `number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L22)

___

### skewMS

• **skewMS**: `number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:23](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L23)

___

### timeZoneHardCode

• **timeZoneHardCode**: `string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L24)

## Methods

### createdStr

▸ **createdStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:38](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L38)

___

### daysDelta

▸ **daysDelta**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L41)

___

### durationStr

▸ **durationStr**(`seconds`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seconds` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L42)

___

### getIs24Hour

▸ **getIs24Hour**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L25)

___

### getSkew

▸ **getSkew**(): `number`

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L28)

___

### globalUnixTime

▸ **globalUnixTime**(`timestamp?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp?` | `number` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L30)

___

### lastSeenStr

▸ **lastSeenStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:40](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L40)

___

### liveLocationLastUpdatedStr

▸ **liveLocationLastUpdatedStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L44)

___

### localUnixTime

▸ **localUnixTime**(`timestamp?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp?` | `number` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L29)

___

### paymentTimestampStr

▸ **paymentTimestampStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:43](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L43)

___

### relativeDateAndTimeStr

▸ **relativeDateAndTimeStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:33](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L33)

___

### relativeDateStr

▸ **relativeDateStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L32)

___

### relativeStr

▸ **relativeStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L31)

___

### setIs24Hour

▸ **setIs24Hour**(`is24h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `is24h` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L26)

___

### setSkew

▸ **setSkew**(`skew`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `skew` | `number` |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:27](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L27)

___

### shouldUseIntlDateTimeFormat

▸ **shouldUseIntlDateTimeFormat**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:45](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L45)

___

### timeStr

▸ **timeStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:34](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L34)

___

### timestampHour

▸ **timestampHour**(`timestamp`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:37](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L37)

___

### timestampStr

▸ **timestampStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L35)

___

### timestampStrFormat

▸ **timestampStrFormat**(): `string`

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:36](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L36)

___

### untilStr

▸ **untilStr**(`timestamp`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |

#### Returns

`string`

#### Defined in

[packages/wa-js/src/whatsapp/misc/Clock.ts:39](https://github.com/wppconnect-team/wa-js/blob/main/src/whatsapp/misc/Clock.ts#L39)
