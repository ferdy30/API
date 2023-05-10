const express = require("express");
const { route } = require("express/lib/application");
const Schema = require('../models/menuModel1')



const router = express.Router();

//CREAR INFORMACION 
router.post('/menu', (req, res)=> {
   const user = Schema(req.body);
   user.save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message : error}))
});

//Obtener informacion 

router.get('/menu', (req, res)=> {
    Schema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });

//OBTENER INFORMACION POR ID

router.get('/menu/:id', (req, res)=> {
    const {id} = req.params;
    Schema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });


 // ACTUALIZAR INFO
 router.put('/menu/:id', (req, res)=> {

    const {id} = req.params;
    const {name,type, description, price, image} = req.body
    Schema
    .updateOne({_id:id},{ $set: {name, type, description, price, image}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });

//ELIMINAR
 router.delete('/menu/:id', (req, res)=> {
    const {id} = req.params;

    Schema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message : error}))
 });


module.exports = router;