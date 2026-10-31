[English](./README.md) | **Português (Brasil)**

<p align="center">
  <a href="https://wppconnect.io/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://wppconnect-team.github.io/brand/wppconnect-dark.png" />
      <img src="https://wppconnect-team.github.io/brand/wppconnect-light.png" alt="WPPConnect" width="220" height="121" />
    </picture>
  </a>
</p>

# WPPConnect documentation website

Mantenha o site, os guias e a documentação de projetos WPPConnect.

Um projeto do ecossistema WPPConnect, mantido pela WPPConnect Team.

[Primeiros passos](#primeiros-passos) | [Documentação](#documentação) | [Como contribuir](#como-contribuir) | [Apoie a WPPConnect](#apoie-o-projeto)

[![CI](https://github.com/wppconnect-team/wppconnect-team.github.io/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/wppconnect-team/wppconnect-team.github.io/actions/workflows/test.yml) [![Documentation](https://img.shields.io/badge/docs-WPPConnect-blue)](https://wppconnect.io/) [![Open Collective](https://img.shields.io/badge/Open%20Collective-WPPConnect-blue)](https://opencollective.com/wppconnect)

## Visão geral

Para leitores que procuram guias de projetos e contribuidores que editam o site público. O site usa Docusaurus 3 e é publicado em [wppconnect.io](https://wppconnect.io/).

## Funcionalidades

- Tutoriais, guias dos projetos do ecossistema, blog e consulta de versões do WhatsApp.
- Conteúdo localizado, páginas React tipadas e recursos compartilhados de identidade visual.

## Primeiros passos

Leia o [tutorial publicado](https://wppconnect.io/docs/tutorial/intro). Para editar localmente, use **Node.js >=26.13.0** e npm com o `package-lock.json` versionado:

```sh
git clone https://github.com/wppconnect-team/wppconnect-team.github.io.git
cd wppconnect-team.github.io
npm ci
npm run start
```

Abra a URL local informada pelo Docusaurus. Alterações de conteúdo são recarregadas durante o desenvolvimento. `npm run build` gera a saída estática em `build`.

## Configuração

Edite [docusaurus.config.js](docusaurus.config.js), o conteúdo em [docs](docs/) e as traduções em [i18n](i18n/). Atualize os dois idiomas do README quando houver mudanças de runtime, comandos ou arrecadação. Renovate e o workflow existente `update-lock` mantêm dependências; sua validação inclui tipos, verificações HTTP/WebSocket das dependências, smoke do servidor de desenvolvimento e builds localizados. A publicação continua regida pelo workflow GitHub Pages existente e pelas permissões do repositório.

## Documentação

- [Documentação publicada](https://wppconnect.io/)
- [Recursos e regras de identidade visual](./static/brand/README.md)
- [Padrão de README](https://github.com/wppconnect-team/.github)
- [Detalhes técnicos e agradecimentos preservados](documentation/readme-reference.md)

## Ecossistema WPPConnect

| Projeto | Finalidade | Quando usar |
| --- | --- | --- |
| [WPPConnect](https://github.com/wppconnect-team/wppconnect) | Controle o WhatsApp Web em aplicações Node.js. | Incorporar automação a uma aplicação Node.js. |
| [WPPConnect/WA-JS](https://github.com/wppconnect-team/wa-js) | Exponha funções do WhatsApp Web pela API `WPP` no navegador. | Executar código no navegador dentro do WhatsApp Web. |
| [WPPConnect Server](https://github.com/wppconnect-team/wppconnect-server) | Execute uma API REST para sessões, mensagens e webhooks do WhatsApp. | Expor operações de sessão e mensagens por HTTP. |
| [WPP4Delphi](https://github.com/wppconnect-team/WPP4Delphi) | Integre o WhatsApp Web a aplicações Delphi e Lazarus. | Integrar código desktop Delphi ou Lazarus. |

## Apoie o projeto

A WPPConnect é mantida por uma comunidade de código aberto. Seu apoio ajuda a financiar a manutenção, a infraestrutura, a documentação e o trabalho das pessoas que desenvolvem o ecossistema.

Se a WPPConnect ajuda seu projeto ou sua empresa, considere fazer uma contribuição pontual ou apoiar de forma recorrente.

**[Apoie a WPPConnect no Open Collective](https://opencollective.com/wppconnect)**

As contribuições são voluntárias. Consulte a página oficial para acompanhar as informações financeiras atuais. Você também pode ajudar com código, testes, documentação, traduções e relatos de problemas bem descritos.

Beneficiários oficiais adicionais em [.github/FUNDING.yml](.github/FUNDING.yml): [joaosouz4dev](https://github.com/sponsors/joaosouz4dev), [manfe](https://github.com/sponsors/manfe).

## Como contribuir

Contribuições de código, testes, exemplos, documentação e traduções são bem-vindas. Para mudanças maiores, discuta a proposta em uma issue primeiro. Ao relatar um problema, informe as versões do projeto/runtime, uma reprodução mínima e logs sem dados sensíveis. Atualize `README.md` e `README.pt-BR.md` na mesma alteração quando mudar instalação, configuração, funcionalidades, exemplos, licença ou arrecadação.

Após instalar as dependências de desenvolvimento, use as verificações pertinentes à sua alteração:

```sh
npm run typecheck
npm run test:dependencies
npm run test:dev
npm run build
```

Exemplos e testes que dependem de conta exigem validação separada com uma conta de teste autorizada. Nunca anexe credenciais ou arquivos de sessão a uma issue.

## Comunidade e suporte

Use as [issues do repositório](https://github.com/wppconnect-team/wppconnect-team.github.io/issues) para bugs reproduzíveis e propostas de funcionalidades. Para dúvidas de uso, participe pelos canais oficiais:

- [Discord](https://discord.gg/JU5JGGKGNG)
- [Telegram](https://t.me/wppconnect)
- [YouTube](https://www.youtube.com/c/wppconnect)

Este projeto é independente e não é afiliado nem endossado pelo WhatsApp ou pela Meta. Siga os termos aplicáveis e obtenha autorização para operações de conta e mensagens.

## Licença

Não foi encontrado arquivo de licença geral ou declaração de licença nos fontes revisados. Os mantenedores precisam confirmar os termos antes da redistribuição. Esta documentação não escolhe nem concede uma licença. Documentos jurídicos de terceiros continuam aplicáveis aos respectivos componentes.
