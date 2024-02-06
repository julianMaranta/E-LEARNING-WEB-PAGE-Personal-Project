const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/products', (req,res)=>{
    res.sendFile(__dirname + '/views/products.html');
});
app.get('/productsCategory', (req,res)=>{
    res.sendFile(__dirname + '/views/productsCategory.html');
});
app.get('/partners', (req,res)=>{
    res.sendFile(__dirname + '/views/partners.html');
});
app.get('/contacto', (req,res)=>{
    res.sendFile(__dirname + '/views/contacto.html');
});
app.get('/ayuda', (req,res)=>{
    res.sendFile(__dirname + '/views/ayuda.html');
});
