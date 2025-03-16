const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


//birm2476 0KxAvmyVKU2npFJn



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
        const myDB = client.db("newDB");
        const myColl = myDB.collection("customers");
        app.post('/customers',async(req,res)=>{
            const user = req.body;
            console.log("new user: ",user);
            const result = await myColl.insertOne(user);
            res.send(result);
        })
        app.get('/customers', async(req, res) => {
            // const users = await myColl.find().toArray();
            const cursor = myColl.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/customers/:id',async(req,res)=>{
            const id = req.params.id;
            const query = {_id:new ObjectId(id)};
            const result = await myColl.findOne(query);
            res.send(result);
        })
        app.put("/customers/:id",async (req,res)=>{
            const id = req.params.id;
            const customer = req.body;
            console.log("user to update: ",customer);
            const filter = {_id:new ObjectId(id)};
            const updateCustomer = {
                $set:{
                    name: customer.name,
                    email: customer.email
                }
            }
            const result = await myColl.updateOne(filter, updateCustomer);
            res.send(result);
        })
        app.delete('/customers/:_id',async(req, res)=>{
            const id = req.params._id;
            console.log("deleted user id: ",id);
            const query = {_id:new ObjectId(id)};
            const result = await myColl.deleteOne(query);
            res.send(result);
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.log(err);
    }
}
run().catch(console.dir);





app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log('data showing from port: ',port);
})