import fastifyPlugin from "fastify-plugin";
import { initEnvPlugin } from "./env.js";
import { initDatabasePlugin } from "./db.js";
import { corsPlugin } from "./cors.js";
import { jwtPlugin } from "./jwt.js";

//Plugins
export const initPlugins = fastifyPlugin(async(fastify) => {

    await fastify.register(initEnvPlugin)
    await fastify.register(initDatabasePlugin)
    await fastify.register(corsPlugin)
    await fastify.register(jwtPlugin)

})