const express = require('express')
const router = express.Router()
const Alert = require('../model/alert')

router.get("/", async (req, res) => {
    try{
        const alerts = await Alert.find()
        res.json(alerts)
    }catch(err) {
        res.sendStatus(500).json( {message: err.message})
    }
})

router.post('/', async (req, res) => {
    const alert = new Alert({
        email:req.body.email, 
        name:req.body.name,
        lat:req.body.lat,
        long:req.body.long,
        alert:req.body.alert,
        info:req.body.info,
    })

    try{
        const newAlert = await alert.save()
        res.sendStatus(201).json({message: "alert created"})
    } catch (err){
        res.sendStatus(500).json({message: err.message})
    }
})


module.exports = router