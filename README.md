# Trybers And Dragons

<!-- Por que isso é importante?
Este projeto ajudará você a expandir e sedimentar seus conhecimentos sobre os pilares da Programação Orientada a Objetos e aos princípios SOLID. Ambos os temas são amplamente populares no mundo do desenvolvimento e irão auxiliar você não só na forma de organizar código, mas também na forma de pensar e escrever códigos mais legíveis, seguros e escaláveis.

Compreender e aplicar esses conceitos fará diferença na sua vida como pessoa programadora, especialmente na escrita de códigos de melhor qualidade e criação de aplicações de software mais fáceis de se compreender e manter ao longo do tempo, habilidades muito bem vistas no mercado de trabalho.

O que vamos avaliar?
O conhecimento dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo.

A habilidade de criar e utilizar Interface;

A habilidade de utilizar Composição;

Implementar, em TypeScript, Classes, Instâncias, Atributos, Métodos e Objetos;

O conhecimento e aplicação dos princípios SOLID.

O que devo desenvolver?
Você entrará no mundo de Trybers and Dragons, entendendo e construindo raças, arquétipos, personagens e muito mais, tudo através da aplicação de seus conhecimentos de POO e SOLID. ⚔️ 🐲

 -->

<!--

<strong>OBS:</strong> ESSE PROJETO FOI DESENVOLVIDO NA TRYBE.

## Técnologias usadas
* Typescript;
* Node;
* Express;
* Sequelize;
* Json web tokens;
* DotEnv;
* Joi;
* Docker;
* MySQL;
* Jest;
* Nodemon;
* Eslint.

## Rotas, entradas e saídas

<details>
<summary>Endpoint GET /products</summary><br />
Utilizado para retornar as informações de todos os produtos que contém no banco de dados.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-products" src="/images-readme/get-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta--get-products" src="/images-readme/get-products-exemplo-saida.png">

</details>

<details>
<summary>Endpoint POST /products</summary><br />
Utilizado para cadastrar produtos no banco de dados. Para isso, o banco de dados exige que o usuário insira um nome e a quantidade de ouros do produto.

##### Informações necessárias:
* <strong>name:</strong> É o nome do produto. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>amount:</strong> É a quantidade de ouros do produto. Deve ser enviado como string e o mínimo de caracters é 2. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-products" src="/images-readme/post-products-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-products" src="/images-readme/post-products-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Ambas possuem retornos diferentes.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "\"name\" is not allowed to be empty"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"name\" is required"
}
```

</details>

<details>
<summary>Endpoint POST /users</summary><br />
Utilizado para criar um novo usuário. Para isso, necessita de um username, classe, level e senha. Após, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>username:</strong> É o nome de usuário. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>classe:</strong> É a classe do usuário. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>level:</strong> É o level do usuário. Deve ser enviado como number e mínimo ser acima de 1. É obrigatório. 
* <strong>password:</strong> É a senha do usuário. Deve ser enviado como string e deve conter no mínimo 8 caracter. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-users" src="/images-readme/post-users-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-users" src="/images-readme/post-users-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "\"classe\" is not allowed to be empty"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"username\" is required"
}
```

</details>

<details>
<summary>Endpoint POST /login</summary><br />
Utilizado para logar na conta. Para isso, necessita de um username e senha. Após, retornará um token caso todas as informações enviadas foram validadas corretamente.

##### Informações necessárias:
* <strong>username:</strong> É o nome de usuário. Deve ser enviado como string e o mínimo de caracters é 3. É obrigatório.
* <strong>password:</strong> É a senha do usuário. Deve ser enviado como string e deve conter no mínimo 8 caracter. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-login" src="/images-readme/post-login-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saída-correta-post-login" src="/images-readme/post-login-exemplo-saida.png">

#### Inserindo informações incorretas
Existem dois cenários onde a saída acima pode não ser retornada: caso não preencha os requisitos necessários(explicados nas Informações Necessárias acima) e caso falte alguma das informações obrigatórias. Cada um deles terá uma mensagem diferente avisando o motivo de estar incorreta.

<strong>Exemplo caso não preencha os requisitos necessários:</strong>
```
{
  "message": "\"password\" is not allowed to be empty"
}
```

<strong>Exemplo caso esteja faltando alguma das informações obrigatórias</strong>
```
{
  "message": "\"username\" is required"
}
```

</details>

<details>
<summary>Endpoint GET /orders</summary><br />
Utilizado para retornar as informações das compras realizadas.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-get-orders" src="/images-readme/get-orders-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-get-orders" src="/images-readme/get-orders-exemplo-saida.png">

</details>

<details>
<summary>Endpoint POST /orders</summary><br />
Utilizado para criar uma nova compra. Para isso, necessita de um array com Ids dos produtos e de um token valido. Caso as informações estejam corretas, retornara as informações da nova compra.

##### Informações necessárias:
* <strong>productsIds:</strong> São os Ids dos produtos da compra. Deve ser enviado como um array de number e no mínimo ter 1 Id. É obrigatório.

##### Exemplo de entrada:
<img alt="imagem-exemplo-entrada-correta-post-orders" src="/images-readme/post-orders-exemplo-entrada.png">

##### Exemplo de saída:
<img alt="imagem-exemplo-saida-correta-post-orders" src="/images-readme/post-orders-exemplo-saida.png">

#### Inserindo informações incorretas
Existem quatro cenários onde a saída acima pode não ser retornada: não conter o productsIds, productsId não for um array e caso venha vazia, caso não tenha o token e um token invalido.

<strong>Exemplo caso não contenha o productsIds:</strong>
```
{
  "message": "\"productsIds\" is required"
}
```

<strong>Exemplo caso productsIds seja um array vazio:</strong>
```
{
  "message": "\"productsIds\" must include only numbers"
}
```

<strong>Exemplo caso não contenha o token:</strong>
```
{
  "message": "Token not found"
}
```

<strong>Exemplo caso o token tenha expirado ou seja inválido:</strong>
```
{
  "message": "Invalid token"
}
```

</details>

## Utilizando o docker
Para criar os containers, execute: `docker-compose up -d`

Para abrir o terminar do container, execute: `docker exec -it trybesmith bash`

## Instalando Dependências
  `npm install`

## Banco de dados
Para criar o banco de dados, execute: `npm run migration`

Para popular o banco de dados: `npm run seed`

## Aplicação Node:
Para executar a aplicação e acessar as rotas, execute: `npm run dev`
 -->


<!-- 

## Executando Testes
Para rodar todos os testes:

  `npm test`

<!-- 
Para rodar um teste específico:

  `npm test nomeDoArquivo`

exemplo:
`npm test post`


<strong>OBS:</strong> Os testes irão rodar com os testes de cobertura
 -->
