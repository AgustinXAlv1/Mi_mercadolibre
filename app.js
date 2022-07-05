const express= require("express");
const app=express();

const path= require("path")
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))

const port = process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log("Servidor abierto...");
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
})

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
})

​
app.listen(port, () => console.log(`Servidor abierto... ${port}`));