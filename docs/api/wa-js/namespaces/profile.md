---
id: "profile"
title: "Namespace: profile"
sidebar_label: "profile"
sidebar_position: 0
custom_edit_url: null
---

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
