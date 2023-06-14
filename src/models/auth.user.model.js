const mongoose =require('mongoose');
const Student = require("../models/student.model");

console.log(Student);
module.exports= mongoose.model('user',{
    mobile:{type: String},
    email:{type: String},
    password:{type: String},
    token:{type: String},
    student:{type:Student.schema},

    
});