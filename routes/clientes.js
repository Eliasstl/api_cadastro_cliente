const express = require('express')
const cliente = require('../contratos/cliente')
const Cliente  = require('../contratos/cliente')
const router = express.Router()

router.get('/',async (req, res)=>{
   try {
       const clientes = await Cliente.find()
       res.json(clientes)
       
   } catch (error) {
       res.status(500).json({message: error.message})
       
   }

})
router.get('/:id',getCliente, (req, res)=>{
    res.json(res.cliente)
})
router.post('/', async (req, res)=>{
    const cliente = new Cliente({
        nomeCliente: req.body.nomeCliente,
        enderecoCliente: req.body.enderecoCliente,
        telefoneCliente: req.body.telefoneCliente,
        protocoloCliente: req.body.protocoloCliente,
        cpfCliente: req.body.cpfCliente,
        rgCliente: req.body.rgCliente,
    })
    try {
        const newCliente = await cliente.save()
        res.status(201).json(newCliente)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
})
router.patch('/:id',getCliente,async (req, res)=>{
    if(req.body.nomeCliente != null){
        res.cliente.nomeCliente = req.body.nomeCliente
    }
    if(req.body.enderecoCliente != null){
        res.cliente.enderecoCliente = req.body.enderecoCliente
    }
    if(req.body.telefoneCliente != null){
        res.cliente.telefoneCliente = req.body.telefoneCliente
    }
    if(req.body.protocoloCliente != null){
        res.cliente.protocoloCliente = req.body.protocoloCliente
    }
    if(req.body.cpfCliente != null){
        res.cliente.cpfCliente = req.body.cpfCliente
    }
    if(req.body.rgCliente != null){
        res.cliente.rgCliente = req.body.rgCliente
    }
    try {
        const updateCliente = await res.cliente.save()
        res.json(updateCliente)
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }

})
router.delete('/:id',getCliente, async(req, res)=>{
    try {
        await res.cliente.remove()
        res.json({message:'Cliente excluido'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

    
})

async function getCliente(req, res,next){
    try {
        clientes = await Cliente.findById(req.params.id)
        if(clientes == null){
            return res.status(404).json({message:'Cliente não econtrado'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})    
    }
    res.cliente = clientes
    next()
}
module.exports = router