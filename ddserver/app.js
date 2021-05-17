require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3030;
const mongoose = require('mongoose');
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const connectionURL = process.env.MONGODB_CONNECTION_STRING
const authCheck = require('./utils/auth-check')
const path = 'path'


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

const eventRouter = require('./routes/event')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

app.use('/auth', authRouter);
app.use('/event',authCheck, eventRouter);
app.use('/user',authCheck, userRouter);

// Serve static assets if in production

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT)