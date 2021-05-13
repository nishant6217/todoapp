const express=require('express');
const app=express();
const port=7000;

// use express router
app.use('/',require('./routes'));//app using this route

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running the server : ${err}`);

    }
    console.log(`server is running on port:${port}`);

});