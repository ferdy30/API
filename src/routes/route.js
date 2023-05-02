const express = require("express");
const { route } = require("express/lib/application");
const Schema = require('../models/model.js')



const router = express.Router();

//CREAR INFORMACION 
router.post('/restaurantes', (req, res)=> {
   const user = Schema(req.body);
   user.save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message : error}))
});

//Obtener informacion 

router.get('/restaurantes', (req, res)=> {
    Schema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });

//OBTENER INFORMACION POR ID

router.get('/users/:id', (req, res)=> {
    const {id} = req.params;
    Schema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });


 // ACTUALIZAR INFO
 router.put('/users/:id', (req, res)=> {
   
    const {id} = req.params;
    const {name,email} = req.body
    Schema
    .updateOne({_id:id},{ $set: {name, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });

//ELIMINAR
 router.delete('/users/:id', (req, res)=> {
    const {id} = req.params;
  
    Schema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });


module.exports = router;