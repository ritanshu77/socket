const express=require("express");
const path=require("path");
const publicPath=path.join(__dirname,'public/');
let app=express();
let port=3000;
app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`serevr start on port ${port}`)
})