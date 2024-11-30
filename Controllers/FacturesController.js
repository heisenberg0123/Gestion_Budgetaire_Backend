const db =require('../models');


const Factures =db.factures;

const addFactures =async(req,res)=>{
    let nvFactures={
        ref:req.body.ref,
        realise:req.body.realise,
        idOpex:req.body.idOpex,
        idCapex:req.body.idCapex,
        idBondecommade:req.body.idBondecommade,
        fournisseur:req.body.fournisseur
    }
    const factures=await Factures.create(nvFactures)
    res.status(200).send(factures)
    console.log(factures)
}

const getAllFactures =async(req,res)=>{
    let factures =await Factures.findAll({})
    res.status(200).send(factures)
}

const getFacturesByCode=async(req,res)=>{
    let id=req.params.id
    let factures =await Factures.findAll({where:{id:id}})
    res.status(200).send(factures)
    console.log(factures)
}

const deleteFactures=async(req,res)=>{
    let id =req.params.id;
    await Factures.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifFactures=async(req,res)=>{
    let id =req.params.id;
    let factures = await Factures.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const deleteFacturesByCapex=async(req,res)=>{
    let id =req.params.id;
    await Factures.destroy({where:{idCapex:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}
const deleteFactByBonde=async(req,res)=>{
    let id =req.params.id;
    await Factures.destroy({where:{idBondecommade:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

module.exports ={
    addFactures,   
    getAllFactures,
    getFacturesByCode,
    deleteFactures,
    modifFactures,
    deleteFacturesByCapex,
    deleteFactByBonde
}