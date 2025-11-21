import Fastify from "fastify"
import { userRouter } from "./modules/user/user.route.js"
import { initPlugins } from "./plugins/index.js"
import { todoRouter } from "./modules/todo/todo.route.js"
import { loggerConfig } from "./config/logger.js"

//Create Fastify instance
const app = Fastify({
    logger: loggerConfig
})
const port: number = 5000

//Plugin
app.register(initPlugins)

//Routes
app.register(userRouter , {prefix: "/api/user"})
app.register(todoRouter , {prefix: "/api/todo"})

//Listerning port
app.listen({port: port} , (error , address) => {

    if(error){
        console.log(error)
        process.exit(1)
    }
    console.log(`Server running ${address}`)
})

export default app