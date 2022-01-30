//import fs from "fs";
// fs.writeFile("fsfile.js",
// "console.log(\"New fs file created through the fs module\");var x=10;console.log(x)"
// ,(err)=>{
// console.log(err);    
// });
const MongoClient=require("mongodb").MongoClient;
const connectmongo=async()=>{
    const uri="mongodb+srv://bilal42011:bilalmalik10@cluster0.azkuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client= new MongoClient(uri);
try{
 await client.connect();
//await listdatabases(client);
await adddocument(client,{    
})
}
catch(err){
    console.log(err);
}
finally{
    client.close();
}
}
const listdatabases=async(client)=>{
    const databases=await client.db().admin().listDatabases();
    console.log(databases);
}
const adddocument=async(client,insertiondata)=>{
const result=await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(insertiondata);
console.log("Document inserted Successfully with id:", result.id);
console.log("Result is: ", result);
}
connectmongo();