const UsersController = require("../controllers/users.controller");
const express = require("express");

const router = express.Router();

router.post("/users", [UsersController.insert]);

module.exports = router;
