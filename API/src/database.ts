import mongoose from 'mongoose'
import config from './config'

(async () => {
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`);
    console.log('db connected', db.connection.name);
})()
