---
id: "chat.LinkPreviewOptions"
title: "Interface: LinkPreviewOptions"
sidebar_label: "LinkPreviewOptions"
custom_edit_url: null
---

[chat](../namespaces/chat.md).LinkPreviewOptions

## Properties

### linkPreview

• `Optional` **linkPreview**: `boolean` \| { `canonicalUrl?`: `string` ; `description?`: `string` ; `doNotPlayInline`: `boolean` ; `matchedText?`: `string` ; `richPreviewType?`: `number` ; `thumbnail?`: `string` ; `title?`: `string`  }

Send text message with link preview

**`Default`**

true

**`Example`**

```javascript
// Automatic detection
WPP.chat.sendTextMessage('[number]@c.us', 'See https://www.youtube.com/watch?v=v1PBptSDIh8');

// Overriding the title and description
WPP.chat.sendTextMessage('[number]@c.us', 'See https://www.youtube.com/watch?v=v1PBptSDIh8', {
  linkPreview: {
    title: 'Another text',
    description: 'Another description'
  }
});
```

#### Defined in

[packages/wa-js/src/chat/functions/prepareLinkPreview.ts:50](https://github.com/wppconnect-team/wa-js/blob/main/src/chat/functions/prepareLinkPreview.ts#L50)
