import type { FastifyInstance } from "fastify";
import { UserController } from "./user.controller.js";
import { userBodyValidator } from "../../validators/userBody.js";

//User routes
export const userRoutes = (fastify: FastifyInstance) => {

    fastify.post("/add-user", userBodyValidator ,UserController.addUser)

}