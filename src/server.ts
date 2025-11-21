import Fastify from "fastify"
import { userRoutes } from "./modules/user/user.route.js"
import { initPlugins } from "./plugins/index.js"

//Create Fastify instance
const app = Fastify({
    logger: true
})
const port: number = 5000

//Plugin
app.register(initPlugins)

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