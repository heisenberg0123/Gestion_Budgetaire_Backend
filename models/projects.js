module.exports =(sequelize,DataTypes) =>{

    const Projects=sequelize.define("projects",{
       
       
      
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
        idBondecommadeo:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'bondecommandeos',
                key:'id'
            }
        },
        idFactures:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'factures',
                key:'id'
            }
        },
        idFactureso:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'facturesos',
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
       
       
       statut:{
            type:DataTypes.STRING,
            allowNull:false
    
        }
    })
        return Projects;
    }