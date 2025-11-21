import fastifyCors from "@fastify/cors";
import fastifyPlugin from "fastify-plugin";
import type { ENV } from "../types/env.js";

//Plugin for CORS
export const corsPlugin = fastifyPlugin((fastify) => {

    const CLIENT_URL = fastify.getEnvs<ENV>().CLIENT_URL
    
    fastify.register(fastifyCors, {
        origin: CLIENT_URL,
        methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
        credentials: true
    })
})