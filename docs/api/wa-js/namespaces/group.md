---
id: "group"
title: "Namespace: group"
sidebar_label: "group"
sidebar_position: 0
custom_edit_url: null
---

## Enumerations

- [GroupProperty](../enums/group.GroupProperty.md)

## Group Functions

- [addParticipants](group.md#addparticipants)
- [getGroupInfoFromInviteCode](group.md#getgroupinfofrominvitecode)
- [join](group.md#join)
- [leave](group.md#leave)
- [revokeInviteCode](group.md#revokeinvitecode)
- [setDescription](group.md#setdescription)
- [setProperty](group.md#setproperty)
- [setSubject](group.md#setsubject)

## Other Functions

- [canAdd](group.md#canadd)
- [canDemote](group.md#candemote)
- [canPromote](group.md#canpromote)
- [canRemove](group.md#canremove)
- [create](group.md#create)
- [demoteParticipants](group.md#demoteparticipants)
- [ensureGroup](group.md#ensuregroup)
- [ensureGroupAndParticipants](group.md#ensuregroupandparticipants)
- [getInviteCode](group.md#getinvitecode)
- [getParticipants](group.md#getparticipants)
- [iAmAdmin](group.md#iamadmin)
- [iAmMember](group.md#iammember)
- [iAmRestrictedMember](group.md#iamrestrictedmember)
- [iAmSuperAdmin](group.md#iamsuperadmin)
- [promoteParticipants](group.md#promoteparticipants)
- [removeParticipants](group.md#removeparticipants)
- [setIcon](group.md#seticon)

## Group Functions

### addParticipants

▸ **addParticipants**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `[key: `${number}@c.us`]`: { `code`: `number` ; `invite_code`: `string` \| ``null`` ; `invite_code_exp`: `number` \| ``null`` ; `message`: `string`  };  }\>

Add one or more participants to a group

The method return a object with the result of each participant as the key

**`Example`**

```javascript
await WPP.group.addParticipants('[group@g.us]', [number@c.us]);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `[key: `${number}@c.us`]`: { `code`: `number` ; `invite_code`: `string` \| ``null`` ; `invite_code_exp`: `number` \| ``null`` ; `message`: `string`  };  }\>

#### Defined in

[packages/wa-js/src/group/functions/addParticipants.ts:41](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/addParticipants.ts#L41)

___

### getGroupInfoFromInviteCode

▸ **getGroupInfoFromInviteCode**(`inviteCode`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `announce`: `boolean` ; `creation`: `number` ; `desc`: `string` ; `descId`: `string` ; `descOwner`: `undefined` \| `string` ; `descTime`: `number` ; `id`: `string` ; `noFrequentlyForwarded`: `boolean` ; `owner`: `undefined` \| `string` ; `parent`: `boolean` ; `participants`: { `id`: `string` ; `isAdmin`: `boolean` ; `isSuperAdmin`: `boolean`  }[] ; `pvId?`: `string` ; `restrict`: `boolean` ; `size`: `number` ; `status`: `number` ; `subject`: `string` ; `subjectOwner`: `undefined` \| `string` ; `subjectTime`: `number` ; `support`: `boolean` ; `suspended`: `boolean`  }\>

Get group info from an inviteCode

**`Example`**

```javascript
await WPP.group.getGroupInfoFromInviteCode('<inviteCode>');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `announce`: `boolean` ; `creation`: `number` ; `desc`: `string` ; `descId`: `string` ; `descOwner`: `undefined` \| `string` ; `descTime`: `number` ; `id`: `string` ; `noFrequentlyForwarded`: `boolean` ; `owner`: `undefined` \| `string` ; `parent`: `boolean` ; `participants`: { `id`: `string` ; `isAdmin`: `boolean` ; `isSuperAdmin`: `boolean`  }[] ; `pvId?`: `string` ; `restrict`: `boolean` ; `size`: `number` ; `status`: `number` ; `subject`: `string` ; `subjectOwner`: `undefined` \| `string` ; `subjectTime`: `number` ; `support`: `boolean` ; `suspended`: `boolean`  }\>

#### Defined in

[packages/wa-js/src/group/functions/getGroupInfoFromInviteCode.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/getGroupInfoFromInviteCode.ts#L30)

___

### join

▸ **join**(`inviteCode`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: `string`  }\>

Join in a group from an invite code.

**`Example`**

```javascript
await WPP.group.join('abcde....');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `inviteCode` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `id`: `string`  }\>

#### Defined in

[packages/wa-js/src/group/functions/join.ts:29](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/join.ts#L29)

___

### leave

▸ **leave**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Leave from a group.

**`Example`**

```javascript
await WPP.group.leave('[number]@g.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/group/functions/leave.ts:31](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/leave.ts#L31)

___

### revokeInviteCode

▸ **revokeInviteCode**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Revoke the current invite code and generate new one.

**`Example`**

```javascript
const code = WPP.group.revokeInviteCode('[group-id]@g.us');
const link = 'https://chat.whatsapp.com/' + code;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/group/functions/revokeInviteCode.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/revokeInviteCode.ts#L32)

___

### setDescription

▸ **setDescription**(`groupId`, `description`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Define the group description

**`Example`**

```javascript
await WPP.group.setDescription('[group-id]@g.us', 'new group description');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `description` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/setDescription.ts:35](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/setDescription.ts#L35)

___

### setProperty

▸ **setProperty**(`groupId`, `property`, `value`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Set the group property

**`Example`**

```javascript
// Only admins can send message
await WPP.group.setProperty('[group-id]@g.us', 'announcement', true);

// All can send message
await WPP.group.setProperty('[group-id]@g.us', 'announcement', false);

// Disatble temporary messages
await WPP.group.setProperty('[group-id]@g.us', 'ephemeral', 0);

// Enable temporary messages for 24 hours
await WPP.group.setProperty('[group-id]@g.us', 'ephemeral', 86400);

// Enable temporary messages for 7 days
await WPP.group.setProperty('[group-id]@g.us', 'ephemeral', 604800);

// Enable temporary messages for 90 days
await WPP.group.setProperty('[group-id]@g.us', 'ephemeral', 7776000);

// Only admins can edit group properties
await WPP.group.setProperty('[group-id]@g.us', 'restrict', true);

// All can edit group properties
await WPP.group.setProperty('[group-id]@g.us', 'restrict', false);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `property` | [`GroupProperty`](../enums/group.GroupProperty.md) |
| `value` | `boolean` \| ``0`` \| ``1`` \| ``86400`` \| ``604800`` \| ``7776000`` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/setProperty.ts:61](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/setProperty.ts#L61)

___

### setSubject

▸ **setSubject**(`groupId`, `subject`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Define the group subject

**`Example`**

```javascript
await WPP.group.setSubject('[group-id]@g.us', 'new group subject');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `subject` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/setSubject.ts:32](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/setSubject.ts#L32)

___

## Other Functions

### canAdd

▸ **canAdd**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/canAdd.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/canAdd.ts#L20)

___

### canDemote

▸ **canDemote**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/canDemote.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/canDemote.ts#L20)

___

### canPromote

▸ **canPromote**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/canPromote.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/canPromote.ts#L20)

___

### canRemove

▸ **canRemove**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/canRemove.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/canRemove.ts#L20)

___

### create

▸ **create**(`groupName`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `gid`: [`Wid`](../classes/whatsapp.Wid.md) ; `participants`: { `[key: string]`: { `code`: `string`  };  }[] ; `status`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName` | `string` |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `gid`: [`Wid`](../classes/whatsapp.Wid.md) ; `participants`: { `[key: string]`: { `code`: `string`  };  }[] ; `status`: `number`  }\>

#### Defined in

[packages/wa-js/src/group/functions/create.ts:24](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/create.ts#L24)

___

### demoteParticipants

▸ **demoteParticipants**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/group/functions/demoteParticipants.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/demoteParticipants.ts#L22)

___

### ensureGroup

▸ **ensureGroup**(`groupId`, `checkIsAdmin?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) | `undefined` |
| `checkIsAdmin` | `boolean` | `false` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ChatModel`](../classes/whatsapp.ChatModel.md)\>

#### Defined in

[packages/wa-js/src/group/functions/ensureGroup.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/ensureGroup.ts#L22)

___

### ensureGroupAndParticipants

▸ **ensureGroupAndParticipants**(`groupId`, `participantsIds`, `createIfNotExists?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `groupChat`: [`ChatModel`](../classes/whatsapp.ChatModel.md) ; `participants`: [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[]  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) | `undefined` |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] | `undefined` |
| `createIfNotExists` | `boolean` | `false` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `groupChat`: [`ChatModel`](../classes/whatsapp.ChatModel.md) ; `participants`: [`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[]  }\>

#### Defined in

[packages/wa-js/src/group/functions/ensureGroupAndParticipants.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/ensureGroupAndParticipants.ts#L22)

___

### getInviteCode

▸ **getInviteCode**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Get the currend invite code of the group

**`Example`**

```javascript
const code = WPP.group.getInviteCode('[group-id]@g.us');
const link = 'https://chat.whatsapp.com/' + code;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

#### Defined in

[packages/wa-js/src/group/functions/getInviteCode.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/getInviteCode.ts#L30)

___

### getParticipants

▸ **getParticipants**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[]\>

Get an array of participants of a group

**`Example`**

```javascript
WPP.group.getParticipants('[group-id]@g.us');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`ParticipantModel`](../classes/whatsapp.ParticipantModel.md)[]\>

#### Defined in

[packages/wa-js/src/group/functions/getParticipants.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/getParticipants.ts#L28)

___

### iAmAdmin

▸ **iAmAdmin**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/iAmAdmin.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/iAmAdmin.ts#L20)

___

### iAmMember

▸ **iAmMember**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/iAmMember.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/iAmMember.ts#L20)

___

### iAmRestrictedMember

▸ **iAmRestrictedMember**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/iAmRestrictedMember.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/iAmRestrictedMember.ts#L20)

___

### iAmSuperAdmin

▸ **iAmSuperAdmin**(`groupId`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

#### Defined in

[packages/wa-js/src/group/functions/iAmSuperAdmin.ts:20](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/iAmSuperAdmin.ts#L20)

___

### promoteParticipants

▸ **promoteParticipants**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/group/functions/promoteParticipants.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/promoteParticipants.ts#L22)

___

### removeParticipants

▸ **removeParticipants**(`groupId`, `participantsIds`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `participantsIds` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) \| (`string` \| [`Wid`](../classes/whatsapp.Wid.md))[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

#### Defined in

[packages/wa-js/src/group/functions/removeParticipants.ts:22](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/removeParticipants.ts#L22)

___

### setIcon

▸ **setIcon**(`groupId`, `content`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `_duplicate`: `boolean` ; `eurl`: `string` ; `status`: `number` ; `tag`: `string` ; `token`: `string`  }\>

Set the group icon (group profile picture)

**`Example`**

```javascript
await WPP.group.setIcon('[group@g.us]', 'data:image/jpeg;base64,.....');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `string` \| [`Wid`](../classes/whatsapp.Wid.md) |
| `content` | `string` |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<{ `_duplicate`: `boolean` ; `eurl`: `string` ; `status`: `number` ; `tag`: `string` ; `token`: `string`  }\>

#### Defined in

[packages/wa-js/src/group/functions/setIcon.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/group/functions/setIcon.ts#L30)
