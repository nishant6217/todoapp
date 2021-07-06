const express=require('express');
const path=require('path');
const db=require("./config/mongoose");
const Task = require('./models/task');

const app=express();
const port=7000;
app.use(express.urlencoded());

// use express router
//app.use('/',require('./routes'));//app using this route
// set up the view engines

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static("/assets"));


app.get('/',function(req,res){
    Task.find({},function(err,task){
        if(err){
            console.log("error in finding the task");
            return;
        }
        return res.render('home',{
            task_list:task
        });

    });
});
app.post('/create-task',function(req,res){
    Task.create({
        name:req.body.name,
        category:req.body.category,
        date:req.body.date,
    },function(err,newTask){
        if(err){
            console.log("error in creating task");
            return;
        }
        console.log('*********',newTask);
        return res.redirect('back');
    });
});

app.get('/delete-task',function(req,res){
   let id= req.query;
   console.log(id);
    var count=Object.keys(id).length;
    for(let i=0;i<count;i++)
    {
        Task.findByIdAndDelete(Object.keys(id)[i],function(err){
                if(err)
                {
                console.log('error in deleting task');
                return;
                }
            });
    } 
    return res.redirect('back'); 
});




app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running the server : ${err}`);

    }
    console.log(`server is running on port:${port}`);

});