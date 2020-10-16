import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import UserController from "./app/controllers/UserController";
import AuthMiddleware from "./app/middlewares/auth";
import TaskController from "./app/controllers/TaskController";

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

//Todas as rotas abaixo desse middleware serão verificadas
routes.use(AuthMiddleware);

routes.put('/users',  UserController.update);


routes.get('/tasks', TaskController.index)
routes.post('/tasks', TaskController.store)
routes.put('/tasks/:task_id', TaskController.check)
routes.delete('/tasks/:task_id', TaskController.delete)





export default routes;