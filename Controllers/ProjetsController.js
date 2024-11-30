const db =require('../models');


const Projets =db.projets;

const addProjets =async(req,res)=>{
    let nvProjets={
        idFactureso:req.body.idFactureso,
        idOpex:req.body.idOpex,
        idBondecommadeo:req.body.idBondecommadeo,
        statut:req.body.statut,
    }
    const projets=await Projets.create(nvProjets)
    res.status(200).send(projets)
    console.log(projets)
}

const getAllProjets =async(req,res)=>{
    let projets =await Projets.findAll({})
    res.status(200).send(projets)
}

const getProjetsByCode=async(req,res)=>{
    let id=req.params.id
    let projets =await Projets.findAll({where:{id:id}})
    res.status(200).send(projets)
    console.log(projets)
}

const deleteProjets=async(req,res)=>{
    let id =req.params.id;
    await Projets.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifProjets=async(req,res)=>{
    let id =req.params.id;
    let projets = await Projets.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}

const modifByidOpex=async(req,res)=>{
    let id =req.params.id;
    let projets = await Projets.update(req.body,{where:{idOpex:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")


}


const deleteProjetsByopex=async(req,res)=>{
    let id =req.params.id;
    await Projets.destroy({where:{idOpex:id}})
    res.status(200)
}

const deleteProjetsByBandeo=async(req,res)=>{
    let id =req.params.id;
    await Projets.destroy({where:{idBondecommadeo:id}})
    res.status(200)
}
const modifProjetsByidBandeo=async(req,res)=>{
    let id =req.params.id;
    let projets = await Projets.update(req.body,{where:{idBondecommadeo:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const getProjetsByBandeo=async(req,res)=>{
    let id=req.params.id
    let projets =await Projets.findAll({where:{idBondecommadeo:id}})
    res.status(200).send(projets)
    console.log(projets)
}




const deleteProjetsByFact=async(req,res)=>{
    let id =req.params.id;
    await Projets.destroy({where:{idFactureso:id}})
    res.status(200)
}
const modifProjetsByidFact=async(req,res)=>{
    let id =req.params.id;
    let projets = await Projets.update(req.body,{where:{idFactureso:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const getProjetsByFact=async(req,res)=>{
    let id=req.params.id
    let projets =await Projets.findAll({where:{idFactureso:id}})
    res.status(200).send(projets)
    console.log(projets)
}





module.exports ={
    addProjets,   
    getAllProjets,
    getProjetsByCode,
    deleteProjets,
    modifProjets,
    modifByidOpex,
    deleteProjetsByBandeo,
    deleteProjetsByopex,
    modifProjetsByidBandeo,
    getProjetsByBandeo,
    deleteProjetsByFact,
    modifProjetsByidFact,
    getProjetsByFact
  
}