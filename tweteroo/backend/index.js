import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const usuario = [{
    username: '',
    avatar: '',
}];

const tweets = [{
    username: '',
    tweet: '',
}]

app.post('/sign-up', (req, res) => {
    usuario.push(
        {
            username: req.body.username,
            avatar: req.body.avatar,
        })
    res.send("ok")
});


app.listen(5000);