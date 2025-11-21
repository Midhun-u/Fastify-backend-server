import type { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "./user.service.js";
import { handleError } from "../../utils/handleError.js";
import { generateToken } from "../../utils/generateToken.js";
import { comparePassword } from "../../utils/password.js";
import { checkEmailIsValid } from "../../utils/checkEmail.js";
import type { JWT_PAYLOAD } from "../../types/jwt.js";

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

            const isEmailValid = checkEmailIsValid(email)

            if(!isEmailValid){
                reply.status(400)
                return {success: false , error: "Invalid email", statusCode: 400}
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
                return { success: true, message: "User created", user: newUser, statusCode: 201 , authToken: token}

            }


        }
        catch (error) {
            handleError(reply, `addUserHandler error : ${error}`)
        }

    },
    async login(request: FastifyRequest, reply: FastifyReply){

        try {
            
            const {email, password} = await request.body as {email : string, password: string} || {}

            if(!email || !password){
                reply.status(400)
                return {success: false , error: "Email and Password are must be provided" , statusCode: 400}
            }

            const isEmailValid = checkEmailIsValid(email)

            if(!isEmailValid){
                reply.status(400)
                return {success: false , error: "Email is invalid" , statusCode: 400}
            }

            //Checking user registerd
            const user = await UserService.getUserByEmail(email)

            if(!user){
                reply.status(404)
                return {success: false, error: "User is not found" , statusCode: 404}
            }

            //Checking password is correct
            const isPasswordCorrect = await comparePassword(password, user.password)

            if(!isPasswordCorrect){
                reply.status(400)
                return {success: false , error: "Password is incorrect" , statusCode: 400}
            }

            //Generating token
            const token = await generateToken(reply, user._id, user.fullname)
            
            reply.status(200)
            return {success: false, message: "Login success", statusCode: 200, authToken: token}

        } catch (error) {
            handleError(reply, `login handler error ${error}`)
        }

    },
    async logout(request: FastifyRequest, reply: FastifyReply){

        try {
            
            reply.removeHeader("authorization")
            reply.status(200)
            return {success: true, message: "Logout success", statusCode: 200}

        } catch (error) {
            handleError(reply , `logout handler error ${error}`)
        }

    },
    async getUser(request: FastifyRequest, reply: FastifyReply){

        try {
           
            const authUser = request.user as JWT_PAYLOAD
            
            if(!authUser){
                reply.status(400)
                return {success: false , error: "User is missing" , statusCode: 400}
            }

            const user = await UserService.getUserByIdWithoutPassword(authUser.id)
            return {success: true, message: "Success" , user: user, statusCode: 200}
            
        } catch (error) {
            handleError(reply, `getUser handler error ${error}`)
        }

    }
}