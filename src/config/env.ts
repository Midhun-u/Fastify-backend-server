import fastifyPlugin from "fastify-plugin"
import FastifyEnv from "@fastify/env"

const EnvSchema = {
    type: "object",
    required: ['PORT' , 'DATABASE_URL'],
    properties: {
        PORT: {
            type: "string",
            default: 5000
        },
        DATABASE_URL: {
            type: "string",
            default: ''
        }
    }
}

export const EnvOptions = {
    confKey: "config",
    schema: EnvSchema,
    dotenv: true
}