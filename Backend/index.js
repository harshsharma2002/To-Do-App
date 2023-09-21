require('dotenv').config();
const express = require('express');
const cors = require('cors');

const {connectToDb,postToDo, deleteToDo, clearList, getTodos} = require('./database/data.js')

const app = express();


const port = process.env.port || 3000;
app.use(express.json());
app.use(cors());

connectToDb((err) => {
    if(!err){
        app.listen(port,()=>{
            console.log('Connected to database and server started at port:',port);
        })
    }
    else{
        console.error(err);
    }
});

app.post("/posttodo", async (req,res) =>{
    try{
        const data = await postToDo(req.body);
        console.log(data);
        res.json(data);
    }
    catch(err){
        throw err;
    }
});

app.post("/deletetodo", async (req,res) =>{
    try{
        console.log(req.body);
        const data = await deleteToDo(req.body.id);
        res.json(data);
    }
    catch(err){
        console.error(err);
    }
});

app.post("/clear",async(req,res) =>{
    try{
        const data = await clearList();
        res.json(data);
    }
    catch(err){
        console.error(err);
    }
});

app.post("/gettodos",async(req,res) =>{
    try{
        const data = await getTodos();
        res.json(data);
    }
    catch(err){
        console.error(err);
    }
});


