const bondeCommandeo = require("../Controllers/BandeCommandeoCOntroller.js")

const router=require('express').Router()


router.post('/addBondeComandeo',bondeCommandeo.addBondeCommandeo),
router.get('/getAll',bondeCommandeo.getAllBondeCommandeo),
router.get('/getOne/:id',bondeCommandeo.getBondeCommandeoByCode),
router.put('/updateBondeCommandeo/:id',bondeCommandeo.modifBondeCommandeo),
router.delete('/deleteBondeCommandeo/:id',bondeCommandeo.deleteBondeCommandeo)

router.delete('/deleteBondeCommande/Opex/:id',bondeCommandeo.deleteBondeCommandeByOpex)

router.get('/getOne/parOpex/:id',bondeCommandeo.getBondeCommandeByOpex),
module.exports = router