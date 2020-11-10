let express =require("express");

let db =require("../models");
let authenticated=require('../config/auth')
// find all admins 
function router(app){

    // add an instance of admin 

app.post('/api/Admin/create',(req,res,next)=>{
    db.Admin.create({
        f_Name:"reto",
       l_Name:"shitundo",
       email:"shitundo@gmail.com",
       contact:"0782822372",
       pwd:"teroftrr"

    }).then((newAdmin)=>{
        res.json(newAdmin)

    }).catch((err)=>{
        next(err)

    })
})

// change password feature 


app.get("/api/admin",(req, res,next) => {
  db.Admin.findAll({

  }).then((admin)=>{
      res.json(admin)

  }).catch((err)=>{
      next(err)
  })
});
// admin profile

app.get('/apiadmin/profile/:id',(req,res,next)=>{
    db.Admin.findAll({
        where:{
            id:3
        } 

    }).then((profile)=>{
        res.json(profile)

    }).catch((err)=>{
        next(err)

    })
});
 // update profile 
 app.patch('/api/admin/patch/:1d',(req,res,next)=>{
     db.Admin.update({
       f_Name:"atsali",
       l_Name:"samson",
       email:"samson@gmail.com",
       contact:"0782902920",
     },{
         where:{
             id:2
         }
     }
     ).then((data)=>{
   res.json(data)
     }).catch((err)=>{
         next(err)
     })
 })
 // remove deliverer 
 app.delete('/api/Deliverer/delete/:id',(req,res,next)=>{
     db.Deliverer.destroy({
         where:{
             id:3
         }
     }).then((removed)=>{
         res.json(removed)
     }).catch((err)=>{
         next(err);
     })
 })
 app.post('/api/Deliverer/create',(req,res,next)=>{
    db.Deliverer.create({
        f_Name:req.body.f_Name,
        l_Name:req.body.f_Name,
        email:req.body.f_Name,
        contact:req.body.f_Name,
        pwd:req.body.pwd
    
    }).then((newDeliverer)=>{
    res.json(newDeliverer)
    }).catch((err)=>{
        next(err)
    })
    }
    )

    // asigning product to deliverer

    app.get('/api/assign/Deliverer/:id',(req,res,next)=>{
        db.Product.findOne({
       where:{
           id:req.params.id
       }
        }).then((product)=>{
            db.Deliverer.post({
                productId:product.req.params.id
            }).then((assigned)=>{
                res.json(assigned)
            }).catch((err)=>{
                next(err)
            })

        }).catch((err)=>{
            next(err)
        })
    })

    
}
    module.exports=router;

