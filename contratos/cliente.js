const mongoose = require('mongoose')
const clienteSchema = new mongoose.Schema({
    nomeCliente:{
        type: String,
        required: true
    },
    enderecoCliente:{
        type: String,
        required: true
    },
    telefoneCliente:{
        type: Number,
        required: true
    },
    protocoloCliente:{
        type: Number,
        required: true
    },
    cpfCliente:{
        type: Number,
        required: true
    },
    rgCliente:{
        type: Number,
        required: true
    },
  dataCliente:{
        type: Date,
        required: true,
        default: Date.now
    },

})
module.exports = mongoose.model('cliente', clienteSchema)