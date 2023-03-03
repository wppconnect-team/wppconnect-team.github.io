---
title: Frequently Asked Questions
sidebar_position: 99
---

### Erro: Could Not Load SSL Library

Se você utiliza Delphi pode se deparar com o erro "Could Not Load SSL Library".

O erro **Could Not Load SSL Library** ocorre ao utilizar os componentes Indy(TIdHttp) existe uma incompatibilidade das dlls **libeay32.dll** e **ssleay32.dll** ou ausência das dll em questão. Dessa forma não é possível criar um canal de comunicação seguro SSL.

Para solucionar o erro **Could Not Load SSL Library** é necessário obter as dll’s **libeay32.dll** e **ssleay32.dll** conforme a versão do sistema operacional utilizado pela aplicação, através dos links abaixo.

- Fonte OpenSSL: https://indy.fulgan.com/SSL/
- Procure o arquivo conforme a versão de compilação do seu projeto e/ou sistema operacional, e faça download.
- Após realizar o download, você deverá inseri-las no diretório do executável da aplicação.
