const passport = require('passport')

const authCheck = (req,res, next) => {
    if(!req.user){
        console.log('No user signed in...')
        res.status(400).end()
    } else {
        res.status(200).send()
        next()
    }
}

module.exports = authCheck;