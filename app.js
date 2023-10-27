const express = require("express");
const path= require('path');
const app=express();
//for auto reloading on the browser 
const livereload =require("livereload");
const connectLivereload = require("connect-livereload");
const liveReloadServer=livereload.createServer();
//liveReloadServer.watch(__dirname); to watch the whole project
liveReloadServer.watch(path.join(__dirname, 'app.js'));
liveReloadServer.watch(path.join(__dirname,'/views'));
liveReloadServer.watch(path.join(__dirname,'/views/styles'));
app.use(connectLivereload());

app.use('/img',express.static(path.join(__dirname, 'views/images')))
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')))
app.use('/styles',express.static(path.join(__dirname, 'views/styles')))
app.use('/jsTW', express.static(path.join(__dirname, 'scripts')));


app.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/indexBS.html'))
     //res.sendFile(path.join(__dirname,'views/indexTW.html'))
   
})
app.listen(5000,()=>{
    console.log('listen on port '+ 5000)
})