import { model, Schema } from "mongoose";

//Todo Schema
const todoSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }

})

export const Todo = model("Todo" , todoSchema)