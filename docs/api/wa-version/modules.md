---
id: "modules"
title: "@wppconnect/wa-version"
sidebar_label: "Exports (v1.1.39)"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [constants](namespaces/constants.md)

## Interfaces

- [WaVersionInfo](interfaces/WaVersionInfo.md)

## Functions

### checkUpdate

▸ **checkUpdate**(`version?`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WaVersionInfo`](interfaces/WaVersionInfo.md)\>

Verifica dados de atualização comparando a versão informada

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version?` | `string` | Versão para ser comparada, padrão é a última disponível |

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`WaVersionInfo`](interfaces/WaVersionInfo.md)\>

Dados de atualização

#### Defined in

[checkUpdate.ts:54](https://github.com/wppconnect-team/wa-version/blob/v1.1.39/src/checkUpdate.ts#L54)

___

### fetchLatest

▸ **fetchLatest**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Retorna HTML contendo a página atual do WhatsApp

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

HTML da página

#### Defined in

[fetchLatest.ts:24](https://github.com/wppconnect-team/wa-version/blob/v1.1.39/src/fetchLatest.ts#L24)

___

### fetchLatestBeta

▸ **fetchLatestBeta**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Retorna HTML contendo a página atual do WhatsApp

#### Returns

[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

HTML da página

#### Defined in

[fetchLatestBeta.ts:24](https://github.com/wppconnect-team/wa-version/blob/v1.1.39/src/fetchLatestBeta.ts#L24)

___

### getAvailableVersions

▸ **getAvailableVersions**(`versionMatch?`): `string`[]

Retorna uma lista de todas versões disponíveis

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `versionMatch?` | `string` \| `Range` | Caso informado, retornará apenas versões que coincida com o semver |

#### Returns

`string`[]

Lista de versões

#### Defined in

[getAvailableVersions.ts:27](https://github.com/wppconnect-team/wa-version/blob/v1.1.39/src/getAvailableVersions.ts#L27)

___

### getLatestVersion

▸ **getLatestVersion**(): `string`

Retorna a última versão disponível localmente

#### Returns

`string`

Última versão

#### Defined in

[getLatestVersion.ts:23](https://github.com/wppconnect-team/wa-version/blob/v1.1.39/src/getLatestVersion.ts#L23)

___

### getPageContent

▸ **getPageContent**(`versionMatch?`): `string`

Retorna o conteúdo da última versão disponível pela versão informada, aceitando regras semver

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `versionMatch?` | `string` \| `Range` | Versão da página para retornar |

#### Returns

`string`

Conteúdo HTML da página

#### Defined in

[getPageContent.ts:29](https://github.com/wppconnect-team/wa-version/blob/v1.1.39/src/getPageContent.ts#L29)
