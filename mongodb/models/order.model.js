const { default: mongoose, Schema } = require("mongoose");

const orderSchema = mongoose.Schema(
    {
    userId: [{ type: Schema.Types.ObjectId, ref: "user" }],
    orderDetails:[{type:Schema.Types.ObjectId,ref:"OrderDetail"}]
    },
    {
    collection: "clOrder",
    timestamps: true,
    }
);

const Category = mongoose.model("Order", orderSchema);
module.exports = Category;
