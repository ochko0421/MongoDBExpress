const uuid = require("uuid")
const fs = require("fs")
const User = require("../models/user.model")

const uniqueRandomID = uuid.v4()

// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';

exports.create = async (req, res) => {
//    const obj = req.body;
    const newUser = new User(req.body)
    const a = await newUser.save()
    console.log(a);
    res.json({message:"Success",result:a});


}
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


// exports.login = (req, res) => {
//   const { username, password } = req.body
//   if (!username || !password) return res.json({ status: false, message: "Please complete your information" })

//   fs.readFile(file, "utf-8",async (readErr, data) => {
//     if (readErr) {
//       return res.json({ status: false, message: readErr })
//     }

//     const parsedData = data ? JSON.parse(data) : [];
    
//     let user;
//     for (let i = 0; i < parsedData.length; i++) {
//       if (username == parsedData[i].username) {
//         const decrypt = await bcrypt.compare(
//           password,
//           parsedData[i].password
//         );

//         if (decrypt) {
//           user = {
//             id: parsedData[i].id,
//             username: parsedData[i].username,
//             isAdmin:parsedData[i].isAdmin,
//             name:parsedData[i].name
//           };
//           break;
//         }
//       }
//     }

//     if (user) {
//       return res.json({
//         status: true,
//         result: user
//       })
//     }
//     else {
//       return res.json({
//         status: false,
//         message: "Tanii email esvel nuuts ug buruu baina"
//       })
//     }

//   })
// }
