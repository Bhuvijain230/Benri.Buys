const express = require('express');
const path = require ('path');
const bodyParser = require ('body-parser');
const knex = require('knex');

    const { Client } = require('pg');

    const client = new Client({
      user: 'postgres',
      host: '',
      database: 'benry',
      password: 'use@9psql',
      port: 5432, // default PostgreSQL port
    });

const app = express();

let initialpath = path.join(__dirname,"homepage");

app.use(bodyParser.json());
app.use(express.static(initialpath));
app.get ( 'index', (req, res)=>{res.sendFile(path.join(initialpath, "index.html"));})
app.get ('login', (req,res)=>{res.sendFile(path.join(initialpath,"login.html"));})
app.get ('register', (req,res)=>{res.sendFile(path.join(initialpath,"register.html"));})
app.post ('register-user', (req,res)=>{const {name,email,password}= req.body;
if(!name.length||!email.length||!password.length){
    res.json('fill all the fields');
}else{db("users").insert({
    name: name,
    email: email,
    password: password
})
.returning(["name", "emai"])
.then(data=>{
    res.json(data[0])})
    .catch(err=>{
        if(err.detail.includes('already exists')){
            res.json('email alreeady exists');
        }
    })
}
})
app.post ('login-user', (req,res)=>{const {email,password}= req.body;

db.select ('name','email')
.from('users')
.where({
    email:email,
    password: password
})
.then (data=>{
    if(data.length){
        res.json(data[0]);
    }else{
        res.json('email or password is incorrect')
    }
})
})

app.listen(5500,(req, res) =>{console.log('listening on poRT 5500.....')})