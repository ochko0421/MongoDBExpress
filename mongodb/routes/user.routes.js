const { Router } = require("express");
const user = require("../controllers/user.controllers");

const route = Router();

route.get("/", user.getAll);
route.post("/create", user.create);
route.put("/update/:id",user.update)
module.exports = route;