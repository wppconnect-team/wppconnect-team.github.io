---
id: "catalog"
title: "Namespace: catalog"
sidebar_label: "catalog"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### getMyCatalog

▸ **getMyCatalog**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`CatalogModel`](../classes/whatsapp.CatalogModel.md)\>

Get your current catalog

**`Example`**

```javascript
// Get your current catalog
const myCatalog = await WPP.catalog.getMyCatalog();
```

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`undefined` \| [`CatalogModel`](../classes/whatsapp.CatalogModel.md)\>

Your current catalog

#### Defined in

[packages/wa-js/src/catalog/functions/getMyCatalog.ts:30](https://github.com/wppconnect-team/wa-js/blob/main/src/catalog/functions/getMyCatalog.ts#L30)
