import dotenv from 'dotenv'

dotenv.config();
console.log(process.env.DB)

export default {
    MONGO_DB: process.env.DB || 'user-mernDb',
    MONGO_USER: 'admin',
    MONGO_PASSWORD: 'admin',
    MONGO_HOST: '127.0.0.1:27017'
}