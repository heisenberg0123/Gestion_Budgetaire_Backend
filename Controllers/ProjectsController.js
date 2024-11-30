const db =require('../models');


const Projects =db.projects;

const addProjects =async(req,res)=>{
    let nvProjects={
        idFactures:req.body.idFactures,
        idFactureso:req.body.idFactureso,
        idOpex:req.body.idOpex,
        idCapex:req.body.idCapex,
        idBondecommade:req.body.idBondecommade,
        idBondecommadeo:req.body.idBondecommadeo,
        statut:req.body.statut,
    }
    const projects=await Projects.create(nvProjects)
    res.status(200).send(projects)
    console.log(projects)
}

const getAllProjects =async(req,res)=>{
    let projects =await Projects.findAll({})
    res.status(200).send(projects)
}

const getProjectsByCode=async(req,res)=>{
    let id=req.params.id
    let projects =await Projects.findAll({where:{id:id}})
    res.status(200).send(projects)
    console.log(projects)
}

const deleteProjects=async(req,res)=>{
    let id =req.params.id;
    await Projects.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifProjects=async(req,res)=>{
    let id =req.params.id;
    let projects = await Projects.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const modifByidCapex=async(req,res)=>{
    let id =req.params.id;
    let projects = await Projects.update(req.body,{where:{idCapex:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const modifByidOpex=async(req,res)=>{
    let id =req.params.id;
    let projects = await Projects.update(req.body,{where:{idOpex:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")


}

const deleteProjectsBycapex=async(req,res)=>{
    let id =req.params.id;
    await Projects.destroy({where:{idCapex:id}})
    res.status(200)
}
const deleteProjectsByopex=async(req,res)=>{
    let id =req.params.id;
    await Projects.destroy({where:{idOpex:id}})
    res.status(200)
}

const deleteProjectsByBande=async(req,res)=>{
    let id =req.params.id;
    await Projects.destroy({where:{idBondecommade:id}})
    res.status(200)
}
const modifProjectsByidBande=async(req,res)=>{
    let id =req.params.id;
    let projects = await Projects.update(req.body,{where:{idBondecommade:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const getProjectsByBande=async(req,res)=>{
    let id=req.params.id
    let projects =await Projects.findAll({where:{idBondecommade:id}})
    res.status(200).send(projects)
    console.log(projects)
}







const deleteProjectsByFact=async(req,res)=>{
    let id =req.params.id;
    await Projects.destroy({where:{idFactures:id}})
    res.status(200)
}
const modifProjectsByidFact=async(req,res)=>{
    let id =req.params.id;
    let projects = await Projects.update(req.body,{where:{idFactures:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const getProjectsByFact=async(req,res)=>{
    let id=req.params.id
    let projects =await Projects.findAll({where:{idFactures:id}})
    res.status(200).send(projects)
    console.log(projects)
}

module.exports ={
    addProjects,   
    getAllProjects,
    getProjectsByCode,
    deleteProjects,
    modifProjects,
    modifByidCapex,
    modifByidOpex,
    deleteProjectsBycapex,
    deleteProjectsByBande,
    deleteProjectsByopex,
    modifProjectsByidBande,
    getProjectsByBande,
    deleteProjectsByFact,
    modifProjectsByidFact,
    getProjectsByFact

}