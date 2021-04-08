const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3030;
const mongoose = require('mongoose');

app.use(express.json())

app.use(cors())

mongoose.connect('mongodb+srv://weschenbach:losangeles29@tutorialgel.7rqbr.mongodb.net/DayDecider?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=> console.log('connected to DB'))
.catch(error => console.log(error))



app.get('/', (req, res) => {
    res.send('Hello World')
})

const eventRouter = require('./routes/event')

app.use('/event', eventRouter);

app.listen(PORT)