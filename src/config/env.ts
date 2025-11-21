//ENV Schema
const EnvSchema = {
    type: "object",
    required: ['PORT' , 'DATABASE_URL'],
    properties: {
        PORT: {
            type: "string",
            default: 5000
        },
        DATABASE_URL: {
            type: "string",
            default: ""
        },
        CLIENT_URL: {
            type: "string",
            default: ""
        },
        JWT_SECRET: {
            type: "string",
            default: ""
        } 
    }
}

export const EnvOptions = {
    confKey: "config",
    schema: EnvSchema,
    dotenv: true
}