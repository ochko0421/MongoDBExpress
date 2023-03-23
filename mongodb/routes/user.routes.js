const { Router } = require("express");
const user = require("../controllers/user.controllers");

const route = Router();

route.get("/user", user.getAll);
route.put("/user/update/:id", user.update);
route.delete("/user/delete/:id", user.delete)
route.get("/user/get/:id",user.getOne)
route.post("/user/signup",user.Signup)
route.post("/user/login",user.login)
module.exports = route;