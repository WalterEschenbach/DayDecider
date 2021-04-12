const router = require('express').Router();
const passport = require('passport')
const keys = require('../config/keys')

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
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.redirect(`${keys.domain.client}/?email=${req.user.email}&picture=${req.user.picture}`)
})

module.exports = router;