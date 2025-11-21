import Fastify from "fastify"
import { initEnvPlugin } from "./plugins/env.js"
import { initDatabasePlugin } from "./plugins/db.js"
import { userRoutes } from "./modules/user/user.route.js"
import { corsPlugin } from "./plugins/cors.js"

//Create Fastify instance
const app = Fastify({
    logger: true
})
const port: number = 5000

//Plugins
app.register(initEnvPlugin)
app.register(initDatabasePlugin)
app.register(corsPlugin)

//Routes
app.register(userRoutes , {prefix: "/api/user"})

//Listerning port
app.listen({port: port} , (error , address) => {

    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log(`Server running ${address}`)
})

export default app