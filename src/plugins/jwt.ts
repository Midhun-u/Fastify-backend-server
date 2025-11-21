import fastifyJwt from "@fastify/jwt";
import fastifyPlugin from "fastify-plugin";
import type { ENV } from "../types/env.js";

//Plugin for JWT
export const jwtPlugin = fastifyPlugin((fastify) => {

    const JWT_SECRET = fastify.getEnvs<ENV>().JWT_SECRET
    if(!JWT_SECRET) throw new Error(`JWT secret is missing`)

    fastify.register(fastifyJwt , {
        secret: JWT_SECRET,
    })

})