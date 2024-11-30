const db =require('../models');

const Utilisateurs =db.utilisateurs;

const addUtilisateur =async(req,res)=>{
    let nvUtilisateur={
        nom:req.body.nom,
        prenom:req.body.prenom,
        email:req.body.email,
        motdepasse:req.body.motdepasse,

                role:req.body.role,

    }
    const utilisateurs=await Utilisateurs.create(nvUtilisateur)
    res.status(200).send(utilisateurs)
    console.log(utilisateurs)
}

const getAllUtilisateur =async(req,res)=>{
    let utilisateurs =await Utilisateurs.findAll({})
    res.status(200).send(utilisateurs)
}

const getUtilisateurByCode =async(req,res)=>{
    let id=req.params.id
    let utilisateurs =await Utilisateurs.findAll({where:{id:id}})
    res.status(200).send(utilisateurs)
    console.log(utilisateurs)
}

const deleteUtilisateur=async(req,res)=>{
    let id =req.params.id;
    await Utilisateurs.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifUtilisateur=async(req,res)=>{
    let id =req.params.id;
    let utilisateurs = await Utilisateurs.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}



const login = async(req,res)=>{
    const{email,motdepasse}=req.body;
    
    const utilisateurs=await Utilisateurs.findOne({where:{email:email}})
    if(utilisateurs && (motdepasse==utilisateurs.motdepasse)){
        
        
        
        res.status(200).json(utilisateurs);
        console.log(utilisateurs)
    }else{
        res.status(400).send("not valid")
        console.log('not valid')
    }
}
module.exports ={
    login,
    addUtilisateur,
    getAllUtilisateur,
    getUtilisateurByCode,
    deleteUtilisateur,
    modifUtilisateur
}