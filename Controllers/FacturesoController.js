const db =require('../models');


const Factureso =db.factureso;

const addFactureso =async(req,res)=>{
    let nvFactureso={
        ref:req.body.ref,
        realise:req.body.realise,
        idOpex:req.body.idOpex,
        idBondecommadeo:req.body.idBondecommadeo,
        fournisseur:req.body.fournisseur
    }
    const factureso=await Factureso.create(nvFactureso)
    res.status(200).send(factureso)
    console.log(factureso)
}

const getAllFactureso =async(req,res)=>{
    let factureso =await Factureso.findAll({})
    res.status(200).send(factureso)
}

const getFacturesoByCode=async(req,res)=>{
    let id=req.params.id
    let factureso =await Factureso.findAll({where:{id:id}})
    res.status(200).send(factureso)
    console.log(factureso)
}

const deleteFactureso=async(req,res)=>{
    let id =req.params.id;
    await Factureso.destroy({where:{id:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}

const modifFactureso=async(req,res)=>{
    let id =req.params.id;
    let factureso = await Factureso.update(req.body,{where:{id:id}})
    res.status(200).send("sucssessfully updated")
    console.log("sucssessfully updated")
}
const deleteFacturesByOpex=async(req,res)=>{
    let id =req.params.id;
    await Factureso.destroy({where:{idOpex:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}
const deleteFactByBondeo=async(req,res)=>{
    let id =req.params.id;
    await Factureso.destroy({where:{idBondecommadeo:id}})
    res.status(200).send("sucssessfully deleted")
    console.log("sucssessfully deleted")
}


module.exports ={
    addFactureso,   
    getAllFactureso,
    getFacturesoByCode,
    deleteFactureso,
    modifFactureso,
    deleteFacturesByOpex,
    deleteFactByBondeo
}