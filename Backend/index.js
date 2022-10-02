import express from 'express';
const PORT = 3001
const app = express();

app.use(express.json());

app.post("/login",(req,res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});

app.listen(PORT, (e)=>{
    console.log("Server started at port  " + PORT);
});



