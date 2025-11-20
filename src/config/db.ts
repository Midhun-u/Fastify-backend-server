import mongoose from "mongoose"

//Function for connecting database
export const connectDatabase = async (URL: string) => {

    try {
      
        if(!URL) throw new Error('Database URL is missing')

       const connection = await mongoose.connect(URL)
       console.log(`Database is connected ${connection.connection.host}`)
        
    } catch (error) {
        console.log(`Database is not connected ${error}`)
    }

}