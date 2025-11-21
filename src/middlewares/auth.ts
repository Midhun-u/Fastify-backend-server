import type { FastifyReply, FastifyRequest } from "fastify";

//Authentication middleware
export const authMiddleware = (request: FastifyRequest, reply: FastifyReply, done: Function) => {

    const token = request.headers.authorization
    
    if (!token) {
        reply.status(401)
        reply.send({ success: false, error: "Unauthorized user", statusCode: 401 })
        return
    }

    request.jwtVerify().then(payload => payload)
    .then(() => {
        done()
    })
    .catch((error) => {
        reply.status(401)
        reply.send({ success: false, error: "Unauthorized user", statusCode: 401 })
    })

}