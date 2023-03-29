const { default: mongoose, Schema } = require("mongoose");

const orderDetailSchema = mongoose.Schema(
  {
    orderId:[{type:Schema.Types.ObjectId,ref:"Order"}],
    productId:[{type:Schema.Types.ObjectId, ref:"Product"}],
    quantity:Number  
  },
  {
    collection: "clOrderDetail",
    timestamps: true,
  }
);

const Category = mongoose.model("OrderDetail", orderDetailSchema);
module.exports = Category;
