const router = require('express').Router();
let Event = require('../models/event.model')

router.route('/create').post((req, res)=>{
    console.log('req.user', req.user)
    const name = req.body.name;
    let group = [...req.body.group, req.user.email];

    const newEvent = new Event({name, group})

    console.log('newEvent',newEvent)
    
    newEvent.save()
        .then(()=> console.log("Event Created!"))
        .catch(err => console.log('DB Error: ' + err))

    res.status(200).end()
});

router.route('/find').get((req,res)=>{
    Event.find({group: {$all: [req.user.email]}}, (err, event)=>{
        if(err){
            console.log('Error retrieving event');
        } else{
            res.json(event);
        }
    });
})



module.exports = router;