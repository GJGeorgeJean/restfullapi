const USER_ROLE = require('../model/userRoleModel');

//post users, C -- for create

const create_user =  async (req,res)=>{
    try{
        const user = await USER_ROLE.create(req.body);
        res.status(201).json({msg:"User created successfully"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

// get users, R -- for read
const getAll_users = async(req,res)=>{
    try{
        const users = await USER_ROLE.find({});
        if(users.length < 1)return res.json({msg: 'No users found'})
        res.status(200).json({users})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

const update_user = async(req,res)=>{
    try{
        const {id:userId} = req.params
        const user = await USER_ROLE.findOneAndUpdate({_id:userId},
            req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({msg: "User updated successfully"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
}}

// DELETE USER

const delete_user = async(req,res)=>{
    try{
        const {id:userId} = req.params
        const user = await USER_ROLE.findOneAndDelete({_id:userId})
        res.status(200).json({msg: "User deleted successfully"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
}}

//params for single user

const single_user = async(req,res)=>{
    try{
        const users = await USER_ROLE.findOne({});
        res.status(200).json({users})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}




module.exports = {
    create_user, getAll_users, update_user, delete_user, single_user
}