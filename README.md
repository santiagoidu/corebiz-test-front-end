<h1 align="center">Teste Front-End Corebiz</h1>

O intuito desse projeto é fazer a página inicial de um e-commerce consumindo uma api fornecida
pela própria Corebiz, para trazer o seus produtos. Outro foco importante é as sua newslatter
onde será feito um post das informações preenchidas na NewsLatter para uma API também fornecida
pela Corebiz.

## Instalação

Execute o comando:
```bash
$ yarn install
```
ou simplesmente:
```bash
$ yarn
```

### Executando a Aplicação

```bash
$ yarn start
```

Iniciará o projeto em ambiente de Desenvolvimento.

Abra [http://localhost:3000](http://localhost:3000)

## Padronização de Código

- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

Para rodar o ESLint e Prettier em todo o projeto, basta executar:

Eslint:
```bash
$ yarn lint
```

Prettier:
```bash
$ yarn format
```

### VS Code

Para que o VSCode faça a formatação do código de forma automática ao salvar o arquivo. É necessário instalar as extensões:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Em seguida, abrir o `settings.json`, use *ctrl + shift + P* e procure por: `Preferences: Open Settings (JSON)`, então, adicione as seguintes configurações:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
"[javascript]" : {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
},
```
