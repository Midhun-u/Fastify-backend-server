import { hashPassword } from "../../utils/password.js"
import { User } from "./user.model.js"

//User service
export const UserService = {

    async getUserByEmail(email: string){

        const user = await User.findOne({email: email} , {email: 1, _id: 0})
        return user

    },
    async createUser(fullname: string, email: string, password: string){

        const hashedPassword = await hashPassword(password)
        const newUser = await User.create({
            fullname: fullname.trim(),
            email: email.trim(),
            password: hashedPassword.trim()
        })

        return {
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
            createdAt: newUser.createdAt
        }

    }

}