import type { ObjectId } from "@fastify/mongodb";
import type { FastifyReply } from "fastify";

//Function for generate jwt token
export const generateToken = async (reply: FastifyReply, id: string | ObjectId, fullname: string) => {

    const payload = {
        id: id,
        fullname: fullname
    }
    const token = await reply.jwtSign(payload)
    reply.header("authorization" , token)
    
    return token

}