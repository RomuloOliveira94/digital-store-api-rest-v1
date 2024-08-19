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

<h3>User Routes</h3>

<h3>GET api/user/register</h3>

**REQUEST**

```json
{
  "firstname": "teste",
  "surname": "teste",
  "email": "test@test.com"
}
```

**RESPONSE**

```json
{
  "firstname": "teste",
  "surname": "teste",
  "email": "test@test.com"
}
```

<h3>POST api/user/token</h3>

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

<h3>GET api/user</h3>

**RESPONSE**

```json
[
  {
    "id": 1,
    "firstname": "teste2",
    "surname": "teste2",
    "email": "user2@mail.com"
  },
  {
    "id": 3,
    "firstname": "teste4",
    "surname": "teste4",
    "email": "user4@mail.com"
  },
  {
    "id": 4,
    "firstname": "mudei carai",
    "surname": "teste4",
    "email": "user4@mail.com"
  },
  {
    "id": 5,
    "firstname": "teste4",
    "surname": "teste4",
    "email": "user4@mail.com"
  }
]
```

<h3>GET api/user/1</h3>

**RESPONSE**

```json
{
  "firstname": "teste",
  "surname": "teste",
  "email": "test@test.com"
}
```

<h3>PUT api/user/1</h3>

**REQUEST**

```json
{
   "firstname": "teste2",
  "password: "112233"
}
```

**RESPONSE**

```json
{
  "firstname": "teste2",
  "surname": "teste",
  "email": "test@test.com"
}
```

<h3>DELETE api/user/1</h3>

**RESPONSE**

```json
{
  "message": "Usuário deletado com sucesso"
}
```

<h3>Product Routes</h3>

<h3>GET /api/product/search</h3>

<h4>Params:</h4>

<ul>
  <li>limit (int)</li>
  <li>page (int)</li>
  <li>fields (string)</li>
  <li>match (string)</li>
  <li>category_ids (string)</li>
  <li>price_range (string)</li>
  <li>option (string)</li>
</ul>

**REQUEST**

/api/product/search?limit=-1&page=1&fields=name&match=produto1&price_range=0-100&category_ids=1,2&option=GG,PP

**RESPONSE**

```json
{
  "data": [
    {
      "name": "Produto 01",
      "categories": [
        {
          "id": 1,
          "name": "teste 1",
          "slug": "teste-1",
          "use_in_menu": false,
          "createdAt": "2024-08-18T23:22:45.453Z",
          "updatedAt": "2024-08-18T23:22:45.453Z",
          "category_product": {
            "createdAt": "2024-08-18T23:34:02.304Z",
            "updatedAt": "2024-08-18T23:34:02.304Z",
            "productId": 10,
            "categoryId": 1
          }
        }...
      ],
      "images": [
        {
          "id": 11,
          "enabled": false,
          "url": "base64 da imagem 2",
          "createdAt": "2024-08-18T23:34:02.278Z",
          "updatedAt": "2024-08-18T23:34:02.278Z",
          "productId": 10
        }...
      ],
      "product_options": [
        {
          "id": 1,
          "title": "Cor",
          "shape": "square",
          "radius": "4px",
          "type": "text",
          "values": "PP, GG, M",
          "createdAt": "2024-08-18T23:34:02.279Z",
          "updatedAt": "2024-08-18T23:34:02.279Z",
          "productId": 10
        }
      ]
    },
    ...
  ],
  "limit": "-1",
  "page": "1",
  "total": 2
}
```

<h3>GET /api/product/1</h3>

**RESPONSE**

```json
{
  "id": 7,
  "enabled": true,
  "name": "Produto 01",
  "slug": "produto-01",
  "use_in_menu": false,
  "stock": 10,
  "description": "Descrição do produto 01",
  "price": 120,
  "price_with_discount": 99.9,
  "createdAt": "2024-08-18T23:31:23.898Z",
  "updatedAt": "2024-08-18T23:31:23.898Z",
  "categories": [
    {
      "id": 1,
      "name": "teste 1",
      "slug": "teste-1",
      "use_in_menu": false,
      "createdAt": "2024-08-18T23:22:45.453Z",
      "updatedAt": "2024-08-18T23:22:45.453Z",
      "category_product": {
        "createdAt": "2024-08-18T23:31:23.928Z",
        "updatedAt": "2024-08-18T23:31:23.928Z",
        "productId": 7,
        "categoryId": 1
      }
    },
    {
      "id": 2,
      "name": "teste 2",
      "slug": "teste-2",
      "use_in_menu": true,
      "createdAt": "2024-08-18T23:22:47.543Z",
      "updatedAt": "2024-08-18T23:22:47.543Z",
      "category_product": {
        "createdAt": "2024-08-18T23:31:23.928Z",
        "updatedAt": "2024-08-18T23:31:23.928Z",
        "productId": 7,
        "categoryId": 2
      }
    }
  ],
  "images": [
    {
      "id": 2,
      "enabled": false,
      "url": "base64 da imagem 2",
      "createdAt": "2024-08-18T23:31:23.910Z",
      "updatedAt": "2024-08-18T23:31:23.910Z",
      "productId": 7
    },
    {
      "id": 3,
      "enabled": false,
      "url": "base64 da imagem 3",
      "createdAt": "2024-08-18T23:31:23.910Z",
      "updatedAt": "2024-08-18T23:31:23.910Z",
      "productId": 7
    },
    {
      "id": 1,
      "enabled": true,
      "url": "base64 da imagem 1",
      "createdAt": "2024-08-18T23:31:23.910Z",
      "updatedAt": "2024-08-18T23:31:23.910Z",
      "productId": 7
    }
  ],
  "product_options": []
}
```

<h3>POST /api/product</h3>

**REQUEST**

