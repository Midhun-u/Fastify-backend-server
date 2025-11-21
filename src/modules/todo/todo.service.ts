import { ObjectId } from "@fastify/mongodb"
import { Todo } from "./todo.model.js"

//Todo service
export const TodoService = {

    async createTodo(userId: ObjectId | string, task: string){

        const newTodo = await Todo.create({
            userId: userId,
            task: task
        })

        return newTodo

    },
    async getUserTodos(userId: ObjectId | string){

        const todos = await Todo.find({userId: userId})
        return todos

    }

}