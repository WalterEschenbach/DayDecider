const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://weschenbach:Losangeles29@tutorialgel.7rqbr.mongodb.net/DayDecider?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!')
});
