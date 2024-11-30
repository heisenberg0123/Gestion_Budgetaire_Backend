

const db =require('../models');


const BondeCommandeo =db.bondecommandeo;

const addBondeCommandeo =async(req,res)=>{
    let nvBondeCommandeo={
        ref:req.body.ref,
        engage:req.body.engage,
        idOpex:req.body.idOpex,
       
        fournisseur:req.body.fournisseur
    }
    const bondecommandeo=await BondeCommandeo.create(nvBondeCommandeo)
    res.status(200).send(bondecommandeo)
    console.log(bondecommandeo)
}

const getAllBondeCommandeo =async(req,res)=>{
    let bondecommandeo =await BondeCommandeo.findAll({})
    res.status(200).send(bondecommandeo)
}

const getBondeCommandeoByCode=async(req,res)=>{
    let id=req.params.id
    let bondecommandeo =await BondeCommandeo.findAll({where:{id:id}})
    res.status(200).send(bondecommandeo)
    console.log(bondecommandeo)
}

const deleteBondeCommandeo=async(req,res)=>{
    let id =req.params.id;
    await BondeCommandeo.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifBondeCommandeo=async(req,res)=>{
    let id =req.params.id;
    let bondecommandeo = await BondeCommandeo.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const getBondeCommandeByOpex=async(req,res)=>{
    let id=req.params.id
    let bondecommandeo =await BondeCommandeo.findAll({where:{idOpex:id}})
    res.status(200).send(bondecommandeo)
    console.log(bondecommandeo)
}
const deleteBondeCommandeByOpex=async(req,res)=>{
    let id =req.params.id;
    await BondeCommandeo.destroy({where:{idOpex:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

module.exports ={
    addBondeCommandeo,   
    getAllBondeCommandeo,
    getBondeCommandeoByCode,
    deleteBondeCommandeo,
    modifBondeCommandeo,
    getBondeCommandeByOpex,
    deleteBondeCommandeByOpex
}