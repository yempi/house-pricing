const express = require('express')
const app = express();

const sqlite3 = require('sqlite3')
const Promise = require('bluebird')

// Connect to Database
this.db = new sqlite3.Database('mock_database.sqlite', (err) =>{
    if (err){
        console.log('Could not connect to database', err)
    } else{
        console.log('Connected to database')
    }
})

app.get('/', (req, res) => {
    res.send("hello world")
    
})

app.listen(8000, () => {
    console.log('listening on localhost:8000')
})