const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    user: "erikToala",
    host: "127.0.0.1",
    password: "Mysql",
    port: "3307",
    database: "diabeticshoe"
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const height = req.body.height;
    const stage = req.body.stage;
    const gender = req.body.gender;

    db.query('INSERT INTO paciente (name, lastname,age, height, stage, gender) VALUES (?,?,?,?,?,?)',
    [name, lastname, age, height, stage, gender],
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted")
        }
    }
    );
});


app.get("/pacientes", (req, res) => {
    db.query("SELECT * FROM paciente", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM paciente WHERE id = ?", id , (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
});