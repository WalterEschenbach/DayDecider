

const stages = [];

stages.push({
  '$match': {
    'email': "dabears1.1.1@gmail.com"
  }
});

stages.push({
  '$lookup': {
    'from': 'events',
    'localField': 'events',
    'foreignField': '_id',
    'as': 'events'
  }
});

stages.push({
  '$unwind': {
    'path': '$events',
    'preserveNullAndEmptyArrays': true
  }
});

stages.push({
  '$unwind': {
    'path': '$events.group',
    'preserveNullAndEmptyArrays': true
  }
});

stages.push({
  '$lookup': {
    'from': 'users',
    'localField': 'events.group',
    'foreignField': 'email',
    'as': 'user'
  }
});

stages.push({
  '$lookup': {
    'from': 'dates',
    'localField': 'events.name',
    'foreignField': 'eventFocus',
    'as': 'selectedDates'
  }
})

stages.push({
  '$group': {
    '_id': '$events._id',
    'eventName': {
      '$first': '$events.name'
    },
    'members': {
      '$addToSet': '$user'
    },
    'selectedDates': {
      '$addToSet': '$selectedDates'
    }
  }
});



module.exports = stages;
