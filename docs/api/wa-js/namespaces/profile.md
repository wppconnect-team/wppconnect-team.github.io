---
id: "profile"
title: "Namespace: profile"
sidebar_label: "profile"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [EventTypes](../interfaces/profile.EventTypes.md)

## Chat Functions

- [getMyStatus](profile.md#getmystatus)
- [setMyStatus](profile.md#setmystatus)

## Type aliases

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/wa-js/src/profile/eventEmitter.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/eventEmitter.ts#L22)

## Events

### clearListeners

• **clearListeners**<`Name`\>(`eventName?`): `void`

Clear all event listeners on the instance.

If `eventName` is given, only the listeners for that event are cleared.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/profile/eventEmitter.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/eventEmitter.ts#L72)

___

### listenerCount

• **listenerCount**<`Name`\>(`eventName?`): `number`

The number of listeners for the `eventName` or all events if not specified.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `Name` \| `Name`[] |

#### Returns

`number`

#### Defined in

[packages/wa-js/src/profile/eventEmitter.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/eventEmitter.ts#L80)

___

### off

• **off**<`Name`\>(`eventName`, `listener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/profile.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/profile/eventEmitter.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/eventEmitter.ts#L60)

___

### on

• **on**<`Name`\>(`eventName`, `listener`): [`UnsubscribeFn`](profile.md#unsubscribefn)

Subscribe to one event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/profile.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

[`UnsubscribeFn`](profile.md#unsubscribefn)

An unsubscribe method.

#### Defined in

[packages/wa-js/src/profile/eventEmitter.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/eventEmitter.ts#L44)

___

### once

• **once**<`Name`\>(`eventName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/profile.EventTypes.md)[`Name`]\>

Subscribe to one or more events only once. It will be unsubscribed after the first event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/profile.EventTypes.md)[`Name`]\>

#### Defined in

[packages/wa-js/src/profile/eventEmitter.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/eventEmitter.ts#L53)

## Chat Functions

### getMyStatus

▸ **getMyStatus**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| `string`\>

Get your current text status

**`example`**
```javascript
await WPP.profile.getMyStatus();
```

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| `string`\>

#### Defined in

[packages/wa-js/src/profile/functions/getMyStatus.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/functions/getMyStatus.ts#L30)

___

### setMyStatus

▸ **setMyStatus**(`statusText`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Update your current text status

**`example`**
```javascript
await WPP.profile.setMyStatus('Example text');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusText` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/profile/functions/setMyStatus.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/profile/functions/setMyStatus.ts#L31)
