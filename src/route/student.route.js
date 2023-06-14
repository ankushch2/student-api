//const studentModel = require("../models/student.model");
const middleware = require("../middleware/auth.validate");
module.exports = app => {
    const student = require("../controllers/student.controller");
  
    var router = require("express").Router();
  
    router.get("/name",[middleware.verifyToken], student.getName);
    router.get("/Salary", student.getSalary);
    //router.post("/", student.create);
    router.get("/:id",[middleware.verifyToken], student.getById);
    router.get("/",[middleware.verifyToken], student.findAll);
    router.put('/:id',[middleware.verifyToken], student.update);
    router.delete('/:id',[middleware.verifyToken], student.delete);
    
  
    app.use('/api/v1/student', router);
  };