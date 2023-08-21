const databaseModel = require('../models/model');

module.exports.getData = async(req,res)=>{
    try{
        const users = await databaseModel.find({});
        console.log(users)
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.getSingleData = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await databaseModel.findById(id);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.saveData = async(req,res)=>{
    try{
        const user = await databaseModel.create(req.body)
        res.status(200).json(user);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
}

module.exports.updateData = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await databaseModel.findByIdAndUpdate(id,req.body);

        if(!user){
            return res.status(404).json({message:`cannot find any user with ID${id}`})
        }
        const updatedUser = await databaseModel.findById(id);
        res.status(200).json(updatedUser)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports.deleteData = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await databaseModel.findByIdAndDelete(id);

        if(!user){
            return res.status(404).json({message:`cannot find any user with Id ${id}`})
        }
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}