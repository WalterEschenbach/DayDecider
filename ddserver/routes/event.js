const router = require('express').Router();
let Event = require('../models/event.model')
let User = require('../models/user.model')
let Date = require('../models/date.model')
const stages = require('../utils/dataAggregationPipeline')

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
    User.aggregate(stages, (err, event)=>{
        if(err){
            console.log('Error retrieving event', err);
            console.log('stages:', stages)
        } else{
            res.json(event);
        }
    });
})

router.route('/update').post((req,res)=>{
    const email = req.user.email;
    const startDate = req.body.startDate.startDate
    const endDate = req.body.endDate.endDate
    const eventFocus = req.body.eventFocus

    Date.findOneAndUpdate({email : email}, {email, startDate, endDate, eventFocus}, {new: true, upsert: true}, (error, result)=>{
        if(result){
            console.log('result:', result)
            res.send(result).end();
        } else{
            console.log('errt:', error)
        }
    })
})



module.exports = router;