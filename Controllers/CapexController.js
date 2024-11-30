const db =require('../models');

const Capex =db.capex;

const addCapex =async(req,res)=>{
    let nvCapex={
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
        commantaire :req.body.commantaire,
        realise :req.body.realise,
        forecast :req.body.forecast,
        codecg:req.body.codecg,
        totalbudget:req.body.totalbudget
    }
    const capex=await Capex.create(nvCapex)
    res.status(200).send(capex)
    console.log(capex)
}

const getAllCapex =async(req,res)=>{
    let capex =await Capex.findAll({})
    res.status(200).send(capex)
}

const getCapexByCode =async(req,res)=>{
    let id=req.params.id
    let capex =await Capex.findAll({where:{id:id}})
    res.status(200).send(capex)
    console.log(capex)
}

const deleteCapex=async(req,res)=>{
    let id =req.params.id;
    await Capex.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifCapex=async(req,res)=>{
    let id =req.params.id;
    let capex = await Capex.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}

module.exports ={
    addCapex,
    getAllCapex,
    getCapexByCode,
    deleteCapex,
    modifCapex
}