const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
let User = require('../models/user.model')

passport.serializeUser((user, done)=>{
    console.log('cereal user', user)
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, user);
    })
});



passport.use(
    new GoogleStrategy({
        // options for the google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done)=>{
        // passport callback function
        // check if user already exists in our database

        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                // already have the user
                console.log('user is:', currentUser)
                done(null, currentUser)
            }else{
                // create user in our database
                const name = profile.displayName;
                const googleId = profile.id;
                const email = profile.email;
                const events = [];
            
                const newUser = new User({name, googleId, email, events})
        
                newUser.save()
                .then((newUser)=> {
                    console.log("User Created:", newUser)
                    done(null, newUser)
                })
                .catch(err => console.log('DB Error: ' + err))
            }
        })

     
    })
)