---
id: "labels"
title: "Namespace: labels"
sidebar_label: "labels"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [AddOrRemoveLabelsOptions](../interfaces/labels.AddOrRemoveLabelsOptions.md)
- [DeleteLabelReturn](../interfaces/labels.DeleteLabelReturn.md)
- [EventTypes](../interfaces/labels.EventTypes.md)
- [Label](../interfaces/labels.Label.md)

## Type aliases

### UnsubscribeFn

Ƭ **UnsubscribeFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/wa-js/src/labels/eventEmitter.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/eventEmitter.ts#L22)

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

[packages/wa-js/src/labels/eventEmitter.ts:72](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/eventEmitter.ts#L72)

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

[packages/wa-js/src/labels/eventEmitter.ts:80](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/eventEmitter.ts#L80)

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
| `listener` | (`eventData`: [`EventTypes`](../interfaces/labels.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

`void`

#### Defined in

[packages/wa-js/src/labels/eventEmitter.ts:60](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/eventEmitter.ts#L60)

___

### on

• **on**<`Name`\>(`eventName`, `listener`): [`UnsubscribeFn`](labels.md#unsubscribefn)

Subscribe to one event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `never` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Name` |
| `listener` | (`eventData`: [`EventTypes`](../interfaces/labels.EventTypes.md)[`Name`]) => `void` \| [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

#### Returns

[`UnsubscribeFn`](labels.md#unsubscribefn)

An unsubscribe method.

#### Defined in

[packages/wa-js/src/labels/eventEmitter.ts:44](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/eventEmitter.ts#L44)

___

### once

• **once**<`Name`\>(`eventName`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/labels.EventTypes.md)[`Name`]\>

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

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`EventTypes`](../interfaces/labels.EventTypes.md)[`Name`]\>

#### Defined in

[packages/wa-js/src/labels/eventEmitter.ts:53](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/eventEmitter.ts#L53)

## Functions

### addNewLabel

▸ **addNewLabel**(`labelName`, `options?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Add a new label
Use await WPP.labels.getLabelColorPalette() to get the list of available colors

**`example`**
```javascript
await WPP.labels.addNewLabel(`Name of label`);
//or
await WPP.labels.addNewLabel(`Name of label`, { labelColor: '#dfaef0' });
//or
await WPP.labels.addNewLabel(`Name of label`, { labelColor: 4292849392 });
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `labelName` | `string` |
| `options` | `NewLabelOptions` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/labels/functions/addNewLabel.ts:42](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/addNewLabel.ts#L42)

___

### addOrRemoveLabels

▸ **addOrRemoveLabels**(`chatIds`, `options`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

Add or remove label from chats

**`example`**
```javascript
await WPP.labels.addOrRemoveLabels(
  ['[number]@c.us','[number]@c.us'],
  [{labelId:'76', type:'add'},{labelId:'75', type:'remove'}]
)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `chatIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |
| `options` | [`AddOrRemoveLabelsOptions`](../interfaces/labels.AddOrRemoveLabelsOptions.md) \| [`AddOrRemoveLabelsOptions`](../interfaces/labels.AddOrRemoveLabelsOptions.md)[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`any`\>

#### Defined in

[packages/wa-js/src/labels/functions/addOrRemoveLabels.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/addOrRemoveLabels.ts#L35)

___

### colorIsInLabelPalette

▸ **colorIsInLabelPalette**(`color`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Check if color is in label palette

**`example`**
```javascript
await WPP.labels.colorIsInLabelPalette('#ffd429');
//or
await WPP.labels.colorIsInLabelPalette(4284794111);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| `number` | If it's decimal, send it as a number. If it's hexadecimal, send it as a string |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/labels/functions/colorIsInLabelPalette.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/colorIsInLabelPalette.ts#L30)

___

### deleteAllLabels

▸ **deleteAllLabels**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteLabelReturn`](../interfaces/labels.DeleteLabelReturn.md)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteLabelReturn`](../interfaces/labels.DeleteLabelReturn.md)[]\>

#### Defined in

[packages/wa-js/src/labels/functions/deleteAllLabels.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/deleteAllLabels.ts#L20)

___

### deleteLabel

▸ **deleteLabel**(`id`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteLabelReturn`](../interfaces/labels.DeleteLabelReturn.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteLabelReturn`](../interfaces/labels.DeleteLabelReturn.md)\>

#### Defined in

[packages/wa-js/src/labels/functions/deleteLabel.ts:25](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/deleteLabel.ts#L25)

▸ **deleteLabel**(`ids`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteLabelReturn`](../interfaces/labels.DeleteLabelReturn.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`DeleteLabelReturn`](../interfaces/labels.DeleteLabelReturn.md)[]\>

#### Defined in

[packages/wa-js/src/labels/functions/deleteLabel.ts:26](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/deleteLabel.ts#L26)

___

### getAllLabels

▸ **getAllLabels**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Label`](../interfaces/labels.Label.md)[]\>

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Label`](../interfaces/labels.Label.md)[]\>

#### Defined in

[packages/wa-js/src/labels/functions/getAllLabels.ts:21](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/getAllLabels.ts#L21)

___

### getLabelColorPalette

▸ **getLabelColorPalette**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`[]\>

Returns an array of color palette in positive decimal

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`[]\>

#### Defined in

[packages/wa-js/src/labels/functions/getLabelColorPalette.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/getLabelColorPalette.ts#L24)

___

### getNewLabelColor

▸ **getNewLabelColor**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

Return the color of the next label in positive decimal

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

#### Defined in

[packages/wa-js/src/labels/functions/getNewLabelColor.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/labels/functions/getNewLabelColor.ts#L24)
