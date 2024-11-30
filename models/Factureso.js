module.exports =(sequelize,DataTypes) =>{

    const Factureso=sequelize.define("factureso",{
        realise:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
      
       
        idBondecommadeo:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'bondecommandeos',
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
        return Factureso;
    }