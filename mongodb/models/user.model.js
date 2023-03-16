const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:String,
    isAdmin: Boolean,
    username:String,
    password:String
},
    {collection:"Users"}
);

const User = mongoose.model("user", userSchema);

module.exports = User;
