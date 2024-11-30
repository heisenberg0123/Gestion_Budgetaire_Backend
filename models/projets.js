module.exports =(sequelize,DataTypes) =>{

    const Projets=sequelize.define("projets",{
       
       
      
     
   
        idBondecommadeo:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references:{
                model:'bondecommandeos',
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
        return Projets;
    }