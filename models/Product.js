module.exports=(Sequelize,DataTypes)=>{
    let Product =Sequelize.define("Product",{
        productid:{
            type:DataTypes.STRING,
            allowNull:false
            
        },

        DateSubmitted:{
            type:DataTypes.STRING,
            
            
        },
        is_delivered:{
            type:DataTypes.BOOLEAN,
            allowNull:false
            
        },
        destination:{
            type:DataTypes.STRING,
            allowNull:false
            
        },
        reciever_contact:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[10]
            }
        }
        
    },{
        freezeTableName:true,
        timestamps:false
    }
    );
    Product.associate=(models)=>{
        Product.belongsTo(models.Admin,{
            foreignkey:{
                allowNull:false
            }
        })
    }
    return Product;
    }
    
