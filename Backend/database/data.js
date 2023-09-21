const {MongoClient} = require('mongodb');
const uri = process.env.uri;
const dbName = process.env.dbname;

let db=null;
module.exports ={
    connectToDb: (cb) =>{
        MongoClient.connect(uri)
        .then(client =>{
            db = client.db(dbName);
            cb();
        })
        .catch(err => cb(err));
    },
    postToDo: async (data) =>{
        const obj = {
            id: Math.floor(Math.random() * 1000000),
            Title: data.Title,
            Description: data.Description
        }
        try{
            const ack = await db.collection('todos').insertOne(obj)
            return ack;
        }
        catch(err){
            console.error(err)
        }
    },
    deleteToDo: async(data) =>{
        try{
            console.log(data);
            const ack = await db.collection('todos').deleteOne({ id : Number(data) });
            return ack;
        }
        catch(err){
            console.log(err);
        }
    },
    clearList: async() =>{
        try{
            const ack = await db.collection('todos').deleteMany({});
            return ack;
        }
        catch(err){
            console.error(err);
        }
    },
    getTodos: () =>{
        let data =[];
        return db.collection('todos').find({})
        .forEach( element => {
            const obj = {
                "id": element.id,
                "Title": element.Title,
                "Description": element.Description
            }
            data.push(obj);
        })
        .then( () => data)
        .catch(err => console.error(err));
    }
}