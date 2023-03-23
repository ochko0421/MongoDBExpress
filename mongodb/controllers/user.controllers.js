
const User = require("../models/user.model")


const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');


exports.update = async (req, res) => {
    const {id}= req.params
    const obj=req.body
 let a = await User.updateOne(
    {_id:id},
    {$set:obj}
 );
 res.json({message:"Success",data:a})
  
};

exports.getOne= async(req,res)=>{
    const {id}= req.params;
    const a = await User.find({_id:id})
    res.json({message:"Success",data:a})
}

exports.getAll = async (req, res) => {
    const a = await User.find();
    console.log(a);
    res.json({message:"Success",result:a})
}

exports.delete =async (req, res) => {
    const {id}=req.params;
    let a = await User.deleteOne({_id:id})
    res.json({message:"Success",result:a})
}
exports.Signup= async(req,res)=>{
    const { email, password,name,isAdmin } = req.body;

    if (!email || !password) {
      res
        .status(500)
        .send({ status: false, message: "Complete your information!" });
      return;
    }
  
    const newPassword = await bcrypt.hash(password, 10);
    if (newPassword) {
      const newUser = new User({
        email,
        password: newPassword,
        name,
        isAdmin
      });
  
      const result = await newUser.save();
  
      if (result) {
        res.status(200).send({
          status: true,
          message: "Success",
        });
        return;
      } else {
        res.status(500).send({
          status: false,
          message: "Error",
        });
        return;
      }
    } else {
      res.status(500).send({
        status: false,
        message: "Password could not be encrypted",
      });
      return;
    }
  

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res
        .status(500)
        .send({ status: false, message: "Complete your information!" });
      return;
    }
  
    const user = await User.findOne({ email });
  
    if (user && (await bcrypt.compare(password, user.password))) {
  
      const token = jwt.sign({user:user},process.env.TOKEN_SECRET_KEY,{
        expiresIn:"2h",
      })
  
      res.status(200).send({ status: true, data: user, message: "Success",token });
      return;
    } else {
      res.status(400).send({
        status: false,
        message: "user or password not found",
      });
      return;
    }
  };