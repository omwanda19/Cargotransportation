 let bcrypt =require("bcrypt");
 module.exports=(Sequelize,DataTypes)=>{

    let Admin =Sequelize.define("Admin",{

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
    },
    {
        instanceMethods:{
            validpassword:function(pwd){
                return bcrypt.compareSync(pwd,this.pwd);
            }
        },
    })
    Admin.beforeCreate((Admin,options)=>{
        Admin.pwd=bcrypt.hashSync(Admin.pwd,
            bcrypt.genSaltSync(10),null);
            
    });
    return Admin;
}