import type { FastifyReply, FastifyRequest } from "fastify";
import type { JWT_PAYLOAD } from "../../types/jwt.js";
import { handleError } from "../../utils/handleError.js";
import { TodoService } from "./todo.service.js";

//Todo controller
export const TodoController = {

    async addTodo(request: FastifyRequest, reply: FastifyReply){

        try {

            const authUser = request.user as JWT_PAYLOAD
            const {task} = request.body as {task : string} || {}
    
            if(!authUser){
                reply.status(400)
                return {success: false , error: "User is missing", statusCode: 400}
            }
    
            if(!task){
                reply.status(400)
                return {success: false, error: "Task must be provided", statusCode: 400}
            }

            const newTodo = await TodoService.createTodo(authUser.id , task)
            
            reply.status(201)
            return {success: true, message: "Todo created", newTodo: newTodo, statusCode: 201}
            
        } catch (error) {
            handleError(reply, `addTodo handler error ${error}`)
        }
    },
    async getTodos(request: FastifyRequest, reply: FastifyReply){

        try {
           
            const authUser = request.user as JWT_PAYLOAD

            if(!authUser){
                reply.status(400)
                return {success: false, error: "User is missing", statusCode: 400}
            }

            const todos = await TodoService.getUserTodos(authUser.id)
            return {success: true, message: "Success", todos: todos, statusCode: 200}
            
        } catch (error) {
            handleError(reply , `getTodos handler error ${error}`)
        }

    }

}