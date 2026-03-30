
<h1 align="center">WebAgenda</h1>
<h3 align="center">Site de calendário - API REST para gerenciar eventos e pessoas</h3>
<h4 align="center">       
</h4>

## :hammer: Tecnologias Utilizadas

- **Backend:** Express.js, TypeScript, TypeORM, PostgreSQL
- **Frontend:** React
- **Documentação:** Swagger (OpenAPI)
- **Testes:** Jest

---

## :chart_with_upwards_trend: Funcionalidades

- `Funcionalidade 1`: CRUD de Pessoas
- `Funcionalidade 1a`: CRUD de Eventos
- `Funcionalidade 2`: Adição de pessoas à eventos
- `Funcionalidade 2a`: Pesquisa de eventos por pessoas

---

## :cd: Como rodar o projeto

### 1. Clone o repositório

```sh
git clone https://github.com/zPedroLuis/WebAgenda.git
cd WebAgenda
```

### 2. Instale as dependências

```sh
npm install
cd client
npm install
cd ..
```

### 3. Execute em modo desenvolvimento (backend + frontend juntos)

```sh
npm run dev
```
- Backend: http://localhost:2999
- Frontend: http://localhost:3000
- Swagger: http://localhost:2999/api-docs

### 4. Rodar apenas o frontend

```sh
cd client
npm start
```

### 5. Rodar apenas o backend

```sh
npm run dev:server
```

---

## :test_tube: Testes

Para rodar os testes automatizados (Jest):

```sh
npm test
```

---

## :file_folder: Estrutura de Pastas

```
WebAgenda/
    ├── client/           # Frontend React
    ├── src/              # Backend Node/TypeScript
    ├── dev-runner.js     # Script para rodar backend e frontend juntos
    ├── package.json
    ├── README.md
    └── ...
```
