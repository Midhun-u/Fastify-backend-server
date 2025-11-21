//Function for checking email
export const checkEmailIsValid = (email: string): boolean => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
        return false
    }

    return true

}