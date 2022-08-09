---
id: "ev.GroupEventTypes"
title: "Interface: GroupEventTypes"
sidebar_label: "GroupEventTypes"
custom_edit_url: null
---

[ev](../namespaces/ev.md).GroupEventTypes

## Properties

### group.participant\_changed

• **group.participant\_changed**: `Object`

Triggered when some member of group has changed

**`Example`**

```javascript
WPP.on('group.participant_changed', (event) => {
  // Your code
});
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | ``"join"`` \| ``"add"`` \| ``"remove"`` \| ``"demote"`` \| ``"promote"`` \| ``"leaver"`` | The action by member |
| `author?` | `string` | Author of action for add, remove, demote and promote members |
| `authorPushName?` | `string` | Author name of action for add, remove, demote and promote members |
| `groupId` | `string` | The group id |
| `operation` | ``"add"`` \| ``"remove"`` \| ``"demote"`` \| ``"promote"`` | The operation in group |
| `participants` | `string`[] | List of members |

#### Defined in

[packages/wa-js/src/group/events/eventTypes.ts:28](https://github.com/wppconnect-team/wa-js/blob/main/src/group/events/eventTypes.ts#L28)
