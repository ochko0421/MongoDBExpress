const uuid = require("uuid")
const fs = require("fs")
const User = require("../models/user.model")

const uniqueRandomID = uuid.v4()

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

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

exports.getAll = async (req, res) => {
    const a = await User.find();
    console.log(a);
    res.json({message:"Test",result:a})
}

// exports.delete = (req, res) => {

//   const { id } = req.params;
//   fs.readFile(file, "utf-8", (readErr, data) => {
//     if (readErr) {
//       res.json({ status: "false", message: readErr })
//     }

//     const obj = data ? JSON.parse(data) : []
//     const newArr = obj.filter((e) => {

//       return e.id != id
//     })

//     fs.writeFile(file, JSON.stringify(newArr), (err) => {
//       if (err) {
//         res.json({ status: "false", message: err })
//       }

//       res.json({ status: true, result: newArr })
//     })

//     res.json({ status: true, result: newArr })
//   })
// }

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
