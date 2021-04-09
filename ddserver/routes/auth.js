const router = require('express').Router();
const passport = require('passport')

// auth logout
router.get('/logout', (req, res)=>{
    // handle with passport
    req.logout()
    res.status(200).send()
    console.log('User has logged out...')
})

// auth with google
router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    //res.send(req.user)
    res.redirect('http://127.0.0.1:3000/')
})

module.exports = router;