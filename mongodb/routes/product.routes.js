const { Router } = require("express");
const product = require("../controllers/products.contollers");

const route = Router();

route.get("/product", product.getAll);
route.get("/product/:_id", product.getOne);
route.post("/product", product.createProduct);
route.put("/prouct/:_id", product.updateProduct);
route.delete("/product/:_id", product.deleteProduct);

module.exports = route;
