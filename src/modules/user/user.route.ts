import type { FastifyInstance } from "fastify";
import { UserController } from "./user.controller.js";
import { signBodyValidator } from "../../validators/signBody.js";
import { loginBodyValidator } from "../../validators/loginBody.js";

//User routes
export const userRoutes = (fastify: FastifyInstance) => {

    fastify.post("/sign", signBodyValidator ,UserController.sign)
    fastify.post("/login" , loginBodyValidator , UserController.login)

}