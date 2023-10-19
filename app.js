const express = require("express");
const path= require('path');
const app=express();
app.use('/img',express.static(path.join(__dirname, 'views/images')))
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/indexBS.html'))
})
app.listen(5000,()=>{
    console.log('listen on port '+ 5000)
})