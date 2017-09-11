# Breakfast-Club with Redux and GraphQL
Team Empty String's [Breakfast Club](https://github.com/kearobi/Breakfast-Club) app with Redux and GraphQL implementations. Deployed to [Heroku](https://breakfast-club-graphql-redux.herokuapp.com/).


### Local Installation
---
Start by cloning and entering the project repo:

```
git clone https://github.com/kearobi/Breakfast-Club.git
cd Breakfast-Club
```

Once you've downloaded the project, install dependencies:

```
yarn install
cd ../client
yarn install
```

You will then need to create a config.json file in the server/config directory, copy the contents of config.example.json into it,
and edit the username and password to match your local postgres account


### Create, Format, and Seed Database
---

Once signed into postgres with the postgres cli (psql -U username), enter the following command:

```
CREATE DATABASE "bc_dev";
```

Then navigate to the root of the server directory and run the following sequelize commands:

```
sequelize db:migrate
sequelize db:seed:all
```


### Launch Application
---

To start the application you will need two terminal sessions. Navigate each to the root directory of the project. Use the first to start the express app:

```
cd server
nodemon app.js
```

Use the second terminal session to start the React app:

```
cd client
yarn start
```


### Reformat and Reseed Database
---

 If you already have a local bc_dev database then login to postgres using the cli and run the following commands:

```
\c bc_dev
DROP TABLE "Messages", "Users", "Bevents", "Places", "GuestLists", "Messages", "SequelizeMeta" CASCADE;
```

Then quit postgres (\q) and run the two sequelize commands in the server directory:

```
sequelize db:migrate
sequelize db:seed:all
```


### Automated Testing
Client components and graphQL queries/mutations can be tested via jest with the following script:
```
npm run test
```
Alternatively you can globally install the jest cli (```npm install -g jest-cli```) and the ```jest``` command will run all ```.test.js``` files from any directory
