const router = require('express').Router();
let Event = require('../models/event.model')
let User = require('../models/user.model')
let Date = require('../models/date.model')
const stages = require('../utils/dataAggregationPipeline')
const moment = require('moment');

// Create a New Event
router.route('/create').post((req, res)=>{
    console.log('req.user', req.user)
    const name = req.body.name;
    let group = [...req.body.group, req.user.email];

    const newEvent = new Event({name, group})

    console.log('newEvent',newEvent)
    
    newEvent.save()
        .then((event)=> {
            console.log("Event Created!", event)
            for(i=0; i<event.group.length; i++){
                User.findOneAndUpdate({email: event.group[i]}, {$push: {events: event._id}})
                .then((user)=>console.log("user updated!",user))
                .catch((err)=> console.log("user err:",err))
            }
            
        })
        .catch(err => console.log('DB Error: ' + err))

    res.status(200).end()
});

// Find All Events for Current User
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


// Update Dates Selected for Current User
router.route('/update').post((req,res)=>{
    const email = req.user.email;
    const startDate = req.body.startDate.startDate
    const endDate = req.body.endDate.endDate
    const eventFocus = req.body.eventFocus
    const duration = moment(endDate).diff(startDate, "days") + 1

    Date.findOneAndUpdate({email: email, eventFocus: eventFocus}, {email, startDate, endDate, eventFocus, duration}, {new: true, upsert: true}, (error, result)=>{
        if(result){
            console.log('result:', result)
            res.send(result).end();
        } else{
            console.log('errt:', error)
        }
    })
})



module.exports = router;