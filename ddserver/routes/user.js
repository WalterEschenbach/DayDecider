const router = require('express').Router();
let User = require('../models/user.model')



router.get('/events/find', (req,res)=>{
    res.send(req.user.events).end()
})

router.get('/find', (req, res)=>{
    if(req.user){
        res.send(req.user).end()
    }else{
        res.send('no user')
    }
})

module.exports = router;