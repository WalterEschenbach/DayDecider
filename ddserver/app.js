const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3030;

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const eventRouter = require('./routes/event')

app.use('/event', eventRouter);

app.listen(PORT)