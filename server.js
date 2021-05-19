const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
const path = require('path')
const keys = require('./ddserver/config/keys')

app.use(express.json())

require('dotenv').config()

// CORS Setup
const corsOptions = {
  origin: [keys.domain.client || process.env.DOMAIN_CLIENT, keys.domain.server || process.env.DOMAIN_SERVER],
  credentials: true,
}
const cors = require('cors')
app.use(cors(corsOptions))


// Connect to MongoDB
const mongoose = require('mongoose');
const connectionURL = process.env.MONGODB_CONNECTION_STRING

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(()=> console.log('connected to DB'))
.catch(error => console.log(error))


// Cookie Session Setup
const cookieSession = require('cookie-session')

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey || process.env.SESSION_COOKIE_KEY]
}))

// Initialize Passport
const passport = require('passport')
require('./ddserver/config/passport-setup')

app.use(passport.initialize())
app.use(passport.session())


// Import routes
const authCheck = require('./ddserver/utils/auth-check')

const eventRouter = require('./ddserver/routes/event')
const authRouter = require('./ddserver/routes/auth')
const userRouter = require('./ddserver/routes/user')

app.use('/auth', authRouter);
app.use('/event',authCheck, eventRouter);
app.use('/user',authCheck, userRouter);


// Send User to Client
app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
})


app.get('/', (req, res) => {
  console.log('req.user', req.user)
    res.send( {user: req.user})
})



// Serve static assets if in production

if(process.env.NODE_ENV === 'production'){
  const pathName = path.resolve(__dirname, 'ddclient', 'build', 'index.html')

  app.use(express.static(pathName));

  app.get('/', (req, res) => {
    res.sendFile(pathName);
  });

  app.get('*', (req, res) => {
    res.sendFile(pathName);
  });

 

}






app.listen(PORT)

