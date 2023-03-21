const { Router } = require("express");
const user = require("../controllers/user.controllers");

const route = Router();

route.get("/user", user.getAll);
route.post("/user/create", user.create);
route.put("/user/update/:id", user.update);
route.delete("/user/delete/:id", user.delete)
route.get("/user/get/:id",user.getOne)
module.exports = route;