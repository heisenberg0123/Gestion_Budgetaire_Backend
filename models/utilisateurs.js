module.exports =(sequelize,DataTypes) =>{

    const Utilisateurs=sequelize.define("utlisateurs",{
        nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        prenom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false
        },

        motdepasse:{
            type:DataTypes.STRING,
            allowNull:false
        },
       
       
      

           })
         

    
    return Utilisateurs;
}