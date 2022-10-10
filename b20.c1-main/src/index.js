 const express=require('express');
 const fs=  require('fs');
 const person= require('../person.json');

 const app = express();
 app.get("/",(req, res) => {
  res.send ("welcome to EV");  
    })
 app.get ("/person",(req, res) => {
 res.send(person);
 });

app.get("/person/:id",(req, res) => {
 let id = req.params.id;
 let numId=Number(id);
 let person=person.person.find((person) => person.id === numId);
 if(person){
    res.send(person);
}else{
    res.status(404).send(`person with Id:{id} not found`);
 }

});



app.delete("/person/:id",(req, res) => {
    let id = req.params.id;
    let numId=Number(id);
    let person=person.person .filter((person) => person.id !== numId);
     fs.writeFile("../src/person.json",JSON.stringify(db),"utf-8",()=>{
        res.send("deleted")
     })
   });

   app.post("/person", (req, res) => {
    db.posts.push({
    id: Date.now(),
    message: "Hello, this is 3rd message, just added",
    });
    fs.writeFile("./ src/db.json", JSON.stringify(db), "utf-8", () => {
    res.send(db.person);
    });
    });


    app.get("/person?birth=India",(req, res) => {
        let id = req.params.id;
        let place=Number(place);
        let person=person.person.find((person) => person.place === place);
        if(person){
           res.send(person);
       }else{
           res.status(404).send(`person with Id:{id} not found`);
        }
       
       });




       app.get("/person?current=India",(req, res) => {
        let id = req.params.id;
        let current=Number(Chima);
        let person=person.person.find((person) => person.China=== person);
        if(person){
           res.send(person);
       }else{
           res.status(404).send(`person with Id:{id} not found`);
        }
       
       });

   


app.listen(8000,()=>{
    console.log("listening on http://localhost:8000");
 })