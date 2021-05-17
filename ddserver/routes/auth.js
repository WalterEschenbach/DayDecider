const router = require('express').Router();
const passport = require('passport')
const keys = require('../config/keys')

//auth verify
router.get('/verify', (req,res)=>{
    if(req.user){
        res.send("authenticated")
    }else{
        res.status(401).send()
    }
})

// auth logout
router.get('/logout', (req, res)=>{
    // handle with passport
    req.logout()
    res.status(200).send()
    console.log('User has logged out...')
})

// auth with google
router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email', 'openid']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', {failureRedirect: '/Login'}), (req, res)=>{
    res.redirect(`${process.env.DOMAIN_CLIENT || keys.domain.client}/`)
})

// auth with twitter
router.get('/twitter', passport.authenticate('twitter'));

// callback route for twitter to redirect to
router.get('/twitter/redirect', passport.authenticate('twitter', {failureRedirect: '/Login'}), (req, res)=>{
    res.redirect(`${process.env.DOMAIN_CLIENT || keys.domain.client}/`)
})

module.exports = router;