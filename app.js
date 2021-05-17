require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3030;
const mongoose = require('mongoose');
const passport = require('passport')
const passportSetup = require('./ddserver/config/passport-setup')
const keys = require('./ddserver/config/keys')
const cookieSession = require('cookie-session')
const connectionURL = process.env.MONGODB_CONNECTION_STRING
const authCheck = require('./ddserver/utils/auth-check')
const path = require('path')


const corsOptions = {
  origin: [process.env.DOMAIN_CLIENT || keys.domain.client, process.env.DOMAIN_SERVER || keys.domain.server],
  credentials: true,
}

app.use(express.json())

app.use(cors(corsOptions))

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(()=> console.log('connected to DB'))
.catch(error => console.log(error))

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.SESSION_COOKIE_KEY || keys.session.cookieKey]
}))

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
})


app.get('/', (req, res) => {
  console.log('req.user', req.user)
    res.send( {user: req.user})
})

const eventRouter = require('./ddserver/routes/event')
const authRouter = require('./ddserver/routes/auth')
const userRouter = require('./ddserver/routes/user')

app.use('/auth', authRouter);
app.use('/event',authCheck, eventRouter);
app.use('/user',authCheck, userRouter);

// Serve static assets if in production

// List of all the files that should be served as-is
//let protected = ['transformed.js', 'main.css', 'favicon.ico']

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('ddclient/build'));

  const pathName = path.resolve(__dirname, 'ddclient', 'build', 'index.html')

  app.get('*', (req, res) => {
    res.sendFile(pathName);
  });

  app.get('/', (req, res) => {
    res.sendFile(pathName);
  });

}

app.listen(PORT)

