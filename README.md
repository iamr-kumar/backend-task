# Backend Task

### Task given by Pet Perfect

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)

## About <a name = "about"></a>

This project is made as part of task given by Pet Perfect. A RESTful API is created using Node.js, Express and MongoDb with basic CRUD functionalities.
The list of all the requirements can be found [here](https://docs.google.com/document/d/1F-Gpp_SeJ2NvpQ8sCCQ_8AEVMW3sHfQThyCMUVjV9ZQ/edit)

The code is well structured and highly scalable. The architecture for each request is divided into 4 parts:

- Route Handler
- Controllers
- Services
- Repository

Route Handler just defines the request routes and calls in the appropriate controller.

Controllers provide any required pre-processing or input data validation and the passes the data to the required service.

Services contains the buisness logic for the request. Checking for existing users, creating auth tokens and such logic are handled by the services.

Repository deals directly with the database and only contains database access related code. Due to this layered architecture, even the database can be later changed if required from a NoSQL to SQL or vice-versa whithout ever touching any of the other 3 layers.

### Architecture
![Screenshot 2022-11-13 152257](https://user-images.githubusercontent.com/58480195/201516029-3b0f93f8-4786-43c0-8a06-703b913437f6.png)

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```
Node.js 17.0 or higher
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the project

```
git clone [project-link]
```

Copy the .env file into the root directory, or create your own .env file with the following variables

- PORT
- MONGO_URI
- JWT_SECRET
- JWT_EXPIRES_IN

Navigate to the project directory in a terminal and run the following commands

```
yarn
```

To start the server in localhost:3000, run the following command

```
yarn dev
```

Some pre generated fake data appears on the terminal after application successfully starts.
Use these details to send requests.

Click the following button to run the collection in your Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12753439-f31e36c2-af87-41ff-ba21-a2cb89beac65?action=collection%2Ffork&collection-url=entityId%3D12753439-f31e36c2-af87-41ff-ba21-a2cb89beac65%26entityType%3Dcollection%26workspaceId%3De605e655-1a41-450f-a45d-2ec0f8f49380#?env%5BPet%20Perfect%20Task%5D=W3sia2V5IjoiYXV0aC10b2tlbiIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
