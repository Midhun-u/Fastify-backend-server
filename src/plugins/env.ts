import FastifyEnv from "@fastify/env"
import fastifyPlugin from "fastify-plugin"
import { EnvOptions } from "../config/env.js"

//Plugin for initializing env
export const initEnvPlugin = fastifyPlugin((fastify) => {
    fastify.register(FastifyEnv , EnvOptions)
})