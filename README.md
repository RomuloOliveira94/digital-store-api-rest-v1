<h1 align="center" style="font-weight: bold;">Digital Store Api 💻</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a>
</p>

<p align="center">
    <b>This project is a REST API for managing products in an ecommerce store. The API manages product categories and users, and also includes authentication via jwt and route protection.</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Javascript
- Express
- NodeJS
- JsonWebToken
- Sequelize
- Sqlite

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

Here you list all prerequisites necessary for running your project. For example:

- [NodeJS](https://github.com/)
- [Git 2](https://github.com)

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/RomuloOliveira94/digital-store-api-rest-v1
```

<h3>Config .env variables</h2>

Use the `.env.example` as reference to create your configuration file `.env` 

```yaml
PORT=3000
JWT_SECRETE=example
```

<h3>Starting</h3>

```bash
cd digital-store-api-rest-v1
npm install
node --run dev or npm run dev
```

<h2 id="routes">📍 API Endpoints</h2>

<h3 id="get-auth-detail">GET /user/register</h3>

**RESPONSE**
```json
{
  
}
```

<h3 id="post-auth-detail">POST /user/token</h3>

**REQUEST**
```json
{
   "email": test@test.com,
  "password: "test123"
}
```

**RESPONSE**
```json
{
  "token": "OwoMRHsaQwyAgVoc3OXmL1JhMVUYXGGBbCTK0GBgiYitwQwjf0gVoBmkbuyy0pSi"
}
```
