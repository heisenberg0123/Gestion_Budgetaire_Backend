const db =require('../models');


const BondeCommande =db.bondecommande;

const addBondeCommande =async(req,res)=>{
    let nvBondeCommande={
        ref:req.body.ref,
        engage:req.body.engage,
        idOpex:req.body.idOpex,
        idCapex:req.body.idCapex,
        fournisseur:req.body.fournisseur
    }
    const bondecommande=await BondeCommande.create(nvBondeCommande)
    res.status(200).send(bondecommande)
    console.log(bondecommande)
}

const getAllBondeCommande =async(req,res)=>{
    let bondecommande =await BondeCommande.findAll({})
    res.status(200).send(bondecommande)
}

const getBondeCommandeByCode=async(req,res)=>{
    let id=req.params.id
    let bondecommande =await BondeCommande.findAll({where:{id:id}})
    res.status(200).send(bondecommande)
    console.log(bondecommande)
}

const deleteBondeCommande=async(req,res)=>{
    let id =req.params.id;
    await BondeCommande.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifBondeCommande=async(req,res)=>{
    let id =req.params.id;
    let bondecommande = await BondeCommande.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}



const getBondeCommandeByCapex=async(req,res)=>{
    let id=req.params.id
    let bondecommande =await BondeCommande.findAll({where:{idCapex:id}})
    res.status(200).send(bondecommande)
    console.log(bondecommande)
}
const deleteBondeCommandeByCapex=async(req,res)=>{
    let id =req.params.id;
    await BondeCommande.destroy({where:{idCapex:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

module.exports ={
    addBondeCommande,   
    getAllBondeCommande,
    getBondeCommandeByCode,
    deleteBondeCommande,
    modifBondeCommande,
    getBondeCommandeByCapex,
    deleteBondeCommandeByCapex
}