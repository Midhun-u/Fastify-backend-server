import type { FastifyInstance } from "fastify";
import { TodoController } from "./todo.controller.js";
import { todoValidator } from "../../validators/todoBody.js";
import { authMiddleware } from "../../middlewares/auth.js";

//Todo router
export const todoRouter = (fastify: FastifyInstance) => {

    fastify.post("/add-todo" , todoValidator , TodoController.addTodo)
    fastify.get("/get-todos" , {preHandler: [authMiddleware]} ,TodoController.getTodos)
    fastify.put("/update-todo/:todoId" , {preHandler: [authMiddleware]} , TodoController.updateTodo)
    fastify.delete("/delete-todo/:todoId" , {preHandler: [authMiddleware]} , TodoController.deleteTodo)

}