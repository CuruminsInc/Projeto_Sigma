# Welcome to the project Project Sigma👋

## Let's start run the project

Before we begin, you will need to have Node.js and Android SKD installed on your machine, have an Apache server running, have the Expo application installed at your smartphone or on your virtual device and a SQL database manager

1. Install dependencies

```bash
npm install
```

2. Install dependencies on the api folder and start the database
   
```bash

cd api
npm install
npx sequelize-cli db:create

```

2.1 Install the migrations in this exact order without using migrations:all
   
```bash
npx sequelize-cli db:migrate --name 20241130152604-create-client.js
npx sequelize-cli db:migrate --name 20241130152612-create-seller.js
npx sequelize-cli db:migrate --name 20241130152620-create-vehicle.js
npx sequelize-cli db:migrate --name 20241130152648-create-manufacturer.js
npx sequelize-cli db:migrate --name 20241130152628-create-operation-buy.js
npx sequelize-cli db:migrate --name 20241130152637-create-operation-sell.js
npx sequelize-cli db:migrate --name 20241130152643-create-operation-order.js
```

2.2 Install the seeders in this exact order without using seeder:all
   
```bash
npx sequelize-cli db:seed --seed 20241130165446-demo-client.js
npx sequelize-cli db:seed --seed 20241130165451-demo-manufacturer.js
npx sequelize-cli db:seed --seed 20241130165516-demo-seller.js
npx sequelize-cli db:seed --seed 20241130165522-demo-vehicle.js
npx sequelize-cli db:seed --seed 20241130165455-demo-operationbuy.js
npx sequelize-cli db:seed --seed 20241130165512-demo-operationsell.js
npx sequelize-cli db:seed --seed 20241130165507-demo-operationorder.js
```

3. Got to the env.js and put your local ip on the "API_BASE_URL"

```bash
cd api/config
```

4. Start the api 

```bash
npm start
```

5. Start the app

```bash
npx expo start
```

After all these steps and you start running the app. That's it, enjoy the app now


## Expo Playstore: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&pli=1

## Laragon: https://laragon.org/download/  ( Whith the laragon you can use te apache sever and the heidisql ) 

## Android Studio: https://developer.android.com/studio?hl=pt-br
