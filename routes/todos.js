const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controller/createTodo");
const {getTodo,getTodoById} = require("../controller/getTodo");

//define APi routes
router.post("/createTodo", createTodo);

router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);


module.exports = router;