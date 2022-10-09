const express = require('express');
 const fs = require('fs');
 const db= require("./db.json");


 const app = express();
app.get("/", (req, res) => {
 
res.send("Welcome Satyaprakash!");
 
});

app.get("/posts", (req, res) => {
    let {name, messageMatch }= req.query;
    let posts= db.posts;
    if (name ){
    posts= posts.filter((post) => post.name === name);
    }
    if (messageMatch) {
    posts = posts.filter((post) =>post.message.includes(messageMatch));
    }
    res.send(posts);
});


app.get("/posts/:id", (req, res) => {
    let id= req.params.id;
    // console.log(typeof id,id);
let numId=Number(id);
let post= db.posts.find((post) => post.id ===numId);
if(post){
    res.send(posts);

}else{
    res.status(404).send(`post with ID:{id} not found`);
}
   
    });


    app.post("/posts", (req, res) => {
        db.posts.push({
        id: Date.now(),
        message: "Hello, this is 3rd message, just added",
        });
        fs.writeFile("./ src/db.json", JSON.stringify(db), "utf-8", () => {
        res.send(db.posts);
        });
        });

    app.delete("/posts/:id", (req, res) => {
        let id =req.params.id;
let numId = Number(id);
let posts = db.posts.filter((post) => post.id !== numId);
db.posts =posts;

fs.writeFile("./ src/db.json", JSON.stringify(db), "utf-8", () => {
res.send("delete success");
});
    
        });


        app.patch("/posts", (req, res) => {
            res.send( "this is the patch API!");
            });

            
    



//listen
app.listen(8080,()=>{

    console.log("Listening on http://localhost:8080");
});