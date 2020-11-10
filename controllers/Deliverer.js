let  express= require("express");

let db =require("../models");
let authenticated=require('../config/auth')
function isloggedin(){
    if(req.isauthenticated())

     return next();
    res.redirect('/login')
}
function router(app){
// get all Delivers 
app.get('/api/Deliverer/get',(req,res,next)=>{
db.Deliverer.findAll({
}).then((data)=>{
res.json(data)
}).catch((err)=>{
    next(err);
})
})
// post --deliverer

//  deliver --profile
app.get('/api/Deliverer/:id',(req,res,next)=>{
    db.Deliverer.findAll({  
        where:{
            id:req.user.id
        }
    }).then((profile)=>{
        res.json(profile)
    }).catch((err)=>{
        next(err)
    })
})
// all products transported by deliverer 
app.get('/api/products/Deliverer/:id',(req,res,next)=>{
    db.Product.findAll({
        attributes:["productid","destination"],
        where:{
            DelivererId:2
        },
        include:[db.Admin]
    }).then((myproducts)=>{
        res.json(myproducts)
    }).catch((err)=>{
        next(err);
    })
})

}
module.exports=router;
