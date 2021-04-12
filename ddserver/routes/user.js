const router = require('express').Router();
let User = require('../models/user.model')



router.get('/events/find', (req,res)=>{
    res.send(req.user.events).end()
})

module.exports = router;