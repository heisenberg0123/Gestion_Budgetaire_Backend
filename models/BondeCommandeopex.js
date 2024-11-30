module.exports =(sequelize,DataTypes) =>{

    const BondeCommandeo=sequelize.define("bondecommandeo",{
        engage:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
      
       
        idOpex:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:"opexes",
                key:'id'
            }
          
        },
       
        fournisseur:{
            type:DataTypes.STRING,
            allowNull:false
    
        },
       
       ref:{
            type:DataTypes.STRING,
            allowNull:false
    
        }
    })
        return BondeCommandeo;
    }