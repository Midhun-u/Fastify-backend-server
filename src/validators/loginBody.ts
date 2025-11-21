import type { FastifyReply, FastifyRequest } from "fastify";

//Validator for checking body of request object of login route
export const loginBodyValidator = {
    schema: {
        type: "object",
        body: {
            type: "object",
            properties: {
                email: {type: 'string'},
                password: {type: 'string'}
            }
        },
    },
    errorHandler(error: Error , request: FastifyRequest, replay: FastifyReply){
        replay.status(400)
        return {success: false , error: "Invalid body" , statusCode: 400}
    }
}