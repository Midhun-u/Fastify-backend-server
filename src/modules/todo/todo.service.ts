import { ObjectId } from "@fastify/mongodb"
import { Todo } from "./todo.model.js"

//Todo service
export const TodoService = {

    async createTodo(userId: ObjectId | string, task: string) {

        const newTodo = await Todo.create({
            userId: userId,
            task: task
        })

        return newTodo

    },
    async getUserTodos(userId: ObjectId | string) {

        const todos = await Todo.find({ userId: userId })
        return todos

    },
    async updateTodoById(todoId: ObjectId | string) {

        const updatedTodo = await Todo.findByIdAndUpdate(todoId , {completed: true} , {new: true})

        return updatedTodo

    },
    async deleteTodoById(todoId: ObjectId | string, userId: ObjectId | string){

        const result = await Todo.deleteOne({_id: todoId, userId: userId})
        return {...result}

    },
    async getTodoById(todoId: ObjectId | string, userId: ObjectId | string){

        const todo = await Todo.findOne({_id: todoId, userId: userId})
        return todo

    },

}