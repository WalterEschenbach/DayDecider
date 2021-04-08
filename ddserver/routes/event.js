const router = require('express').Router();
let Event = require('../models/event.model')

router.route('/create').post((req,res)=>{
    console.log(req.body.name)
    const name = req.body.name;
    const group = req.body.group;

    const newEvent = new Event({name, group})

    console.log('newEvent',newEvent)
    
    newEvent.save()
        .then(()=> console.log("Event Created!"))
        .catch(err => console.log('DB Error: ' + err))

    res.status(200).end()
});

router.route('/create').get((req,res)=>{
    res.send('create an event')
})

module.exports = router;