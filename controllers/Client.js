let express =require("express");

let db =require("../models");
let authenticated=require('../config/auth');



function router(app) {

    // post client 

    app.post("/api/client/create",(req,res,next)=>{
        db.Client.create({

            f_Name:"agosto",
            l_Name:"mark",
            email:"mark@gmail.com",
            contact:"0764554728",
            pwd:"64373dvhsb"
        }).then((newclient)=>{
            res.json(newclient)
        }).catch((err)=>{
            next(err)
        })
    })
app.get('/api/view/clients',(req,res,next)=>{
    db.Client.findAll({
        attributes:["f_name","l_name","email","contact"]
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        next(err)
    })

})
// client -- profile
app.get('/api/client/:id',(req,res,next)=>{
    db.Client.findAll({
        attributes:["f_name","l_name","email","contact"],
        where:{
            id:3
        }
    }).then((profile)=>{
        res.json(profile)
    }).catch((err)=>{
        next(err)
    })
})
// update --profile

app.patch('/api/Client/update/:id',(req,res,next)=>{
    db.Client.update({
      f_name:"agosto",
      l_name:"mark",
      email:"mark@gmail.com",
      contact:"0764554728"
    },{
        where:{
            id:3
        }
    }).then((update)=>{
        res.json(update)
    }).catch((err)=>{
        next(err)
    })
})

// creates product info 

app.post('/api/product/info/post',(req,res,next)=>{
    const date= Date.now();
    db.Product.create({
        productid:9087900,
        Date:date,
        destination:"makunga",
        is_delivered:false,
        reciever_contact:"9648383893"
    }).then((productinfo)=>{
      res.json(productinfo)
    }).catch((err)=>{
        next(err)

    })
})
}
module.exports=router;