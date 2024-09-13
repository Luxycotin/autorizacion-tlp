import { Router } from "express";
import { getAllTodosCtrl } from "../controllers/todos.controllers.js";
import  { createTodosCtrl } from "../controllers/todos.controllers.js";

import validarJwt from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validarJwt, getAllTodosCtrl);
todosRouter.post("/, validarJwt, createTodosCtrl");
export { todosRouter };
