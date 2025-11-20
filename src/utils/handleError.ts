import type { FastifyReply } from "fastify";

//Function for handling error
export const handleError = (reply: FastifyReply, error: string) => {

    console.log(error)
    reply.status(500)
    return {success: false, error: "Server error", statusCode: 500}

}