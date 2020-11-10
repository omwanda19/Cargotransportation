let bcrypt =require("bcrypt");
module.exports=(Sequelize,DataTypes)=>{

   let Client =Sequelize.define("Client",{

       f_Name:{
           type:DataTypes.STRING,
           allowNull:false
           
       },
       l_Name:{
           type:DataTypes.STRING,
           allowNull:false
           
       },
       email:{
           type:DataTypes.STRING,
           allowNull:false,
           validate:{
               isEmail:true
           }
       },
       contact:{
           type:DataTypes.STRING,
           allowNull:false,
           
       },
       pwd:{
           type:DataTypes.STRING,
           allowNull:false,
           validate:{
               len:[8]
           }
       }


   },
   {
       freezeTableName:true,
       timestamps:false
   });Client.associate=(models)=>{
       Client.hasMany(models.Product,
        {
            foreignkey:{
                allowNull:false
            }
        })
   }
   return Client;
}