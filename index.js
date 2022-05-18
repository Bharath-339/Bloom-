const express = require("express")
const path = require("path")
const app = express();
const hbs = require('hbs');

var exphbs  = require('express-handlebars');
app.use(express.json());
require("./db")

app.set('view engine', '.hbs'); 
const User = require("./schema");
app.use(express.static("public"))
hbs.registerPartials(__dirname + '/views','{{footer}}')

app.get("/",(req,res)=>{
    res.render('index'); 
})

app.get("/aboutUs", (req,res)=> {
    res.render(path.join(__dirname+"/views/aboutus.hbs"))
})

app.get("/product", (req,res)=>{
    res.render(path.join(__dirname+"/views/product.hbs"))
})

app.get("/shop", (req,res)=>{
    res.render(path.join(__dirname+"/views/shop.hbs"))
})

app.get("/index", (req,res)=>{
    res.render(path.join(__dirname+"/views/index.hbs"))
})

app.get("/login", (req,res)=>{
    res.render('login')
})


// creating a new user in database

app.post("/register", async(req,res)=>{
    const {name,email,psw,psw_repeat} = req.body;
    try {
        const user = {
            name,
            email,
            psw,
            psw_repeat
        }
        await User.save();
        console.log("USER REGISTERED")
        res.redirect("/");

    } catch (error) {
        res.redirect("/login")
    }
})




const port = 5000;

app.listen(port, ()=>{
    console.log(`Server started on ${port}`);
})

// -------------------------------------------------------- partials-----------------------------------------

// const express = require('express');
// const app = express(); 
// const hbs = require("hbs");
// const path = require("path");
// const res = require('express/lib/response');

// app.set('view engine','hbs');
// const css_path = path.join(__dirname,'/public');
// app.use(express.static(css_path));


// app.get("/",(req,res)=>{
//     res.render('index'); 
// })

// app.get("/", (req,res)=>{
//     res.sendFile('/index.hbs')
// })

// app.get("/about", (req,res)=> {
//     res.sendFile(path.join(__dirname+"/public/aboutus.html"))
// })

// app.get("/product", (req,res)=>{
//     res.sendFile(path.join(__dirname+"/public/product.html"))
// })

// app.get("/shop", (req,res)=>{
//     res.sendFile(path.join(__dirname+"/public/shop.html"))
// })

// hbs.registerPartials(__dirname + '/views','{{footer}}')



// app.listen('5000',()=>{
//     console.log("Server started...!")
// })