const Menu = require("../models/menu.model")

exports.get = async (req,res)=>{
    const a = await Menu.find({});
    res.json({message:"Success",result:a})
}