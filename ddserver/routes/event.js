const router = require('express').Router();
let Event = require('../models/event.model')

router.route('/create').post((req,res)=>{
    console.log(req.body.name)
    const name = req.body.name;

    const newEvent = new Event({name})

    console.log(newEvent)
    try{newEvent.save()
        .then(()=> res.json("Event Created!"))
        .catch(err => res.status(400).json('Error: ' + err))}
        catch(err){
            console.log(err)
        }

})

module.exports = router;