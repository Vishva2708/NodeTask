const {MongoClient}=require("mongodb")
const url = "mongodb://127.0.0.1:27017";
const client=new MongoClient(url)

async function main() {
    await client.connect()
    console.log("Mongodb connected")

    const db=client.db("mydb")
    const users=db.collection("users")

    await users.insertOne({name:"vishu",age:21,city:"ahemdabad"})

    await users.insertMany([{name:"vishu",age:21,city:"ahemdabad"},
        {name:"sanju",age:28,city:"vastral"}
    ])
    const allData = await users.find().toArray()
    console.log("All Users:", allData)
}
main()