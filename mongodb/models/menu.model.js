const { default: mongoose, Schema } = require("mongoose");

const menuSchema = mongoose.Schema(
    {
        id:String,
        menuName:String,
        link:String,
        position:Number
    },
    {
        collection:"clMenu"
    }
);

const Category = mongoose.model("Menu", menuSchema);
module.exports = Category;
