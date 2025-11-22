import fastifyPlugin from "fastify-plugin";
import { initEnvPlugin } from "./env.js";
import { initDatabasePlugin } from "./db.js";
import { corsPlugin } from "./cors.js";
import { jwtPlugin } from "./jwt.js";

//Plugins
export const initPlugins = fastifyPlugin((fastify) => {

    fastify.register(initEnvPlugin)
    fastify.register(initDatabasePlugin)
    fastify.register(corsPlugin)
    fastify.register(jwtPlugin)

})