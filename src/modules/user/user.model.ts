import { model, Schema } from "mongoose";

//User schema
const userSchema = new Schema({

    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    }

} , {timestamps: true, versionKey: false})

export const User = model("User" , userSchema)