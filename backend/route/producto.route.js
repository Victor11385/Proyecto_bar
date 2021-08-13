const express = require('express');
const app = express();
const productoRoute = express.Router();

let ProductoModel = require('../model/producto');

// añadir nuevo producto
productoRoute.route('/crear-producto').post((req, res, next) => {
  ProductoModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get todas los productos
productoRoute.route('/').get((req, res) => {
  ProductoModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get unico producto
productoRoute.route('/get-producto/:id').get((req, res) => {
  ProductoModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Producto
productoRoute.route('/editar-producto/:id').put((req, res, next) => {
  ProductoModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Producto Actualizado!')
    }
  })
})

// Delete Producto 
productoRoute.route('/delete-producto/:id').delete((req, res, next) => {
  ProductoModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = productoRoute;