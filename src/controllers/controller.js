const express = require("express");
const { route } = require("express/lib/application");
const Schema = require('../models/model.js')




//CREAR INFORMACION 

exports.add = async(req, res) =>{

   const user = Schema(req.body);
   user.save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message : error}))

}

//OBTENER INFORMACION 

exports.list = async(req, res) =>{
    Schema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 }

//OBTENER INFORMACION POR ID

exports.show = async(req, res) =>{
    const {id} = req.params;
    Schema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 }


 // ACTUALIZAR INFO
exports.update = async (req, res, next) =>{
   
    const {id} = req.params;
    const {name,email} = req.body
    Schema
    .updateOne({_id:id},{ $set: {name, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 }



//ELIMINAR
exports.delete = async (req, res, next) =>{
    const {id} = req.params;
  
    Schema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 }


