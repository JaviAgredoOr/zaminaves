const mongoose = require('mongoose');

const URI = 'mongodb+srv://zamidb:zamidb@cluster0.kigum.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI,{
    useNewUrlParser:true
})
.then(db => console.log('db conectada'))
.catch(error => console.error(error));

module.exports = mongoose;