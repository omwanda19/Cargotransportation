
let express= require("express");

let db =require("../models");

function router(app){

app.get('/api/view/products',(req,res,next)=>{
     db.Product.findAll({
         attributes:["productid","DateSubmitted","destination","reciever_contact"]
     }).then((products)=>{
       res.json(products)
     }).catch((err)=>{
         next(err);
     })
 })

app.get("/api/product/:id",(req,res,next)=>{
    db.product.findAll({
        where:{
            id:req.params.id
        }
    }).then((product)=>{
        res.json(product)
    }).catch((err)=>{
        next(err)
    })
});
app.get("/api/get/product/data",(req,res,next)=>{
    db.Product.findAll({
        include:[db.Deliverer]
    }).then((data)=>{
   res.json(data)
    }).catch((err)=>{
        next(err)
    })
})
}
module.exports=router;