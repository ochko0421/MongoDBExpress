const { Router } = require("express");
const order = require("../controllers/order.controllers");

const route = Router();

route.post("/order/create",order.create)
module.exports = route;