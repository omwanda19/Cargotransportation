let bcyript= require("bcrypt");

module.exports=(Sequelize,DataTypes)=>{
    let Deliverer =Sequelize.define("Deliverer",{

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
            validate:{
                len:[10]
            }
            
        },
        pwd:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }

        }


    },{
        freezeTableName:true,
        timestamps:false
    },
    {
        instanceMethods:{
            validpassword:function(pwd){
                return bcrypt.compareSync(pwd,this.pwd);
            }
        },
    });
    Deliverer.beforeCreate((Deliverer,options)=>{
        Deliverer.pwd=bcrypt.hashSync(Deliverer.pwd,
            bcrypt.genSaltSync(10),null);
            
    })

    Deliverer.associate=(models)=>{
        Deliverer.hasMany(models.Product,{
            foreignkey:{
                allowNull:false 
            }
        })

    }

    
    return Deliverer;
}