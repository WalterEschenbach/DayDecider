const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const TwitterStrategy = require('passport-twitter')
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

passport.use(new TwitterStrategy({
    authorizationURL: `https://api.twitte.com/1.1/account/verify_credentials.json?include_email="true"`,
    consumerKey: process.env.TWITTER_API_KEY || keys.twitter.apiKey,
    consumerSecret: process.env.TWITTER_API_SECRET || keys.twitter.apiSecret,
    callbackURL: "/auth/twitter/redirect"
  },
  function(token, tokenSecret, profile, done) {
      console.log("Twitter Profile:", profile)
    User.findOne({ twitterId: profile.id }, function (err, currentUser) {
        if(currentUser){
            // already have the user
            console.log('Welcome Back!:', currentUser)
            //console.log('PROFILE:', profile)

            done(null, currentUser)

        }else{
            // create user in our database
            const name = profile.name;
            const twitterId = profile.screen_name;
            const email = "" //profile.emails[0]?.value
            const events = [];
            const picture = profile.photos[0].value
        
            const newUser = new User({name, twitterId, email, events, picture})
    
            newUser.save()
            .then((newUser)=> {
                console.log("User Created:", newUser)
                done(null, newUser)
            })
            .catch(err => console.log('DB Error: ' + err))
        }
    });
  }
));