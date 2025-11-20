import bcrypt from 'bcrypt'

//Function for hashing password
export const hashPassword = async (password: string) => {

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    return hashedPassword

}

//Function for comparing password
export const comparePassword = async (plainText: string, hashedPassword: string) => {

    const isPasswordCorrect = await bcrypt.compare(plainText, hashedPassword)
    return isPasswordCorrect

}