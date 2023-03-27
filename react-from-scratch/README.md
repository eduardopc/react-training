### Glossário

1. Babel: Irá realizar a transpilação do código (Responsável por transformar o código JS escrito em ambiente de desenvolvimento em um código compreensível para os navegadores em geral)

2. JSX: Códigos HTML dentro do JS

### Passo a passo

1. Inicializar o projeto

```
yarn init -y
```

2. Instalando Babel dependencies

```
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/cli
```

3. Criar o arquivo .babelrc na raiz do projeto

4. Build via Babel

```
yarn babel src -d build
```

5. Criar um arquivo index.html dentro da pasta public (VSCode shortcut: html:5)

6. Instalar as dependencias para um projeto React

```
yarn add react@^17.0.2 react-dom@^17.0.2
```

7. Instalando o webpack e os seus respectivos loaders

```
yarn add -D webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin

yarn add babel-loader css-loader style-loader
```

8. Criar o arquivo webpack.config.js na raiz do projeto
