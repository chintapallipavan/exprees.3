const express=require("express");
const app=express();

function middleware(req,res,next){
    console.log("hi")
    next();
}



app.get('/',middleware,function(req,res){
    res.send(' ( { key1: value })')
})

app.listen(3000,()=>{
    console.log(`sever run`)
})