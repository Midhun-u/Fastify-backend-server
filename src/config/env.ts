//ENV Schema
const EnvSchema = {
    type: "object",
    required: ['DATABASE_URL' , 'JWT_SECRET'],
    properties: {
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