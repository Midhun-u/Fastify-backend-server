import type { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./user.service.js";
import { handleError } from "../../utils/handleError.js";
import { generateToken } from "../../utils/generateToken.js";

//User controller
export const UserController = {

    async sign(request: FastifyRequest, reply: FastifyReply) {

        try {

            const { fullname, email, password } = request.body as { fullname: string, email: string, password: string } || {}

            if (!fullname.trim() || !email.trim() || !password.trim()) {
                reply.status(400)
                return { success: false, error: "Fullname , Email and Password must be provided", statusCode: 400 }
            }

            if (fullname.trim().length > 255) {
                reply.status(400)
                return { success: false, error: "Fullname must be not exceed the limit", statusCode: 400 }
            }

            if (password.trim().length < 6) {
                reply.status(400)
                return { success: false, error: "Password must be either atleast 6 letters or above" }
            }

            // checking the email already exists
            const checkEmail = await UserService.getUserByEmail(email.trim())

            if (checkEmail) {
                reply.status(400)
                return { success: false, error: "Email already exists", statusCode: 400 }
            }

            const newUser = await UserService.createUser(fullname.trim(), email.trim(), password.trim())

            if(newUser){

                //Generating token
                const token = await generateToken(reply , newUser._id, newUser.fullname)

                reply.status(201)
                reply.header("authorization" , token)
                return { success: true, message: "User created", user: newUser, statusCode: 201 , authToken: token}

            }


        }
        catch (error) {
            handleError(reply, `addUserHandler error : ${error}`)
        }

    },
    async login(request: FastifyRequest, reply: FastifyReply){
        
    }
}