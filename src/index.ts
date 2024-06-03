import "reflect-metadata";
import { Container } from "typedi";
import { AppDataSource } from "./db/Data-Source";
import { App } from "./App";
import "./middlewares/AppMiddleware";
import { useExpressServer } from "routing-controllers";
import { useContainer } from "routing-controllers";

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception", err);
  process.exit(1);
});

//This is important to set container in routing-controllers before even importing controllers as written in routing-controllers documentation.
useContainer(Container);

import { HomeController } from "./controllers/HomeController";
import { ProductsController } from "./controllers/ProductsController";
import { CustomersController } from "./controllers/CustomersController";
import "./interceptors/AppInterceptor";

AppDataSource.initialize()
  .then(() => {
    //Start the app server ONLY if the DB connection is successfull
    useExpressServer(App.app, {
      controllers: [HomeController, ProductsController, CustomersController],
    });
    App.startServer();
  })
  .catch((error) => console.log(error));
