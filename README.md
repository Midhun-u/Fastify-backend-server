# Fastify Todo Backend Server

It is a todo list backend project build using fastify web framework of Node js (for creating server side application). This project is todo list application where user can creates account then add and manage their todos as they want.

* Features

    - User can sign and login using their email and password
    - User can create, update and delete their todos
    - Implemented JWT(Json Web Token) authentication
    - Implemented multistage containerization using Docker

* Technologies

    - Node js 
    - Fastify
    - Mongoose
    - MongoDB
    - Typescript
    - Git && Github
    - Docker

# Project Installation

 * Requirements

    - Node js && npm
    - Mongodb
    - Git
    - Docker (optional unless don't want to run container)
 
 * Installation

    - git clone https://github.com/Midhun-u/Fastify-backend-server.git
    - cd Fastify-backend-server
    - npm install
    - npm run production

 * For Running Docker container (optional)
  
   - sudo docker build -t app ./
   - sudo docker --network host run app
