const authCheck = (req,res, next) => {
    if(!req.user){
        console.log('No user signed in...')
        res.status(400).end()
    } else {
        next()
    }
}

module.exports = authCheck;