module.exports =(sequelize,DataTypes) =>{

    const Factures=sequelize.define("factures",{
        realise:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
      
        idCapex:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'capexes',
                key:'id'
            }
        },
        idBondecommade:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'bondecommandes',
                key:'id'
            }
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
        return Factures;
    }