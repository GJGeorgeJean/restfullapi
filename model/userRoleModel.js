const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require("validator");

const userRoleSchema = new Schema({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim: true
    },
    email:{
        type:String,
        required:[true, 'email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error ('Email is invalid');
            }
        },
    },
    profession:{
        type:String,
        required:[true, 'role is required']
    },
    gender:{
        type:String,
        enum:['male','female'],
        required:[true, 'select a gender']
    },
    date:{
        type:Date,
        default:Date.now(),
    }
},{timestamps:true})

const USER_ROLE = mongoose.model ('User', userRoleSchema)
module.exports = USER_ROLE