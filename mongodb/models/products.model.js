const { default: mongoose, Schema } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title:String, 
    price: Number,
    description:String,
    categoryId: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
  },
  { collection: "clProducts", timestamps: true }
);

const Food = mongoose.model("Product", productSchema);

module.exports = Food;
