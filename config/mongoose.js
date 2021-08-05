const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mnink6217:mnink6217@cluster0.h7d35.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db =mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));
// up and running then print the message
db.once('open',function(){
    console.log('successfully connected to database');
});