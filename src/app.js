//const express = require('express');
import express from 'express';
import ProductManager from './desafioEntragable-Ruscio.js';

const productos = new ProductManager(`./data/productos.json`);
const app = express();
const port = 3000;

app.get (`/`, function (req, res) {
    res.send(`Solucion al entregable n°3 del curso de Backend CoderHouse`)
})

app.get (`/products`, (req, res) => {
    const { limit } = req.query;
    const prod = productos.getProducts();
    let cant;
    if(limit)
        cant = prod.slice(0, limit)
        else cant = prod;
    return res.json({cantProductos: prod.length, productosSeleccionados: cant});


});

app.get('/products/:id', (req,res) => {
    const {id} = req.params;
    return res.json(productos.getProductById(parseInt(id)));

})


app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port} `)
})