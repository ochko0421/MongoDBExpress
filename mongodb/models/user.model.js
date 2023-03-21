const { default: mongoose, Schema } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:String,
    isAdmin: Boolean,
    username:String,
    password:String,
    categoryId:[{type:Schema.Types.ObjectId,ref:"Category"}]
},
    {collection:"Users"}
);

const User = mongoose.model("user", userSchema);

module.exports = User;
