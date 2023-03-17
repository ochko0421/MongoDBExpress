const { Router } = require("express");
const user = require("../controllers/user.controllers");

const route = Router();

route.get("/", user.getAll);
route.post("/create", user.create);
route.put("/update/:id", user.update);
route.delete("/delete/:id", user.delete)
route.get("/get/:id",user.getOne)
module.exports = route;