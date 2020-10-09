import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get('/create',async (req, res)=>{
const user = await User.create({
    name: 'lucas',
    email: 'lucas@gmail.com',
    password_hash:'123456',
})

  return res.json(user);
})

export default routes;