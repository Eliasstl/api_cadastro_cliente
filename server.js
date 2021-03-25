
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser:true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error',(err)=> console.log(err))
db.once('open',()=>console.log('Banco de Dados conectado'))

app.use(express.json())

const clientesRota = require('./routes/clientes')
app.use('/clientes', clientesRota)

app.listen(3000, ()=>console.log('servidor estar rodando!'))
//77