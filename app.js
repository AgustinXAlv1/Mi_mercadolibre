const express= require("express");
const app=express();
const path= require("path")

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))

app.set('puerto',process.env.PORT || 3000);

app.listen(app.get('puerto') , () => console.log(`Servidor abierto... ${app.get('puerto')}`));

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


