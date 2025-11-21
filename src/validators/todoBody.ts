import type { FastifyReply, FastifyRequest } from "fastify";
import { authMiddleware } from "../middlewares/auth.js";

//Validator for checking body of request object of todo route
export const todoValidator = {
    schema: {
        type: "object",
        body: {
            type: "object",
            properties: {
                task: {type: "string"}
            }
        }
    },
    preHandler: [authMiddleware],
    errorHandler(error: Error, request: FastifyRequest, reply: FastifyReply){

        reply.status(400)
        return {success: false, error: "Invalid body" , statusCode: 400}

    }
}