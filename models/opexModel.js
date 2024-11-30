module.exports =(sequelize,DataTypes) =>{

    const Opex=sequelize.define("opex",{
        libelleProjet:{
            type:DataTypes.STRING,
            allowNull:false
        },
        code:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rubrique:{
            type:DataTypes.STRING,
            allowNull:false
        },
        libelleArticle:{
            type:DataTypes.STRING,
            allowNull:false
        },
        rubriquePrincipale:{
            type:DataTypes.STRING,
            allowNull:false
        },
        sousRubrique:{
            type:DataTypes.STRING,
            allowNull:false
        },
        budgetInitiale:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        extension:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        diminution:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        codeJira:{
            type:DataTypes.STRING,
            allowNull:false
        },
        taxe:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        devise:{
            type:DataTypes.STRING,
            allowNull:false
        },
     
        tauxDevise:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        codecg:{
            type:DataTypes.STRING,
            allowNull:false
        }
       ,
             
                
        totalbudget:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
     
    })

   
    return Opex;
}