<p align="center">
   <img src="https://github.com/AfonsoMachado/proffy-nlw/blob/master/proffy-web/src/assets/images/landing.svg" alt="Turma" width="400"/>   
</p>
<p align="center">
   <img src="https://github.com/AfonsoMachado/proffy-nlw/blob/master/proffy-web/src/assets/images/logo2.png" alt="Logo" width="200"/>   
</p>

<p align="center">:rocket: Projeto implementado durante o evento Next Level Week, organizado pela <a href="https://rocketseat.com.br/">Rocketseat</a>, com o objetivo de durante uma semana desenvolver um projeto completo aplicando conceitos e ferramentas usados no mercado atualmente.</p>

<p align="center">O Proffy é uma plataforma de estudos online que visa conectar professores a alunos.</p>

<p align="center">
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#fire-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark-layout">Licença</a>
</p>

<!--
# Índice

- [Tecnologias](#tecnologias)
- [Relevante](#relevante)
- [Como Usar](#como-usar)

<a id="tecnologias"></a>
-->

## :computer: Tecnologias
<ul>
 <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://reactjs.org/">ReactJS</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://expressjs.com/en/api.html#express">Express</a></li>
  <li><a href="http://knexjs.org/">Knex</a></li>
  <li><a href="https://github.com/axios/axios">Axios</a></li>
  <li><a href="https://expressjs.com/en/resources/middleware/cors.html">Cors</a></li>
  <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>

</ul>

## :fire: Instalação

É necessário ter um ambiente NodeJS ou Yarn instalado em sua máquina

### Clonando o repositório:

```
$ git clone https://github.com/AfonsoMachado/proffy-nlw.git
```

### Executando back-end

```bash
# Go to server folder
$ cd proffy-server

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Executando em http://localhost:3333/

#### Criando banco de dados 

```bash
# Go to server folder
$ cd proffy-server

# Run Migrations
$ yarn knex:migrate
```

### Executando front-end web

```bash
# Go to web folder
$ cd proffy-web

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Executando em http://localhost:3000/ .

### Executando aplicação mobile

Necesário um smartphone com Android ou iOS, com o aplicativo Expo ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/br/app/expo-client/id982107779)) instalado, ou um emulador rodando uma máquina virtual Android/iOS

```bash
# Go to mobile folder
$ cd proffy-mobile

# Install Dependencies
$ yarn install

# Run Aplication
$ yarn start
```
Após a execução, leia o QRCode usando o aplicativo Expo em seu smartphone

#### Conectando aplicação mobile com o back-end

```bash
# Go to services folder
$ cd proffy-mobile/src/services/api.ts
```
Editar o arquivo 'api.ts' inserindo a URL indicada no expo junto com a porta do backend.

Caso esteja usando um emulador de android, executar o seguinte comando no seu terminal:

```bash
$ adb reverse tcp:3333 tcp:3333
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## :bookmark: Layout

Você pode visualizar o layout do projeto web por meio [desse link](https://www.figma.com/file/Cn5Y0uxI1SIb9yMx7lD8tt/Proffy-Web-Copy) e o layout do projeto mobile por meio desse [outro link](https://www.figma.com/file/5OQbcq9tQpCm8HQ7ZF4NVt/Proffy-Mobile-Copy). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

---

<p align="center">Feito com 💜 por <strong><a href="https://www.linkedin.com/in/AfonsoMachado/">Afonso Machado</a> 🥰 </strong> </p>
