const { Router } = require("express");
const menu = require("../controllers/menu.controllers");

const route = Router();

route.get("/menu/",menu.get)
module.exports = route;