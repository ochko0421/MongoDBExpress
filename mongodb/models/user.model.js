const { default: mongoose, Schema } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:String,
    isAdmin: Boolean,
    email:{type:String,unique:true},
    password:String
},
    {collection:"Users"}
);

const User = mongoose.model("user", userSchema);

module.exports = User;
