import express from 'express';
import path from 'path';

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send("Welcome to Alc currency converter");
});

app.listen(8080, () => console.log('Andela Learning Community Currency Converter listening at 8080!'))