const db =require('../models');

const Opex =db.opex;

const addOpex =async(req,res)=>{
    let nvOpex={
        libelleProjet:req.body.libelleProjet,
        code:req.body.code,
        rubrique:req.body.rubrique,
        libelleArticle:req.body.libelleArticle,
        rubriquePrincipale:req.body.rubriquePrincipale,
        sousRubrique:req.body.sousRubrique,
        budgetInitiale:req.body.budgetInitiale,
        extension:req.body.extension,
        diminution:req.body.diminution,
        codeJira:req.body.codeJira,
        taxe:req.body.taxe,
        devise:req.body.devise,
        tauxDevise:req.body.tauxDevise,
        codecg:req.body.codecg,
        totalbudget:req.body.totalbudget,
    }
    const opex=await Opex.create(nvOpex)
    res.status(200).send(opex)
    console.log(opex)
}

const getAllOpex =async(req,res)=>{
    let opex =await Opex.findAll({})
    res.status(200).send(opex)
}

const getOpexByCode =async(req,res)=>{
    let id=req.params.id
    let opex =await Opex.findAll({where:{id:id}})
    res.status(200).send(opex)
    console.log(opex)
}

const deleteOpex=async(req,res)=>{
    let id =req.params.id;
    await Opex.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    
}

const modifOpex=async(req,res)=>{
    let id =req.params.id;
    let opex = await Opex.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}

module.exports ={
    addOpex,
    getAllOpex,
    getOpexByCode,
    deleteOpex,
    modifOpex
}