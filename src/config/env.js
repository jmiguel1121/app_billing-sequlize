require('dotenv').config()

const config = {
    app: {
        port: process.env.APP_PORT
    },
    db: {
        url: process.env.DB_HOST,
        name: process.env.DATABASE,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        schema: process.env.DB_SCHEMA,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
}


module.exports = config;