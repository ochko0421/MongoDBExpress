const Order = require("../models/order.model")

exports.create = async (req,res)=>{
    try{
        const result = await (await Order.create(req.body)).populate([{path:"userId"},{path:"orderDetail"}])
        res.json({status:true,result})
    }catch(err){
        res.json({status:false,message:err})
    }
}