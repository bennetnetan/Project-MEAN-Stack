const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/CRUDDB', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in MongoDB Connection: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;