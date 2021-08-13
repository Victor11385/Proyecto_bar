const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Producto = new Schema({
    imagen: {
    type: String
    },
    nombre: {
    type: String
    },
    precio: {
    type: String
    },
    cantidad: {
    type: String
    }
}, {
  collection: 'producto'
})

module.exports = mongoose.model('Producto', Producto)