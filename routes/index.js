const express = require('express')
const router = express.Router()

router.get('/register',(req,res)=>{
    return res.render('authentication/register',{title:'Register page'})
})