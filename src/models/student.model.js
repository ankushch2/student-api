const mongoose =require('mongoose');

module.exports= mongoose.model('student',{
    firstName:{type: String},
    lastName:{type: String},
    dob:{type: String},
    address:{type: String},
    class:{type: String},
    mobile:{type: Number},
    studId:{type: String},
});