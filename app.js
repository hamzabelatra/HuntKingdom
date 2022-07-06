// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/HuntKingdom")
//  .then(()=>console.log("database connected"))
//  .catch((exc)=>console.log(exc));

// import express
const express = require ('express')
const mongoose = require('mongoose')
const app = express();


//Import model membre and admin
const Membre = require('./model/membre')
const Admin = require('./model/admin')

// Import Bcrypt
const bcrypt = require('bcrypt')


// fs = file system module (node_modules)
const fs = require('fs')


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });
//Connect to database
mongoose.connect('mongodb://localhost:27017/HuntKingdom', { useNewUrlParser: true, useUnifiedTopology: true });



//import body-Parser
const bodyParser = require('body-parser');


// Configuration
// Send JSON responses
app.use(bodyParser.json());
// Parse Request Objects
app.use(bodyParser.urlencoded({ extended: true }));

  
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var facture = require('./routes/facture');

// Configuration
// Send JSON responses
app.use(bodyParser.json());
// Parse Request Objects
app.use(bodyParser.urlencoded({ extended: true }));

//  Add Member
app.post("/membre",(req,res)=> {
    console.log("here in add member");
    Membre.findOne({email:req.body.email}).then(
        (doc)=>{
        if (doc){
            res.status(200).json({
            message : "User email already exists"
            })
        }
            else {
                bcrypt.hash(req.body.password, 10).then(
                    (cryptedPassword) => {
                        // Collect data from body
                        today= new Date()
                        let user = new Membre({
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            email: req.body.email,
                            password: cryptedPassword, //req.body.password
                            adresse: req.body.adresse,
                            dateCre: today,
                            image : req.body.image,
                            numTel : req.body.numTel,
                            dateNaiss : req.body.dateNaiss,
                            isActive : req.body.isActive,
                            role : req.body.role
                        });
                        //save
                        user.save();
                        //send response
                        res.status(200).json({
                            message: "Member added with success"
                        })
                        console.log(user)
                    })
            }
        })

})


//  Get All members
app.get("/membre",(req,res)=>{
  console.log("Here in get all members");

  Membre.find((err,docs)=>{
      if (err) {
          console.log("error in DB");
      } else {
          res.status(200).json({
              users : docs
          })
      }
  })
})

//  get member by Id

app.get("/membre/:id",(req,res)=>{
  console.log("here in get member by id");
  let membreId = req.params.id
  Membre.findOne({_id : membreId }).then(
      (doc)=>{
          if (!doc){
          console.log("Error");
      } else {
          res.status(200).json({
              user : doc
          })
      }
  }
  )
})

//  Update membre
app.put("/membre/:id",(req,res)=>{
  console.log("Here in update member");
  bcrypt.hash(req.body.password, 10).then(cryptedPassword => {

    today= new Date()
  let user = {
      _id : req.body._id,
      nom : req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: cryptedPassword, 
      adresse: req.body.adresse,
      image : req.body.image,
      numTel : req.body.numTel,
      dateNaiss : req.body.dateNaiss,
      dateupdate: today,
      isActive : req.body.isActive,
      role : req.body.role
  }

  Membre.updateOne({_id : req.body._id},user).then(
      (result)=>{
         
         if (result) {
          console.log(result);
          res.status(200).json({
              message : "Member updated"
          })
          console.log(user)
         }
          
      }
  )
})

})
//  Delete member
app.delete("/membre/:id",(req,res)=>{
  console.log("Here in delete member");

  let userId = req.params.id;
  
  Membre.deleteOne({_id : userId}).then(
      (result)=>{
          if (result) {
          res.status(200).json({
              message : "Member deleted"
          })
      }
  }
  )
})

// Get members by role
app.get("/getMembersByRole/:role",(req,res)=>{
  console.log("here in get members by role");

  let userRole = req.params.role;

  Membre.find({ role : userRole }).then(
      (docs)=>{
          if (!docs){
              console.log("Error in DB");
          } else {
              res.status(200).json({
                  users : docs
              })
          }
      }
  )
})

//  Add Administrator
app.post("/admin",(req,res)=> {
    console.log("here in add administrator");
    Admin.findOne({email:req.body.email}).then(
        (doc)=>{
        if (doc){
            res.status(200).json({
            message : "User email already exists"
            })
        }
            else {
                bcrypt.hash(req.body.password, 10).then(
                    (cryptedPassword) => {
                        // Collect data from body
                        today= new Date()
                        let user = new Admin({
                            nom: req.body.nom,
                            prenom: req.body.prenom,
                            email: req.body.email,
                            password: cryptedPassword, 
                            adresse: req.body.adresse,
                            dateCre: today,
                            image : req.body.image,
                            numTel : req.body.numTel,
                            dateNaiss : req.body.dateNaiss,
                            isActive : req.body.isActive,
                            role : "Admin" // req.body.role
                        });
                        //save
                        user.save();
                        //send response
                        res.status(200).json({
                            message: "Administrator added with success"
                        })
                        console.log(user)
                    })
            }
        })

})

//  Get All Administrators
app.get("/admin",(req,res)=>{
    console.log("Here in get all adminstrators");
  
    Admin.find((err,docs)=>{
        if (err) {
            console.log("error in DB");
        } else {
            res.status(200).json({
                users : docs
            })
        }
    })
  })


  //  Update administrator
app.put("/admin/:id",(req,res)=>{
    console.log("Here in update administrator");
    bcrypt.hash(req.body.password, 10).then(cryptedPassword => {
  
        today= new Date()
    let user = {
        _id : req.body._id,
        nom : req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: cryptedPassword, 
        adresse: req.body.adresse,
        image : req.body.image,
        numTel : req.body.numTel,
        dateNaiss : req.body.dateNaiss,
        dateupdate: today,
        isActive : req.body.isActive
        
    }
  
    Admin.updateOne({_id : req.body._id},user).then(
        (result)=>{
           
           if (result) {
            console.log(result);
            res.status(200).json({
                message : "Administrator updated"
            })
           }
            console.log(user)
        }
    )
  })
  })


//  Delete Administrator
app.delete("/admin/:id",(req,res)=>{
    console.log("Here in delete administrator");
  
    let userId = req.params.id;
    
    Admin.deleteOne({_id : userId}).then(
        (result)=>{
            if (result) {
            res.status(200).json({
                message : "Administrator deleted"
            })
        }
    }
    )
  })

module.exports = app;
