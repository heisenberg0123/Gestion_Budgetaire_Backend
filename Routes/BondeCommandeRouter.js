const bondeCommande = require("../Controllers/BandeCommandeController.js")

const router=require('express').Router()


router.post('/addBondeComande',bondeCommande.addBondeCommande),
router.get('/getAll',bondeCommande.getAllBondeCommande),
router.get('/getOne/:id',bondeCommande.getBondeCommandeByCode),
router.put('/updateBondeCommande/:id',bondeCommande.modifBondeCommande),
router.delete('/deleteBondeCommande/:id',bondeCommande.deleteBondeCommande)
router.delete('/deleteBondeCommande/Capex/:id',bondeCommande.deleteBondeCommandeByCapex)

router.get('/getOne/parCapex/:id',bondeCommande.getBondeCommandeByCapex),


module.exports = router