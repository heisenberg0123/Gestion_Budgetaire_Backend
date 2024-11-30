module.exports =(sequelize,DataTypes) =>{

    const BondeCommande=sequelize.define("bondecommande",{
        engage:{
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
        return BondeCommande;
    }