const {generateCrudMethods}= require('../services/index')
const Student = require('../models/student.model');
const studentCrud = generateCrudMethods(Student);
const ObjectId = require('mongoose').Types.ObjectId;

exports.getName= (req,res)=>{
    res.json("Welcome to Student databae management system")
}
exports.getSalary= (req,res)=>{
    res.json("SDMS")
}

exports.findAll = (req,res,next)=>{
    studentCrud.getAll()
    .then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(400).json({
            error: err
        });
    })
}

    exports.create= (req,res,next)=>{
        console.log(req.body)
        studentCrud.create(req.body)
        .then(data=>{
            res.status(201).json(data)
        }).catch(err=>{
            res.status(400).json(err)
        })
    }
    exports.getById = (req,res,next)=>{

        if(ObjectId.isValid(req.params.id)==false)
        {
            res.status(400).json({
                error:"given object id is not valid"
            })
        }
        else
        studentCrud.getById(req.params.id)
        .then(data=>{
            res.status(200).json(data);
        }).catch(err=>{
            res.status(400).json({
                error: err
            });
        })
    } 
    exports.update = (req, res,next) => {
        
        if(!req.body) {
            return res.status(400).send({
                message: "Please fill all required field"
            });
        }
               
        User.findByIdAndUpdate(req.params.id, {
            first_name: req.body.first_name, 
            last_name: req.body.last_name,
            email: req.body.last_name,
            phone: req.body.last_name
        }, {new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.id
            });
        });
    };
    
    
    exports.delete = (req, res,next) => {
        User.findByIdAndRemove(req.params.id)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            res.send({message: "user deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "Could not delete user with id " + req.params.id
            });
        });
    };   
