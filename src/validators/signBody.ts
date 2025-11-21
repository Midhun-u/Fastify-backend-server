import type { FastifyReply, FastifyRequest } from "fastify";

//Validator for checking body of request object of sign route
export const signBodyValidator = {
    schema: {
        type: "object",
        body: {
            type: "object",
            properties: {
                fullname: {type: 'string'},
                email: {type: 'string'},
                password: {type: 'string'}
            }
        },
    },
    errorHandler(error: Error , request: FastifyRequest, replay: FastifyReply){
        console.log(error)
        replay.status(400)
        return {success: false , error: "Invalid body" , statusCode: 400}
    }
}