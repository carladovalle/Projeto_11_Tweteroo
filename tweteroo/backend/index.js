import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
    users.push(req.body)
    res.send("ok")
});

app.listen(5000);