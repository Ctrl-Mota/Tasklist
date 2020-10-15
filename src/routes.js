import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import AuthMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//Todas as rotas abaixo desse middleware serão verificadas
routes.use(AuthMiddleware);

routes.put('/users', AuthMiddleware, UserController.update);



export default routes;