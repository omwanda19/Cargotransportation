
let express= require("express");
let bodyParser=require("body-parser");
let session =require("express-session");
let methodoverride = require("method-override");
let cookeparser= require("cookie-parser");
let db =require('./models');
let app =express();
app.use(bodyParser.json());
app.use(session({
    secret:'1sbye',
    resave:true,
    saveUninitialized:false
    
}));
app.use(cookeparser());
app.use(methodoverride("_method"));


app.use(bodyParser.urlencoded({extended:true}));

require("./controllers/Admin")(app);
require("./controllers/Deliverer")(app);
require("./controllers/product")(app);
require("./controllers/Client")(app);

const port = process.env.PORT || 5100;
db.sequelize.sync({force:false

}).then(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port} 🔥`)
    });
}).catch((err)=>{
    console.log(err);
}) 

