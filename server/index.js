const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


//birm2476 0KxAvmyVKU2npFJn




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://birm2476:0KxAvmyVKU2npFJn@cluster0.w7fyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const myDB = client.db("myDB");
    const myColl = myDB.collection("usersDB");
    app.post('/users',async(req,res)=>{
        const user = req.body;
        console.log("new user: ",user);
        const result = await myColl.insertOne(user);
        res.send(result);
    })
    app.get('/users',async(req,res)=>{
        const users = await myColl.find().toArray();
        res.send(users);
    })
    app.delete('/users/:id',async(req,res)=>{
        const id = req.params.id;
        const query = {_id:new ObjectId(id)};
        const result = await myColl.deleteOne(query);
        res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }catch(e){
        console.log(e);
    }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log('data showing from port: ',port);
})