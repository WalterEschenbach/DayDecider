const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
let User = require('../models/user.model')

passport.serializeUser((user, done)=>{
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
        clientID: process.env.GOOGLE_CLIENT_ID || keys.google.clientID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done)=>{
        // passport callback function
        // check if user already exists in our database

        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                // already have the user
                console.log('Welcome Back!:', currentUser)
                //console.log('PROFILE:', profile)

                done(null, currentUser)

            }else{
                // create user in our database
                const name = profile.displayName;
                const googleId = profile.id;
                const email = profile.emails[0].value
                const events = [];
                const picture = profile.photos[0].value
            
                const newUser = new User({name, googleId, email, events, picture})
        
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

