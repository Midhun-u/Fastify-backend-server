import fastifyPlugin from "fastify-plugin";
import type { ENV } from "../types/env.js";
import { connectDatabase } from "../config/db.js";

//Plugin for connecting database
export const initDatabasePlugin = fastifyPlugin(async(fastify, option) => {

    const URL = fastify.getEnvs<ENV>().DATABASE_URL
    await connectDatabase(URL)

})