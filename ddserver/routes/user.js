const router = require('express').Router();
let User = require('../models/user.model')


// Get User Info for UserProvider
router.get('/find', (req, res)=>{
    if(req.user){
        res.send(req.user).end()
    }else{
        res.send('no user')
    }
})

module.exports = router;