import type { FastifyInstance } from "fastify";
import { UserController } from "./user.controller.js";
import { signBodyValidator } from "../../validators/signBody.js";
import { loginBodyValidator } from "../../validators/loginBody.js";
import { authMiddleware } from "../../middlewares/auth.js";

//User router
export const userRouter = (fastify: FastifyInstance) => {

    fastify.post("/sign", signBodyValidator ,UserController.sign)
    fastify.post("/login" , loginBodyValidator , UserController.login)
    fastify.post("/logout" , UserController.logout)
    fastify.get("/get-user" , {preHandler : [authMiddleware]} , UserController.getUser)

}