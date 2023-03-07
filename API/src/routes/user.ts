import { Schema, model } from "mongoose";


const userShema = new Schema({
    name : {type: String, require:true},
    lastName:  {type: String, require:true},
    email:  {type: String, require:true},
    password:  {type: String, require:true},
    food:  {type: String, require:true},
    image:  {type: String, require:true},
    
},{
timestamps: true,
versionKey : false
})

export default model('User', userShema )