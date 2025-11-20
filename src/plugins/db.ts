import fastifyPlugin from "fastify-plugin";
import type { ENV } from "../types/env.js";
import { connectDatabase } from "../config/db.js";

//Plugin for connecting database
export const initDatabasePlugin = fastifyPlugin((fastify) => {

    const URL = fastify.getEnvs<ENV>().DATABASE_URL
    connectDatabase(URL)

})