```json
{
    "enabled": true,
    "name": "Produto 01",
    "slug": "produto-01",
    "stock": 10,
    "description": "Descrição do produto 01",
    "price": 119.90,
    "price_with_discount": 99.90,
    "categories": [1,2],
    "images": [ 
      {
        "enabled": true,
        "url": "base64 da imagem 1" 
      },
      {
        "enabled": false,
        "url": "base64 da imagem 2" 
      },
      {
        "enabled": false,
        "url": "base64 da imagem 3" 
      }
    ],
    "product_options": [
      {
        "title": "Cor",
        "shape": "square",
        "radius": "4px",
        "type": "text",
        "values": "PP, GG, M"
      },
      {
        "title": "Tamanho",
        "shape": "circle",
        "type": "color",
        "values": "#000, #333"
      }
    ]
  }
```

**RESPONSE**

```json
{
  "id": 7,
  "enabled": true,
  "name": "Produto 01",
  "slug": "produto-01",
  "use_in_menu": false,
  "stock": 10,
  "description": "Descrição do produto 01",
  "price": 120,
  "price_with_discount": 99.9,
  "createdAt": "2024-08-18T23:31:23.898Z",
  "updatedAt": "2024-08-18T23:31:23.898Z",
  "categories": [
    {
      "id": 1,
      "name": "teste 1",
      "slug": "teste-1",
      "use_in_menu": false,
      "createdAt": "2024-08-18T23:22:45.453Z",
      "updatedAt": "2024-08-18T23:22:45.453Z",
      "category_product": {
        "createdAt": "2024-08-18T23:31:23.928Z",
        "updatedAt": "2024-08-18T23:31:23.928Z",
        "productId": 7,
        "categoryId": 1
      }
    },
    {
      "id": 2,
      "name": "teste 2",
      "slug": "teste-2",
      "use_in_menu": true,
      "createdAt": "2024-08-18T23:22:47.543Z",
      "updatedAt": "2024-08-18T23:22:47.543Z",
      "category_product": {
        "createdAt": "2024-08-18T23:31:23.928Z",
        "updatedAt": "2024-08-18T23:31:23.928Z",
        "productId": 7,
        "categoryId": 2
      }
    }
  ],
  "images": [
    {
      "id": 2,
      "enabled": false,
      "url": "base64 da imagem 2",
      "createdAt": "2024-08-18T23:31:23.910Z",
      "updatedAt": "2024-08-18T23:31:23.910Z",
      "productId": 7
    },
    {
      "id": 3,
      "enabled": false,
      "url": "base64 da imagem 3",
      "createdAt": "2024-08-18T23:31:23.910Z",
      "updatedAt": "2024-08-18T23:31:23.910Z",
      "productId": 7
    },
    {
      "id": 1,
      "enabled": true,
      "url": "base64 da imagem 1",
      "createdAt": "2024-08-18T23:31:23.910Z",
      "updatedAt": "2024-08-18T23:31:23.910Z",
      "productId": 7
    }
  ],
  "product_options": []
}
```

<h3>PUT /api/product/1</h3>

**REQUEST**

```json
{
    "enabled": true,
    "name": "Produto 3",
    "slug": "produto-03",
  }
```

**RESPONSE**

```json
{
  "id": 1,
  "enabled": true,
  "name": "Produto 3",
  "slug": "produto-03",
  "use_in_menu": false,
  "stock": 10,
  "description": "Descrição do produto 01",
  "price": 20,
  "price_with_discount": 99.9,
  "createdAt": "2024-08-18T23:18:56.176Z",
  "updatedAt": "2024-08-19T16:13:24.184Z"
}
```

<h3>DELETE /api/product/1</h3>

```json
{ "message": "Produto deletado com sucesso" }
```

<h3>Category Routes</h3>

<h3>GET /api/category/search</h3>

<h4>Params:</h4>

<ul>
  <li>limit (int)</li>
  <li>page (int)</li>
  <li>fields (string)</li>
  <li>use_in_menu (boolean)</li>
</ul>

**REQUEST**

/api/category/search?limit=3&page=1&fields=name

**RESPONSE**

```json
{
  "data": [
    {
      "name": "teste 1"
    },
    {
      "name": "teste 2"
    },
    {
      "name": "teste 3"
    }
  ],
  "limit": "3",
  "page": "1",
  "total": 3
}
```

<h3>GET /api/category/1</h3>

**RESPONSE**

```json
{
  "id": 1,
  "name": "teste 1",
  "slug": "teste-1",
  "use_in_menu": true,
  "createdAt": "2024-08-18T23:22:45.453Z",
  "updatedAt": "2024-08-18T23:22:45.453Z"
}
```

<h3>POST /api/category</h3>

**REQUEST**

```json
{
  "id": 6,
  "name": "teste 5",
  "slug": "teste-5",
  "use_in_menu": true
}
```

**RESPONSE**

````json
{
  "id": 6,
  "name": "teste 5",
  "slug": "teste-5",
  "use_in_menu": true,
  "updatedAt": "2024-08-19T14:10:46.514Z",
  "createdAt": "2024-08-19T14:10:46.514Z"
}
```

<h3>PUT /api/category/1</h3>

**REQUEST**

```json
{
  "id": 6,
  "name": "teste 5.1",
  "slug": "teste-5",
  "use_in_menu": false
}
```

**RESPONSE**

```json
{
  "id": 6,
  "name": "teste 5.1",
  "slug": "teste-5",
  "use_in_menu": false,
  "updatedAt": "2024-08-19T14:10:46.514Z",
  "createdAt": "2024-08-19T14:10:46.514Z"
}
```

<h3>DELETE /api/category/1</h3>

```json
{ "message": "Categoria deletada com sucesso" }
```
`````
